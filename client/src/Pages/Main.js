import React from "react";
import MainComp from "../Components/Main/MainComp";
import BioComp from "../Components/Bio/BioComp";
import Contacts from "../Components/Contacts/Contacts";
import { useDispatch } from "react-redux";
import { setTread } from "../store/storageApp";

function Main() {
  let dispatch = useDispatch();
  dispatch(setTread(false));
  return (
    <>
      <Contacts />
      <MainComp />
      {window.screen.width > 500 ? <BioComp /> : ""}
    </>
  );
}

export default Main;
