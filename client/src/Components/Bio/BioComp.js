import React, { useMemo, useRef, useEffect } from "react";
import "./bio.css";
import Img from "./Img/Img";
import { useSelector } from "react-redux";
import { setBio, setContacts } from "../../store/storageApp";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./Header/Header";
import Button from "./Button/Button";
import Contacts from "./Contacts/BioContacts";
import ExBut from "./ExBut/ExBut";

export default function BioComp() {
  let dispatch = useDispatch();
  let currentUser = useSelector((state) => state.store.currentUser);
  let currentPerson = useSelector((state) => state.store.currentPerson);

  let mobile_bio = useRef();
  let item = currentPerson.id ? currentPerson : currentUser;

  useEffect(() => {
    if (window.screen.width < 500) {
      dispatch(setBio(true));
      dispatch(setContacts(false));
    }
  }, [currentPerson]);



  if (item.id) {
    return window.screen.width > 500 ? (
      <div className="bio">
        <div className="container">
          <Img src={item.img} />
          <Header item={item} />
          {item.id != currentUser.id ? <Button item={item} /> : ""}
          <Contacts args={item} />
          <ExBut isId={item.id == currentUser.id} />
        </div>
      </div>
    ) : (
      <div
        ref={mobile_bio}
        className="mobile_bio"
        style={{ display: "flex", top: 0 }}
      >
        <div className="container_cont_m">
          <Link to={"/main"}>
            <i
   
              onClick={() => dispatch(setBio(false))}
              className="fas close_mobile_bio fa-times"
            ></i>
          </Link>
          <Img src={item.img} />
          <Header item={item} />
          {item.id != currentUser.id ? <Button item={item} /> : ""}
          <Contacts args={item} />
          <ExBut isId={item.id == currentUser.id} />
        </div>
      </div>
    );
  }
}
