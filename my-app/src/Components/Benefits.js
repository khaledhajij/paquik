import React from "react";
import img1 from "../imgs/divFlexImg1.png";
import img2 from "../imgs/divFlexImg2.png";
import bck from "../imgs/benBackground.png";
const Benefits = () => {
  return (
    <div className="benefits" id="benefits">
      <div className="myContainer">
        <h2>Benefits</h2>
        <div className="bckContainer">
          <img src={bck} alt="" />
        </div>
        <div className="flex">
          <div>
            <img src={img1} alt="" />
          </div>
          <div className="traveler">
            <h3>Traveler</h3>
            <p>A more rewarding way to travel!</p>
            <ul className="list traveler">
              <li>Enjoy new experiences</li>
              <li>Earn money while traveling</li>
              <li>Contribute to the community</li>
              <li>Share your culture and socialize</li>
              <li>Take advantage of your extra luggage</li>
            </ul>
          </div>
          <div className="sender">
            <h3>Sender</h3>
            <p>Send items anywhere, anytime!</p>
            <ul className="list sender">
              <li>Send your item quickly</li>
              <li>Interact with other people</li>
              <li>Save money when sending</li>
              <li>Avoid routines and delayed deliveries</li>
              <li>Shorten distances with your loved ones</li>
            </ul>
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
