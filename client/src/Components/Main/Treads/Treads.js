import React from "react";
import "./news.css";

export default function Treads() {
  return (
    <div className="news_main">
      {postsDate && usersDate ? posts : <h1>no posts</h1>}
    </div>
  );
}
