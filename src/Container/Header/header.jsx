import React from "react";
import "./header.css";
import people from "../../assets/assets/people.png";
import ai from "../../assets/assets/ai.png";
const header = () => {
  return (
    <div className="gpt3__header section__padding" id="Home">
      <div className="gpt3__header-contant">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-Z OpenAI
        </h1>
        <p className="ds">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="gpt3__header-contant__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-contant__users">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-images">
        <img src={ai} alt="Ai" />
      </div>
    </div>
  );
};

export default header;
