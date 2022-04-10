import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return props.projects.map((p) => (
    <Link className="project-card container1" to="/">
      <img src={p.image[0].name}></img>

      <div>
        <h1>{p.name}</h1>
      </div>
    </Link>
  ));
};

export default ProjectCard;
