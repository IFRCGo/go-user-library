import React from "react";

const Button = (props) => {
  return (
    <button
      tabIndex="0"
      className={`button button--${props.classSize} button--${props.classType}`}
      type={props.type}
    >
      <span>{props.name}</span>
    </button>
  );
};

export default Button;
