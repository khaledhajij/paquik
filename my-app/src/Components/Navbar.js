import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState, useEffect } from "react";
import logo from "../imgs/photo_2022-11-05_20-10-46.jpg";

const Navbar = () => {
  // states
  const [list, setList] = useState(window.innerWidth > 1100 ? true : false);
  const [showNav, setShowNav] = useState(true);
  // handle states
  let handleClick = () => {
    setList((preValue) => !preValue);
  };
  // fade navbar
  window.onscroll = function (e) {
    if (this.oldScroll > this.scrollY) {
      setShowNav(true);
    } else if (this.oldScroll < this.scrollY) {
      setShowNav(false);
    }
    this.oldScroll = this.scrollY;
    console.log(this.oldScroll);
    console.log(this.scrollY);
    delete window.onscroll;
  };
  // render unordered list
  const listEle = [
    "home",
    "about",
    "benefits",
    "features",
    "how it works",
    "blog",
    "partners",
    "FAQs",
    "contact us",
  ];
  const rendList = listEle.map((ele) => (
    <li className="list-group-item">
      <a
        onClick={window.innerWidth < 1100 ? handleClick : null}
        href={`#${ele}`}
      >
        {ele.slice(0, 1).toUpperCase() + ele.slice(1)}
      </a>
    </li>
    //
  ));
  return (
    <div
      className="navbar"
      style={
        (list ? { overflow: "initial" } : { overflow: "hidden" },
        !showNav ? { transform: "translateY(-100px)" } : null)
      }
    >
      <div className="myContainer">
        <div>
          <img src={logo} alt="" />
        </div>
        <FontAwesomeIcon icon={faBars} onClick={handleClick} />
        <ul style={list ? { display: "flex" } : { display: "none" }}>
          {rendList}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
