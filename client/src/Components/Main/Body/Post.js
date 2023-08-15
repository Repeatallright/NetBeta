import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./news.css";
import { Link } from "react-router-dom";
import { DataFetching } from "../../../hooks/DataFetching";
import { getUserById } from "../../../hooks/findCurrentUser";
import { setCurrentPerson, setPostsDate } from "../../../store/storageApp";

function Post(prop) {
  let dispatch = useDispatch();
  let deletedPosts = [];
  let [choosed, setChoosed] = useState(false);
  let block = useRef();
  let postsDate = useSelector((state) => state.store.postsDate);
  let usersDate = useSelector((state) => state.store.usersDate);
  let currentUser = useSelector((state) => state.store.currentUser);
  let socket = useSelector((state) => state.store.socket);

  useEffect(() => {
    commitBlock();
  }, []);

  function logLength() {
    if (typeof prop.item != "string") {
      let id =
        `${Math.floor(Math.random() * 100000)}` +
        `${prop.item.postContent.length}`;
      return id;
    }
  }
  logLength();

  ////////////////////////////
  function commitBlock() {
    if (deletedPosts.includes(prop.item.postId)) {
      if (block.current.classList.value.includes("choosed_bl")) {
        return true;
      }
      setChoosed(true);
      block.current.classList.add("choosed_bl");
    }
  }

  function setBlocks() {
    if (!choosed) {
      if (prop.item.id == currentUser.id) {
        deletedPosts.push(prop.item.postId);
        setChoosed(true);
        block.current.classList.add("choosed_bl");
      }
    } else {
      block.current.classList.remove("choosed_bl");
      setChoosed(false);
      let newArray = deletedPosts.filter((elem) => {
        if (elem != prop.item.postId) return true;
      });
      deletedPosts = newArray;
    }
  }

  async function deleteBlock() {
    let newPosts = [];
    if (choosed) {
      newPosts = await postsDate.map((item) => {
        console.log(item);
        return item.filter((elem) => {
          if (elem != prop.item) {
            return true;
          }
        });
      });
      newPosts = newPosts.filter((item) => item.length > 1);
      dispatch(setPostsDate(await newPosts));
      DataFetching.setPosts(await newPosts);
      console.log(prop);
      callSocket();
    }
  }

  function callSocket() {
    socket.send(
      JSON.stringify({
        method: "message_delete",
        src: prop.item.image[0] ?? false,
      })
    );
  }

  ///////////////////////////////////5555555555

  function openProfile() {
    let user;

    usersDate.forEach((el) => {
      if (el.id === prop.item.id) user = el;
    });
    dispatch(setCurrentPerson(user));
  }

  /////////////////////////////////

  /////////////////////////

  function createImg(prop) {
    if (window.screen.width > 500) {
      return (
        <img
          src={require(`../../../imgs/Users/${
            getUserById(usersDate, prop.item.id).img
          }`)}
          id={prop.item.id}
          onClick={() => openProfile()}
          className="post_img"
          alt=""
        />
      );
    } else {
      return (
        <Link to={"/bio"}>
          <img
            src={require(`../../../imgs/Users/${
              getUserById(usersDate, prop.item.id).img
            }`)}
            id={prop.item.id}
            onClick={() => openProfile()}
            className="post_img"
            alt=""
          />
        </Link>
      );
    }
  }

  ///////////////////////////
  if (usersDate.length) {
    if (typeof prop.item != "string") {
      return (
        <div id={logLength()} onClick={() => setBlocks()} className="post">
          <div ref={block} className="post_body ">
            <div className="main_block">
              <div className="person_img">{createImg(prop)}</div>
              <div className="person_post">
                <div
                  onClick={(e) => e.preventDefault()}
                  className="person_name"
                >
                  {getUserById(usersDate, prop.item.id).name}
                  <div className="person_post_date">{prop.item.postDate}</div>
                </div>
                <div className="person_content">
                  {prop.item.postContent}
                  {prop.item.image.length ? (
                    <img
                      className="post_imgs"
                      src={require(`../../../imgs/Posts/${prop.item.image}`)}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            {choosed ? (
              <i
                onClick={() => deleteBlock()}
                className="fas close_block fa-times"
              ></i>
            ) : (
              ""
            )}
          </div>
        </div>
      );
    } else {
      return <div className="post_time">{prop.item}</div>;
    }
  }
}
export default Post;
