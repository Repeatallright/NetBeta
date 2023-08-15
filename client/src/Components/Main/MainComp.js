import React, { useRef } from "react";
import { useContext } from "react";
import Context from "../../Context/Context";
import { useSelector } from "react-redux";
import Header from "./Header/Header";
import Body from "./Body/Body";
import "./main.css";
import Poster from "./Poster/Poster";
import Message from "./Message/Message";

export default function MainComp() {
  let elem = useRef();
  let isTrade = useSelector((state) => state.store.isTrade);

  return (
    <div ref={elem} className="news">
      <div className="container_news">
        <Header />
        {isTrade ? <Message block={elem} /> : <Body news={elem} />}
        <Poster />
      </div>
    </div>
  );
}
