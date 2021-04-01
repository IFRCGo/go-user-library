import React from "react";
import StatusOverview from "./status-overview";
import BudgetOverview from "./budget-overview";
import PeopleOverview from "./people-overview";

const data = [
  { name: "Completed", value: 19, color: "#f5333f" },
  { name: "Ongoing", value: 181, color: "#f7969c" },
  { name: "Planned", value: 33, color: "#f9e5e6" },
];

function KeysOverview() {
  return (
    <div className="page--region">
      <div className="regional-threew">
        <div className="regional-threew-overview row-lg flex-mid">
          <div className="col-lg col-4-mid">
            <BudgetOverview
              totalBudget="107.1M"
              totalBudgetTitle="Total budget"
              nsCountWithOngoingActivity="19"
              nsCountWithOngoingActivityTitle="NS with ongoing activities"
            />
          </div>
          <div className="col-lg col-4-mid">
            <PeopleOverview
              targeted="555"
              targetedTitle="Targeted"
              reached="3333"
              reachedTitle="TOTAL NUMBER OF PEOPLE REACHED"
            />
          </div>
          <div className="col-lg col-4-mid">
            <StatusOverview
              title="Total activities by status"
              label="Total activities"
              total="233"
              data={data}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default KeysOverview;
