import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import ReactDOMServer from "react-dom/server";
import Code from "./../../../hoc/source-code";
import DisplayTable, {SortHeader} from "../../../components/tables";

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

const table = {
    table: {
        page: 1,
        sort: {
            field: '',
            direction: 'asc'
        },
        filters: {
            startDateInterval: 'all',
            type: 'all'
        }
    }
};


const headings = [
    {
        id: 'id',
        label: 'Label'
    },
    {
        id: 'name',
        label:
            <SortHeader
                id='name'
                title='Label'
                sort={table.sort}
                onClick='id'
            />
    }
];

const rows = [
    {
        id: '1',
        name: '2'
    },
    {
        id: '3',
        name: '4'
    }
];

const headings2 = [
    {
        id: 'date',
        label: 'Start Date'
    },
    {
        id: 'appeal_type',
        label:
            <SortHeader
                id='name'
                title='Appeal Type'
                sort={table.sort}
                onClick='id'
            />
    },
    {
        id: 'appeal_code',
        label: 'Appeal Code'
    },
    {
        id: 'operations',
        label: 'Active Operations'
    },
    {
        id: 'disaster',
        label: 'Disaster Type'
    },
    {
        id: 'requirements',
        label: 'Funding Requirements'
    },
    {
        id: 'coverage',
        label: 'Funding Coverage'
    },
];

const rows2 = [
    {
        date: '2018-09-18',
        appeal_type: 'DREF',
        appeal_code: 'MDRUA010',
        operations: 'Venezuela: Conflict',
        disaster: 'Epidemic',
        requirements: '208,367 CHF',
        coverage: '80%'
    },
    {
        date: '2018-09-18',
        appeal_type: 'DREF',
        appeal_code: 'MDRUA010',
        operations: 'Venezuela: Conflict',
        disaster: 'Epidemic',
        requirements: '208,367 CHF',
        coverage: '80%'
    }
];


const headings3 = [
    {
        id: 'national_society',
        label: 'National Society'
    },
    {
        id: 'start_end_dates',
        label:
            <SortHeader
                id='start_end_dates'
                title='Start-End Dates'
                sort={table.sort}
                onClick='id'
            />
    },
    {
        id: 'appeal_code',
        label: 'Appeal Code'
    },
    {
        id: 'project_sector',
        label: 'Project Sector'
    },
    {
        id: 'total_budget',
        label: 'Total Budget'
    },
    {
        id: 'programme_type',
        label: 'Programme Type'
    },
    {
        id: 'disaster_type',
        label: 'Disaster Type'
    },
    {
        id: 'people_target',
        label: 'People Target'
    },
    {
        id: 'people_reached',
        label: 'People Reached'
    }
];

const rows3 = [
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
            <div className="inner">
                <div className="fold__header">
                    <div className="fold__header__block">
                        <h2 className="fold__title margin-reset">tables</h2>
                    </div>
                </div>
                <div className="fold__body">
                    <div className="container-full">
                        <p>Tables are used to organise and display data efficiently. The data table component allows for
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
                        <b>Table / Label & Body 56px</b>

                        <DisplayTable
                            headings={headings}
                            rows={rows}
                        />

                        <b>Table - 56px</b>
                        <DisplayTable
                            headings={headings2}
                            rows={rows2}
                        />

                        <b>Table collapse - 56px</b>
                        <DisplayTable
                            headings={headings3}
                            rows={rows3}
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
        </React.Fragment>
    );
};
export default TablesPage;
