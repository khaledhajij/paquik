import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ComSayed from "./comSayed";

const WAST = () => {
  const data = [
    { name: "Khaled hajij", stars: 4 },
    { name: "Mohamad said", stars: 5 },
    { name: "Ahmad sa`eed", stars: 3 },
  ];
  const comRnd = data.map((datium, index) => (
    <ComSayed {...datium} id={index} dataLen={data.length} />
  ));
  return (
    <div className="wast">
      <div className="grayRec">
        <div className="text">
          <h4>What are Senders & Travelers Saying About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo.
          </p>
        </div>
        <div class="slider-container">
          <div class="slider">
            <div class="slides">{comRnd}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WAST;
