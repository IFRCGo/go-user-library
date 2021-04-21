import React from "react";
import Tooltip from "./../tooltip";

function KeyFigures(props) {
  const data = props.data;
  const listItems = data.map((item, i) => (
    <li key={i} className="sumstats__item__wrap">
      <div className="sumstats__item">
        <span className="sumstats__icon_wrapper">
          <img className="sumstats__icon_2020" src={item.src} alt={item.key} />
        </span>
        <span className="sumstats__value">{item.value}</span>
        <span className="sumstats__key">
          {item.key}
          {item.tooltip ? (
            <Tooltip
              title={item.tooltip.title}
              description={item.tooltip.description}
            />
          ) : null}
        </span>
      </div>
    </li>
  ));
  return (
    <div>
      <div className="inpage__header-col">
        <div className="inpage__headline-stats inpage__headline-stats--emergency">
          <div className="sumstats__wrap">
            <ul className="sumstats">{listItems}</ul>
          </div>
        </div>
      </div>
      <div className="funding-chart"></div>
    </div>
  );
}

export default KeyFigures;
