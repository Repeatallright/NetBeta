import { useContext } from "react";
import Context from "../../../Context/Context";
import { useDispatch } from "react-redux";
import "./header.css";
import {
  setContacts,
  setCurrentPerson,
  setTread,
} from "../../../store/storageApp";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  let dispatch = useDispatch();
  let isTrade = useSelector((state) => state.store.isTrade);
  let currentPerson = useSelector((state) => state.store.currentPerson);

  function BackBut() {
    dispatch(setTread(false));
    dispatch(setCurrentPerson({}));
  }

  return !isTrade ? (
    <div className="news_header">
      <div className="menu_open" onClick={() => dispatch(setContacts(true))}>
        <i
          className="fa-solid fa-bars bar"
          onClick={() => dispatch(setContacts(true))}
        ></i>
      </div>
      Posts
    </div>
  ) : (
    <div className="news_header">
      <Link
        to="/main"
        style={{ fontSize: "1em" }}
        onClick={() => BackBut()}
        className="return_news_main"
      >
        <i className="fas some_little fa-arrow-left"></i>
      </Link>
      <div>{currentPerson.name}</div>
    </div>
  );
}
export default Header;
