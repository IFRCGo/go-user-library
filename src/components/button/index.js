import React from "react";

function Button(props) {
  const inputType = props.type;

  if (inputType) {
    return (
      <button
        tabIndex="0"
        className={`button button--${props.classSize} button--${props.classType}`}
        type={props.type}
      >
        <span>{props.name}</span>
      </button>
    );
  }
  return (
    <button
      tabIndex="0"
      className={`button button--${props.classSize} button--${props.classType}`}
    >
      <span>{props.name}</span>
    </button>
  );
}

export default Button;
