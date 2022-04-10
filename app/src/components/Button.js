import React from "react";

const Button = (props) => {
  return (
    <a href="www.google.com" className={props.classes}>
      <div className="button">
        <p>{props.text}</p>
        <span>
          <i className={props.icon} />
        </span>
      </div>
    </a>
  );
};

export default Button;
