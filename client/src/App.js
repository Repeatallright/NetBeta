import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
/////////////////////////Blocks pages
import Error from "./Pages/Error";
import Bio from "./Pages/Bio";
import Main from "./Pages/Main";
import Messager from "./Pages/Messager";
import MessagerList from "./Pages/MessagerList";
import Registrate from "./Pages/Registrate";
import {
  setUsersDate,
  setPostsDate,
  setSocket,
  setCurrentUser,
} from "./store/storageApp";
import { DataFetching } from "./hooks/DataFetching";
import { useSelector } from "react-redux";
import { useCallback } from "react";
/////////////////////////Blocks pages

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    DataFetching.getUsers((arg) => dispatch(setUsersDate(arg)));
    DataFetching.getPosts((arg) => dispatch(setPostsDate(arg)));
  }, []);

  /////////////////SOCKET
  useEffect(() => {
    function setupWebSocket() {
      let socket = new WebSocket(`ws://${DataFetching.ip}:4001/`);
      dispatch(setSocket(socket));
      socket.onmessage = (event) => {
        let msg = JSON.parse(event.data);
        switch (msg.method) {
          case "message":
            printMsg(msg);
            break;
          case "message_delete":
            printMsg(msg);
            break;
        }
      };
      socket.onerror = "...";
      socket.onopen = "...";
      socket.onclose = function () {
        setTimeout(setupWebSocket, 1000);
      };
    }
    setupWebSocket();
  }, []);
  ///////////////////SOCKET

  const printMsg = useCallback(() => {
    console.log("printing another message");
    DataFetching.getPosts((arg) => dispatch(setPostsDate(arg)));
    setTimeout(() => {
      window.scrollBy({
        top: 10000000000,
        behavior: "smooth",
      });
    }, 10);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Registrate />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/messager" element={<Messager />} />
        <Route path="main" element={<Main />} />
        <Route path="/messagerlist" element={<MessagerList />} />
        <Route path="/Error" element={<Error />} />
        <Route path="*" element={<Registrate />} />
      </Routes>
    </>
  );
}
export default App;
