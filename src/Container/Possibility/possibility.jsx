import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/assets/possibility.png";
const possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="" />
      </div>
      <div className="gpt3__possibility-contant">
        <a href="#">Request Early Access to Get Started</a>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <a href="#">Request Early Access to Get Started</a>
      </div>
    </div>
  );
};

export default possibility;
