import React from "react";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";

const Portfolio = () => {
  const images = [
    {
      image: "https://tunis.ibthemespro.com/img/projects/project-2.jpg",
      title: "MOCKUP PROJECT",
    },
    {
      image: "https://tunis.ibthemespro.com/img/projects/project-2.jpg",
      title: "MOCKUP PROJECT",
    },
    {
      image: "https://tunis.ibthemespro.com/img/projects/project-2.jpg",
      title: "MOCKUP PROJECT",
    },
    {
      image: "https://tunis.ibthemespro.com/img/projects/project-2.jpg",
      title: "MOCKUP PROJECT",
    },
    {
      image: "https://tunis.ibthemespro.com/img/projects/project-2.jpg",
      title: "MOCKUP PROJECT",
    },
    {
      image: "https://tunis.ibthemespro.com/img/projects/project-2.jpg",
      title: "MOCKUP PROJECT",
    },
  ];
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
      <div className="portfolio-display">
        <ProjectCard image={images} />
      </div>
    </div>
  );
};

export default Portfolio;
