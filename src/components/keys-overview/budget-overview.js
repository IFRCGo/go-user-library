import React from "react";
import _cs from "classnames";
import FormattedNumber from "./../formatted-number/";

function TextOutput(p) {
  const { label, value = 0 } = p;

  return (
    <div className="bo-text-output">
      <FormattedNumber
        className="tc-value"
        value={value}
        normalize
        fixedTo={1}
      />
      <div className="tc-label">{label}</div>
    </div>
  );
}

function BudgetOverview(p) {
  const {
    totalBudget,
    nsCountWithOngoingActivity,
    className,
    nsCountWithOngoingActivityTitle,
    totalBudgetTitle,
  } = p;

  return (
    <div className={_cs(className, "budget-overview box__global")}>
      <TextOutput
        label={nsCountWithOngoingActivityTitle}
        value={nsCountWithOngoingActivity}
      />
      <TextOutput label={totalBudgetTitle} value={totalBudget} />
    </div>
  );
}

export default BudgetOverview;
