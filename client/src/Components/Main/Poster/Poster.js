import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { DataFetching } from "../../../hooks/DataFetching";
import { useDispatch } from "react-redux";
import "./poster.css";
import currentIndex from "../../../hooks/findCurrentUser";
import currentIndexPerson from "../../../hooks/findCurrentUser";
import { useSelector } from "react-redux";
import {
  setCount,
  setCurrentUser,
  setPostsDate,
  setUsersDate,
} from "../../../store/storageApp";
import axios from "axios";
import {
  getCurrentTime,
  getCurrentDate,
  createCollectPost,
  createPostId,
  pushToList,
  pushNewMessage,
} from "./utils";
import ImagesLine from "./ImagesLine";

function Poster() {
  let dispatch = useDispatch();
  let main_block = useRef();
  const MAX_IMAGES = 4;
  const message = useRef();
  let input = useRef();
  let [postImage, setPostImage] = useState([]);
  let currentUser = useSelector((state) => state.store.currentUser);
  let postsDate = useSelector((state) => state.store.postsDate);
  let isTrade = useSelector((state) => state.store.isTrade);
  let currentPerson = useSelector((state) => state.store.currentPerson);
  let usersDate = useSelector((state) => state.store.usersDate);
  let socket = useSelector((state) => state.store.socket);
  let [imageArrey, setImageArrey] = useState([]);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const getImage = async (event) => {
    console.log("aaa");
    const image = event.target.files[0];
    const formData = new FormData();
    await formData.append("upload", image);
    let info = axios.post("http://192.168.0.107:4001/upload", formData);
    console.log("aaa");
    console.log((await info).data.originalname);
    await setPostImage(
      postImage.length < MAX_IMAGES
        ? [...postImage, (await info).data.originalname]
        : postImage
    );
    await setImageArrey(
      postImage.length < MAX_IMAGES
        ? [...imageArrey, (await info).data.originalname]
        : imageArrey
    );
    input.current.value = "";
  };
  //////////////////////////
  async function collect(posts, post, users, date) {
    if (currentUser && !isTrade) {
      let newUsers = pushToList(date, posts, post);
      dispatch(setPostsDate(newUsers));
      DataFetching.setPosts(newUsers);
    } else if (isTrade) {
      let newMessages = pushNewMessage(
        users,
        currentUser,
        currentPerson,
        date,
        post,
        currentIndex,
        currentIndexPerson
      );
      dispatch(setUsersDate(newMessages));
      dispatch(
        setCurrentUser(newMessages[currentIndex(newMessages, currentUser)])
      );
      DataFetching.setUsers(newMessages);
    }
    message.current.value = "";
  }
  ///////////////////

  async function callSocket() {}

  async function initialPost() {
    let content = message.current.value;
    let posts = postsDate ? [...postsDate] : [];
    let users = usersDate ? [...usersDate] : [];
    let time = getCurrentTime();
    let date = getCurrentDate(weekNames, monthNames);
    let postId = createPostId(content);
    let image = await postImage;
    let post = createCollectPost(time, content, postId, image, currentUser);
    if (image || post) {
      collect(posts, post, users, date);
      callSocket();
    }
    setImageArrey([]);
    setPostImage([]);
  }

  return (
    <div ref={main_block} className="message_in">
      {imageArrey.length && main_block.current ? (
        <ImagesLine
          imgArr={imageArrey}
          mainW={main_block.current}
          setImg={setImageArrey}
        />
      ) : (
        ""
      )}
      <div className="block">
        <div className="message_left">
          <input
            ref={message}
            type="text"
            className="message_input"
            placeholder="Message in..."
          />
        </div>
        <div className="message_right">
          <i className="fa-solid fa-paperclip file_add">
            <input
              ref={input}
              type="file"
              accept="image/png, image/jpg, mage/jpeg"
              className="file_input"
              onChange={(e) => getImage(e)}
            />
          </i>
          <i
            className="fas message_send fa-circle-notch"
            onClick={() => initialPost()}
          ></i>
        </div>
      </div>
    </div>
  );
}
export default Poster;
