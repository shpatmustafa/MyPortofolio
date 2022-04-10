import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";
import api from "../utils/axios";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = () => {
    api.get("/project").then((myData) => {
      setProjects(myData.data.data);
    });
  };

  return (
    <div className="portfolio">
      <Title
        classes="portfolio-title"
        title="WORKS"
        subtitle="MY"
        secondTitle="PORTFOLIO"
        class="about-title"
      />
      {projects ? (
        <div className="portfolio-display">
          <ProjectCard projects={projects} />
        </div>
      ) : (
        <p className="no-data">No project found!</p>
      )}
    </div>
  );
};

export default Portfolio;
