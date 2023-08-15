import React from "react";
import MainComp from "../Components/Main/MainComp";
import BioComp from "../Components/Bio/BioComp";
import Contacts from "../Components/Contacts/Contacts";
import { useDispatch, useSelector } from "react-redux";
import { setTread } from "../store/storageApp";
import { useNavigate } from "react-router";

function MessagerList() {
  let isTread = useSelector((state) => state.store.isTrade);
  let navigate = useNavigate();
  if (!isTread) navigate("/main");
  return (
    <>
      <Contacts />
      {/* <MessagerListComp /> */}
      {window.screen.width > 500 ? <BioComp /> : ""}
    </>
  );
}

export default MessagerList;
