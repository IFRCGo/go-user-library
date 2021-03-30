import React from "react";

function Button({ children, ...props }) {
  return (
    <button
      tabIndex="0"
      className={`button button--${props.size} button--${props.type}`}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
