import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import scrolling from "../../../hooks/scrolling";
import Post from "./Post";
import "./news.css";

export default function Body(prop) {
  let postsDate = useSelector((state) => state.store.postsDate);
  let usersDate = useSelector((state) => state.store.usersDate);
  let newsMain = useRef();

  useEffect(() => {
    setTimeout(() => {
      scrolling(prop.news, window.screen.width);
    }, 100);
  }, [postsDate]);

  const posts = useMemo(
    () =>
      postsDate[0]
        ? postsDate.map((item) =>
            item.map((item) => <Post key={Math.random()} item={item} />)
          )
        : "",
    [postsDate, usersDate]
  );

  return (
    <div className="news_main">
      {postsDate && usersDate ? posts : <h1>no posts</h1>}
    </div>
  );
}
