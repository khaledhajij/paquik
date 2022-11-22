import React, { useState } from "react";
import airplane from "../imgs/Airplane.jpg";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCirclePause,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import keyboard from "../imgs/keyboard.mp4";
const About = () => {
  const [play, setPlay] = useState(true);
  let handleClick = () => {
    play
      ? document.getElementById("kbdVid").play()
      : document.getElementById("kbdVid").pause();
    setPlay((preValue) => !preValue);
  };
  return (
    <div className="about" id="about">
      <div className="img">
        <img src={airplane} alt="" />
      </div>
      <div className="myContainer">
        <div className="textSection">
          <p>
            <span>About</span> Paquik
          </p>
          <p className="text">
            Paquik is the trustworthy all-in-one platform that lets you securely
            send items with travelers all around the world quicker and cheaper
            than the usual courier; it lets you be part of a community driven by
            people who can always make it happen.
          </p>
          <p className="text">
            Send parcels or documents to your family and friends, connect with
            travelers who want to make their trip rewarding and share your
            culture all over the world.
          </p>
        </div>
        <div className="rectangle2">
          <video src={keyboard} id="kbdVid" muted loop></video>
          <div className="rectangle"></div>
          <FontAwesomeIcon
            className="icon"
            icon={play ? faCirclePlay : faCirclePause}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
