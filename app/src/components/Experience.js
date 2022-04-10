import React from "react";

const Experience = (props) => {
  return (
    <div className="experience-years">
      {props.year.map((years) => (
        <div className="experience" key={years.key}>
          <div className="year-experience">
            <h1>{years.number}</h1>
            <span>{years.icon}</span>
            <p>{years.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
