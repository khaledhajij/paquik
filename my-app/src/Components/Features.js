import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import features from "../imgs/features.png";
import React from "react";

const Features = () => {
  return (
    <div className="features" id="features">
      <div className="myContainer">
        <div className="grayRec">
          <img src={features} alt="" className="features" />
          <div className="ftrs-text">
            <h3>Features</h3>
            <p>
              Experience our awesome tools that make your journey more easy and
              friendly
            </p>
          </div>
          <div className="ratingRec">
            <div className="starCircle">
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <h3>Rating and Review</h3>
            <p>
              Share your experience by supporting others and feel supported by
              them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
