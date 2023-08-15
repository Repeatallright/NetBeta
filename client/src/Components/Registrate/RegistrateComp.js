import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  setCurrentUser,
  setIsReg,
  setRegister,
  setIsPosts,
  setPostsDate,
  setCurrentItem,
  setUsersDate,
} from "../../store/storageApp";
import Login from "./login";
import Singin from "./singin";
import { useRef } from "react";
import Context from "../../Context/Context";
import { missedE, missedN, missedP } from "./helpers/missed";
import configurate from "./helpers/configurate";
import { DataFetching } from "../../hooks/DataFetching";
import generateID from "../../hooks/userID";
import move from "../../hooks/move";
import { useSelector } from "react-redux";
import "./registrate.css";

export default function Registrate() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let name = useRef();
  let email = useRef();
  let password = useRef();
  let iteme = useRef();
  const hideBlock = useRef();
  let register = useSelector((state) => state.store.register);
  let usersDate = useSelector((state) => state.store.usersDate);
  let isReg = useSelector((state) => state.store.isReg);

  let img;
  let confE;
  let confP;
  let confN;
  let isMobile = window.screen.width < 500;
  let conf = { name: false, email: false, password: false, img: false };

  useEffect(() => {
    if (isReg) navigate("main");
  });

  document.addEventListener("keyup", (e) =>
    e.key == "Enter" ? (!register ? Enter() : Registrate()) : false
  );

  const showError = () => navigate("/Error");
  function callMistake(arr1, arr2, arr3 = false) {
    if (register) {
      console.log(usersDate.length);
      if (!arr1) missedE(email);
      if (!arr2) missedP(password);
      if (!arr3) missedN(name);
    } else {
      if (!arr1) missedE(email);
      if (!arr2) missedP(password);
    }
  }

  ////////////////////////////////////////////////

  function commit(arg) {
    dispatch(setPostsDate(arg));
    dispatch(setIsPosts(true));
  }
  ///////////////////////////////////////////

  const setImg = (e) => (img = e);

  /////////////////////////////////

  async function Registrate() {
    if (configurate(name, email, password, img)) {
      let newUser = await {
        email: email.current.value,
        password: password.current.value,
        name: name.current.value,
        img: img,
        id: generateID(),
        friends: { friends: [], requests: [], unfollowed: [] },
        treads: {},
      };
      await dispatch(setUsersDate([...usersDate, newUser]));
      await DataFetching.setUsers([...usersDate, newUser]);
      await dispatch(setRegister(false));
    } else {
      if (!conf.email) confE = false;
      if (!conf.password) confP = false;
      if (!conf.name) confN = false;

      callMistake(confE, confP, confN);
    }
  }
  //////////////////////////////////////////////

  async function Enter() {
    usersDate.forEach((item) => {
      if (
        email.current.value === item.email &&
        password.current.value === item.password
      ) {
        dispatch(setCurrentUser(item));
        dispatch(setCurrentItem(item));
        if (isMobile) move(true, iteme, hideBlock);
        dispatch(setIsReg(true));
        DataFetching.getPosts(commit, showError);
        navigate("/main");
        return false;
      }
      if (email.current.value != item.email) confE = false;
      if (password.current.value != item.password) confP = false;
    });
    console.log("something bad");
    callMistake(confE, confP);
  }

  //////////////////////////////////////////////

  return (
    <Context.Provider
      value={{
        setImg,
        Registrate,
        Enter,
        usersDate,
        name,
        email,
        password,
        img,
        iteme,
        hideBlock,
        setRegister,
        isMobile,
      }}
    >
      <div className="register_bio">{!register ? <Login /> : <Singin />}</div>
    </Context.Provider>
  );
}
