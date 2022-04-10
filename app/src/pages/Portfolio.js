import React from "react";
import Title from "../components/Title";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Title
        classes="portfolio-title"
        title="WORKS"
        subtitle="MY"
        secondTitle="PORTFOLIO"
        class="about-title"
      />
      <div className="my-project">
        <ul>
          <li>
            <a href="#">PROJECT</a>
          </li>
          <li>
            <a href="#">DESIGN</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
