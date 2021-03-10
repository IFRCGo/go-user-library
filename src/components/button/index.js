import React from "react";

function Button(props) {
  const inputType = props.type;

  if (inputType) {
    return (
      <button
        tabIndex="0"
        className={`button button--primary-filled button--small ${props.class}`}
        type={props.type}
      >
        {props.name}
        {(() => {
          if (props.icon) {
            return <i className="material-icons-round">{props.icon}</i>;
          }
        })()}
      </button>
    );
  }

  return (
    <button
      tabIndex="0"
      className={`button button--primary-filled button--small ${props.class}`}
    >
      {props.name}
      {(() => {
        if (props.icon) {
          return <i className="material-icons-round">{props.icon}</i>;
        }
      })()}
    </button>
  );
}

export default Button;
