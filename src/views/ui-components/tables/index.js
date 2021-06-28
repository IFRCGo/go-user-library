import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import ReactDOMServer from "react-dom/server";
import Code from "./../../../hoc/source-code";
import DisplayTable from "../../../components/tables";

const htmlString = ReactDOMServer.renderToStaticMarkup(
    <div className="tables__block">
    <span>
      <span>
        <a className="tables" order="1" href="/get-started">
          Home
        </a>
        <span className="tables__next"> &gt; </span>
      </span>
      <b order="0" to="/ui-components/tables" className="tables">
        Tables
      </b>
    </span>
    </div>
);

const headingsOne = [
    {
        Header: 'Table / Label & Body 56px',
        Footer: 'Name',
        columns: [
            {
                Header: 'Label',
                accessor: 'label',
                Footer: 'Label',
            },
            {
                Header: 'Label',
                accessor: 'label2',
                Footer: 'Label',
            }
        ],
    },
];

const rowsOne = [
    {
        "label": "1",
        "label2": "1",
    },
    {
        "label": "2",
        "label2": "2",
    }
];

const headingsTwo = [
    {
        Header: 'Table / Body 56px',
        Footer: 'Footer Text',
        columns: [
            {
                Header: 'Entry',
                accessor: 'entry',
            },
            {
                Header: 'Entry Link',
                accessor: 'entryLink',
            },
            {
                Header: 'Entry',
                accessor: 'percent',
            }
        ],
    },
];

const rowsTwo = [
    {
        "entry": "1"
    }
];


const headingsThree = [
    {
        Header: 'Table / Body 72px',
        Footer: 'Footer Text',
        columns: [
            {
                Header: 'Entry',
                accessor: 'entry',
            },
            {
                Header: 'Entry Link',
                accessor: 'entryLink',
            },
            {
                Header: 'Entry',
                accessor: 'percent',
            }
        ],
    },
];

const rowsThree = [
    {
        "entry": "1"
    }
];

const headingsFour = [
    {
        Header: 'Table - 56px',
        Footer: 'Footer text',
        columns: [
            {
                Header: 'Start Date',
                accessor: 'start_date'
            },
            {
                Header: 'Appeal Type',
                accessor: 'appeal_type'
            },
            {
                Header: 'Appeal Code',
                accessor: 'appeal_code'
            },
            {
                Header: 'Active Operations',
                accessor: 'operations'
            },
            {
                Header: 'Disaster Type',
                accessor: 'disaster'
            },
            {
                Header: 'Funding Requirements',
                accessor: 'requirements'
            },
            {
                Header: 'Funding Coverage',
                accessor: 'coverage'
            }
        ]
    },
];

const rowsFour = [
    {
        start_date: '2018-09-18',
        appeal_type: 'DREF',
        appeal_code: 'MDRUA010',
        operations: 'Venezuela: Conflict',
        disaster: 'Epidemic',
        requirements: '208,367 CHF',
        coverage: '80%'
    },
    {
        start_date: '2018-09-18',
        appeal_type: 'DREF',
        appeal_code: 'MDRUA010',
        operations: 'Venezuela: Conflict',
        disaster: 'Epidemic',
        requirements: '208,367 CHF',
        coverage: '80%'
    }
];



const headingsFive = [
    {
        Header: 'Table collapse - 56px',
        Footer: 'Footer Text',
        columns: [
            {
                accessor: 'national_society',
                Header: 'National Society'
            },
            {
                accessor: 'start_end_dates',
                Header:'Start-End Dates'
            },
            {
                accessor: 'appeal_code',
                Header: 'Appeal Code'
            },
            {
                accessor: 'project_sector',
                Header: 'Project Sector'
            },
            {
                accessor: 'total_budget',
                Header: 'Total Budget'
            },
            {
                accessor: 'programme_type',
                Header: 'Programme Type'
            },
            {
                accessor: 'disaster_type',
                Header: 'Disaster Type'
            },
            {
                accessor: 'people_target',
                Header: 'People Target'
            },
            {
                accessor: 'people_reached',
                Header: 'People Reached'
            }
        ],
    },
];

const rowsFive = [
    {
        national_society: 'British RC',
        start_end_dates: '2020-06-01 - 2020-08-30',
        appeal_code: 'Covid-19 Response',
        project_sector: 'Health',
        total_budget: '30,000 CHF',
        programme_type: 'Bilateral',
        disaster_type: 'Epidemic,',
        people_target: '1,000,000',
        people_reached: '1,000,000',
    },
    {
        national_society: 'British RC',
        start_end_dates: '2020-06-01 - 2020-08-30',
        appeal_code: 'Covid-19 Response',
        project_sector: 'Health',
        total_budget: '30,000 CHF',
        programme_type: 'Bilateral',
        disaster_type: 'Epidemic,',
        people_target: '1,000,000',
        people_reached: '1,000,000',
    }
];

const TablesPage = () => {
    return (
        <React.Fragment>
            <div>
                <div className="inner">
                    <div className="fold__header">
                        <div className="fold__header__block">
                            <h2 className="fold__title margin-reset">tables</h2>
                        </div>
                    </div>
                    <div className="fold__body">
                        <div className="container-full">
                            <p>Tables are used to organise and display data efficiently. The data table component allows
                                for
                                customization with additional functionality.</p>
                        </div>
                    </div>
                </div>
                <div className="tab__wrap">
                    <Tabs>
                        <TabList>
                            <Tab>Example</Tab>
                            <Tab>Code</Tab>
                        </TabList>

                        <TabPanel>

                            <DisplayTable
                                type='data'
                                columns={headingsOne}
                                rows={rowsOne}
                            />

                            <DisplayTable
                                type='data'
                                columns={headingsTwo}
                                rows={rowsTwo}
                            />

                            <DisplayTable
                                type='data'
                                columns={headingsThree}
                                rows={rowsThree}
                            />

                        </TabPanel>
                        <TabPanel>
                            <Code source={`${htmlString}`}/>
                        </TabPanel>
                    </Tabs>
                </div>
                <div className="fold__body">
                    <h2 className="fold__title margin-reset">COMMENTS</h2>
                    <p>Table elements are organised in groups to facilitate the creation of patterns. Table can be
                        single-lined (56px) or double-lined (72px).</p>
                </div>

            </div>
            <div className="box_space">

                <div className="inner">
                    <div className="fold__header">
                        <div className="fold__header__block">
                            <h2 className="fold__title margin-reset">Tables example</h2>
                        </div>
                    </div>
                    <div className="fold__body">
                        <div className="container-full">
                            <p>Tables are used to organise and display data efficiently. The data table component allows
                                for
                                customization with additional functionality.</p>
                        </div>
                    </div>
                </div>
                <div className="tab__wrap">
                    <Tabs>
                        <TabList>
                            <Tab>Example</Tab>
                            <Tab>Code</Tab>
                        </TabList>

                        <TabPanel>

                            <DisplayTable
                                type='data'
                                columns={headingsFour}
                                rows={rowsFour}
                            />

                            <DisplayTable
                                type='data'
                                columns={headingsFive}
                                rows={rowsFive}
                            />

                        </TabPanel>
                        <TabPanel>
                            <Code source={`${htmlString}`}/>
                        </TabPanel>
                    </Tabs>
                </div>
                <div className="fold__body">
                    <h2 className="fold__title margin-reset">COMMENTS</h2>
                    <p>Pagination will always stay at the bottom of a table or inside the collapsable group. It will be
                        aligned to the right side of the screen. </p>
                </div>
            </div>
        </React.Fragment>
    );
};
export default TablesPage;
