import React from "react";

function Button(props) {
  const inputType = props.type;

  if (inputType) {
    return (
      <button
        tabIndex="0"
        className={`button button--small button--primary-${props.class}`}
        type={props.type}
      >
        {props.name}
      </button>
    );
  }

  return (
    <button
      tabIndex="0"
      className={`button button--small button--primary-${props.class}`}
    >
      {props.name}
    </button>
  );
}

export default Button;
