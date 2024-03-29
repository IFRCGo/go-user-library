import React from "react";
import _cs from "classnames";

import FormattedNumber from "./../formatted-number/";

function PeopleOverview(props) {
  const {
    targeted = 0,
    reached = 0,
    className,
    reachedTitle,
    targetedTitle,
  } = props;

  const barStyle = React.useMemo(() => {
    let progress = 0;

    if (targeted && targeted !== 0) {
      progress = Math.min(100, (100 * reached) / targeted);
    }

    return { width: `${progress}%` };
  }, [targeted, reached]);

  return (
    <div className={_cs(className, "people-overview box__global")}>
      <h4 className="tc-heading margin-reset">
        <span>{reachedTitle}</span>
      </h4>
      <div className="tc-content">
        <FormattedNumber
          className="reached-people-count tc-value"
          value={reached}
          normalize
          fixedTo={1}
        />
        <div className="tc-progress-bar">
          <div style={barStyle} className="tc-progress" />
        </div>
        <div className="targeted-people">
          <div className="tc-label">{targetedTitle}</div>
          <FormattedNumber
            className="targeted-people-count"
            value={targeted}
            normalize
            fixedTo={1}
          />
        </div>
      </div>
    </div>
  );
}

export default PeopleOverview;
