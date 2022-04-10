import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return props.image.map((images) => (
    <Link className="project-card container1" to="/">
      <img src={images.image}></img>

      <div>
        <h1>{images.title}</h1>
      </div>
    </Link>
  ));
};

export default ProjectCard;
