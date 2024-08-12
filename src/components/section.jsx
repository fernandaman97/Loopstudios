import React from "react";
import "./section.scss";
const Section = () => {
  return (
    <section className="section1">
      <img
        className="image-interactive"
        src="./public/images/jpg/image-interactive.jpg"
        alt=""
      />
      <div className="leader-VR">
        <h2>THE LEADER IN INTERACTIVE VR</h2>
        <br />
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed bussiness through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default Section;