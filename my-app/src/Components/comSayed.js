import {
  faChevronLeft,
  faChevronRight,
  faQuoteLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ComSayed = (props) => {
  const starsID = [1, 2, 3, 4, 5];
  const starsRend = starsID.map((id) => (
    <FontAwesomeIcon
      icon={faStar}
      style={props.stars >= id ? { color: "#FFCE31" } : null}
    />
  ));
  return (
    <div className="comSayed slide" id={props.id}>
      <FontAwesomeIcon icon={faQuoteLeft} />
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo. Labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
      </p>
      <div className="user">
        <div className="circle"></div>
        <div className="rating">
          <p className="name">{props.name}</p>
          {starsRend}
        </div>
      </div>
      <div className="nav">
        {props.id - 1  >= 0 && <a href={`#${props.id - 1}`}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </a>}
        {props.id + 1 < props.dataLen && <a href={`#${props.id + 1}`}>
          <FontAwesomeIcon icon={faChevronRight} />
        </a>}
      </div>
    </div>
  );
};

export default ComSayed;
