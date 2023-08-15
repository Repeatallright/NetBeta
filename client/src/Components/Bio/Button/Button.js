import { useEffect, useRef, useState } from "react";

import addFriend from "../../../hooks/addFriend";
import { DataFetching } from "../../../hooks/DataFetching";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./button.css";
import {
  setBio,
  setCurrentPerson,
  setCurrentUser,
  setTread,
  setUsersDate,
} from "../../../store/storageApp";
import { useSelector } from "react-redux";
import { getUserById } from "../../../hooks/findCurrentUser";

function Button(props) {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let but = useRef();
  let usersDate = useSelector((state) => state.store.usersDate);
  let currentPerson = useSelector((state) => state.store.currentPerson);
  let currentUser = useSelector((state) => state.store.currentUser);
  let [userCondition, setUserCondition] = useState("");

  useEffect(() => {
    if (
      currentUser.friends.friends?.includes(currentPerson.id) &&
      currentPerson.friends.friends?.includes(currentUser.id)
    )
      setUserCondition("Write");
    else if (
      currentUser.friends.unfollowed?.includes(props.item.id) &&
      currentPerson.friends.requests?.includes(currentUser.id)
    )
      setUserCondition("Unfollowed");
    else if (
      currentUser.friends.requests?.includes(props.item.id) &&
      currentPerson.friends.unfollowed?.includes(currentUser.id)
    )
      setUserCondition("Accept");
    else setUserCondition("Add friend");
  }, []);

  const butClick = () => {
    if (userCondition == "Write") {
      dispatch(setTread(true));
      dispatch(setBio(false));
      navigate("/messager");
      console.log("clicked");
    } else if (userCondition == "Add friend") {
      depends(false);
    } else if (userCondition == "Unfollowed" || userCondition == "Accept") {
      depends(true);
    }
  };

  const depends = (arg) => {
    let newUsers = addFriend(usersDate, currentUser, props.item, arg);
    dispatch(setUsersDate(newUsers));
    dispatch(setCurrentUser(getUserById(newUsers, currentUser.id)));
    dispatch(setCurrentPerson(getUserById(newUsers, currentPerson.id)));
    DataFetching.setUsers(newUsers);
  };

  return (
    <div className="bio_message">
      <div ref={but} className="add_friend" onClick={() => butClick()}>
        {userCondition}
      </div>
    </div>
  );
}
export default Button;

// if(isFriend){
//     dispatch(setTread(true))
//     if(window.screen.width < 500)  props.closeBio()
// }
// else{
//     if( condition != 'Unfollow'){
//         let newUsers = addFriend(usersDate, currentUser, currentPerson, false)
//         dispatch(setUsersDate(newUsers))
//         DataFetching.setUsers(newUsers)
//     }

// }
