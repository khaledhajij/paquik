import React from "react";

const Section = (props) => {
  return (
    <div className="section">
      <div className="grayRec">
        <img src={props.img} alt="" />
      </div>
      <div className="text">
        <h4>{props.title}</h4>
        <p>{props.par}</p>
      </div>
    </div>
  );
};

export default Section;
