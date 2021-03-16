import React from "react";

const LinkButton = (props) => {
  return (
    <a
      tabIndex="0"
      href={props.href}
      className={`button button--${props.classSize} button--${props.classType}`}
    >
      {(() => {
        if (props.icon) {
          return <span className={`margin-half-r f-icon-${props.icon}`}></span>;
        }
      })()}
      <span className="button-text">{props.name}</span>
    </a>
  );
};

export default LinkButton;
