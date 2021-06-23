import React from "react";
import InfoIcon from "./info-icon";
import ReactTooltip from "react-tooltip";

const Tooltip = ({type, title, description}) => {
    console.log(type);
    return (
        <React.Fragment>
            {type === 'popup' ? (
                <a
                    data-tip
                    data-for={title ? title : description}
                    data-event="click focus"
                >
                    POPUPs
                    <InfoIcon className="popup"/>
                </a>
            ) : null}
            {type === 'popup' ? (
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
                            dangerouslySetInnerHTML={{__html: description}}
                        ></span>
                    ) : null}
                </ReactTooltip>
            ) : null}


            {type != 'popup' ? (
                <a
                    data-tip
                    data-for={title ? title : description}
                    data-event="click focus"
                >
                    <InfoIcon className="tooltip"/>
                </a>
            ) : null}
            {type != 'popup' ? (
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
                            dangerouslySetInnerHTML={{__html: description}}
                        ></span>
                    ) : null}
                </ReactTooltip>
            ) : null}

        </React.Fragment>
    );
};

export const HoverTooltip = ({title, description, id}) => {
    return (
        <ReactTooltip className="tooltip" id={id}>
            {title ? <header className="tooltip__header">{title}</header> : null}
            {description ? (
                <span
                    className="tooltip__text"
                    dangerouslySetInnerHTML={{__html: description}}
                ></span>
            ) : null}
        </ReactTooltip>
    );
};

export default Tooltip;
