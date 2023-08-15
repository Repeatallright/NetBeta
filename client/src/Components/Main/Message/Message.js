import React from "react";
import { useEffect } from "react";
import scrolling from "../../../hooks/scrolling";
import Mess from "./Mess";
import "./treads.css";
import { useSelector } from "react-redux";

function Message(props) {
  let currentUser = useSelector((state) => state.store.currentUser);
  let currentPerson = useSelector((state) => state.store.currentPerson);
  let usersDate = useSelector((state) => state.store.usersDate);
  useEffect(() => {
    scrolling(props.block, window.screen.width);
  }, []);
  if (currentUser.treads[currentPerson.id]) {
    return (
      <div className="tread_main">
        {currentUser.treads[currentPerson.id].map((user) => {
          return (
            <Mess key={Math.random()} user={user} currentUser={currentUser} />
          );
        })}
      </div>
    );
  }
}

export default Message;
