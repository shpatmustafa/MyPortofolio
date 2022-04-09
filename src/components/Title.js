import React from "react";

const Title = (props) => {
  return (
    <div>
      <h1 className={props.class}>{props.title}</h1>
      <div className="title-position">
        <h1 className={props.classes}>{props.subtitle}</h1>
        <span className="about-secondtitle">{props.secondTitle}</span>
      </div>
    </div>
  );
};

export default Title;
