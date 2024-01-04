import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggle } from "../store/hamburgerSlice";

const Hamburger = () => {
  const isOpen = useSelector((state: any) => state.hamburger);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };

  return (
    <>
      <button className={"hamburger" + (isOpen ? " is-active" : "")} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
};

export default Hamburger;