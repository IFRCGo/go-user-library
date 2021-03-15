import React from "react";

const Link = (props) => {
  return (
    <a tabIndex="0" href={props.href} className={`${props.class}`}>
      <span>{props.name}</span>
      {(() => {
        if (props.icon) {
          return (
            <span className={`icon-about-ref collecticon-${props.icon}`}></span>
          );
        }
      })()}
    </a>
  );
};

export default Link;
