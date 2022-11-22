import React from "react";
import sectionData from "../sectionData";
import Section from "./Section";

const HowItWorks = () => {
  const scsArr = sectionData.map((sectionDt) => <Section {...sectionDt} />);
  return (
    <div className="howitworks">
      {scsArr}
    </div>
  );
};

export default HowItWorks;
