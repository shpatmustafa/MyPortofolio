import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="home container">
      <div className="home-image "></div>
      <div className="home-content">
        <h1 className="title-color">I'M SHPAT MUSTAFA.</h1>
        <h1>WEB DESIGNER</h1>
        <p>
          I'm a Tunisian based web designer & front‑end developer focused on
          crafting clean & user‑friendly experiences, I am passionate about
          building excellent software that improves the lives of those around
          me.
        </p>
        <div>
          <Button
            icon="bx bx-right-arrow-alt"
            text="MORE ABOUT ME"
            classes="home-button btn"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
