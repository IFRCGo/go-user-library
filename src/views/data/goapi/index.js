import React from "react";

const GoApiPage = () => {
    return (
        <div className="inner">
            <div className="fold__body">
                <div className="container-full">
                    <h1>GO API templates</h1>
                    <p>
                        API templates and guidance to help you build customised dashboards and other data tools that
                        connect dynamically to the GO database.
                    </p>

                    <p>
                        <ul>
                            <li><strong>Example 0</strong> Get Authorization Token</li>
                            <li><strong>Example 1</strong> Projects per Sector</li>
                            <li><strong>Example 2</strong> Projects per Status</li>
                            <li><strong>Example 3</strong> Surge Alerts grouped by Deployment Needed</li>
                            <li><strong>Example 4</strong> Get Appeal Documents by Appeal Code</li>
                            <li><strong>Example 5</strong> Events in Countries</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default GoApiPage;
