import React from "react";
import InfoIcon from "./info-icon";
import ReactTooltip from "react-tooltip";

const Tooltip = ({ title, description }) => {
  return (
    <React.Fragment>
      <a
        data-tip
        data-for={title ? title : description}
        data-event="click focus"
      >
        <InfoIcon className="tooltip" />
      </a>
      <ReactTooltip
        className="tooltip"
        globalEventOff="click"
        id={title ? title : description}
        aria-haspopup="true"
      >
        {title ? <header className="tooltip__header">{title}</header> : null}
        {description ? (
          <span
            className="tooltip__text"
            dangerouslySetInnerHTML={{ __html: description }}
          ></span>
        ) : null}
      </ReactTooltip>
    </React.Fragment>
  );
};

export const HoverTooltip = ({ title, description, id }) => {
  return (
    <ReactTooltip className="tooltip" id={id}>
      {title ? <header className="tooltip__header">{title}</header> : null}
      {description ? (
        <span
          className="tooltip__text"
          dangerouslySetInnerHTML={{ __html: description }}
        ></span>
      ) : null}
    </ReactTooltip>
  );
};

export default Tooltip;
