import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactDOMServer from "react-dom/server";
import Code from "./../../../hoc/source-code";
import DisplayTable from "../../../components/tables";

const htmlString = ReactDOMServer.renderToStaticMarkup(
  <div>
    <table className="tc-table table table--border-bottom">
      <thead>
        <tr role="row">
          <th colSpan={2} role="columnheader">Table / Label &amp; Body 56px<span /></th>
        </tr>
        <tr role="row">
          <th colSpan={1} role="columnheader" style={{cursor: 'pointer'}} title="Toggle SortBy">Label<span /></th>
          <th colSpan={1} role="columnheader" style={{cursor: 'pointer'}} title="Toggle SortBy">Label<span /></th>
        </tr>
      </thead>
      <tbody>
        <tr role="row">
          <td role="cell">1</td>
          <td role="cell">1</td>
        </tr>
        <tr role="row">
          <td role="cell">2</td>
          <td role="cell">2</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const tableTwo = ReactDOMServer.renderToStaticMarkup(
  <div>
    <table className="tc-table table table--border-bottom">
      <thead>
        <tr role="row">
          <th colSpan={7} role="columnheader">Table - 56px<span /></th>
        </tr>
        <tr role="row">
          <th colSpan={1} role="columnheader" style={{cursor: 'pointer'}} title="Toggle SortBy">Start Date<span /></th>
          <th colSpan={1} role="columnheader" style={{cursor: 'pointer'}} title="Toggle SortBy">Appeal Type<span /></th>
          <th colSpan={1} role="columnheader" style={{cursor: 'pointer'}} title="Toggle SortBy">Appeal Code<span /></th>
          <th colSpan={1} role="columnheader" style={{cursor: 'pointer'}} title="Toggle SortBy">Active Operations<span /></th>
          <th colSpan={1} role="columnheader" style={{cursor: 'pointer'}} title="Toggle SortBy">Disaster Type<span /></th>
          <th colSpan={1} role="columnheader" style={{cursor: 'pointer'}} title="Toggle SortBy">Funding Requirements<span /></th>
          <th colSpan={1} role="columnheader" style={{cursor: 'pointer'}} title="Toggle SortBy">Funding Coverage<span /></th>
        </tr>
      </thead>
      <tbody>
        <tr role="row">
          <td role="cell">2018-09-18</td>
          <td role="cell">DREF</td>
          <td role="cell">MDRUA010</td>
          <td role="cell">Venezuela: Conflict</td>
          <td role="cell">Epidemic</td>
          <td role="cell">208,367 CHF</td>
          <td role="cell">80%</td>
        </tr>
        <tr role="row">
          <td role="cell">2018-10-18</td>
          <td role="cell">DREF</td>
          <td role="cell">MDRUA010</td>
          <td role="cell">Venezuela: Conflict</td>
          <td role="cell">Epidemic</td>
          <td role="cell">208,367 CHF</td>
          <td role="cell">80%</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={1}>&nbsp;</td>
          <td colSpan={1}>&nbsp;</td>
          <td colSpan={1}>&nbsp;</td>
          <td colSpan={1}>&nbsp;</td>
          <td colSpan={1}>&nbsp;</td>
          <td colSpan={1}>&nbsp;</td>
          <td colSpan={1}>&nbsp;</td>
        </tr>
        <tr>
          <td colSpan={7}>Footer text</td>
        </tr>
      </tfoot>
    </table>
  </div>
);

const headingsOne = [
  {
    Header: "Table / Label & Body 56px",
    columns: [
      {
        Header: "Label",
        accessor: "label",
      },
      {
        Header: "Label",
        accessor: "label2",
      },
    ],
  },
];

const rowsOne = [
  {
    label: "1",
    label2: "1",
  },
  {
    label: "2",
    label2: "2",
  },
];

const headingsTwo = [
  {
    Header: "Table / Body 56px",
    columns: [
      {
        Header: "Entry",
        accessor: "entry",
      },
      {
        Header: "Entry Link",
        accessor: "entryLink",
      },
      {
        Header: "Entry",
        accessor: "percent",
      },
    ],
  },
];

const rowsTwo = [
  {
    na: "1",
  },
];

const headingsThree = [
  {
    Header: "Table / Body 72px",
    columns: [
      {
        Header: "Entry",
        accessor: "entry",
      },
      {
        Header: "Entry Link",
        accessor: "entryLink",
      },
      {
        Header: "Entry",
        accessor: "percent",
      },
    ],
  },
];

const rowsThree = [
  {
    na: "1",
  },
];

const headingsFour = [
  {
    Header: "Table - 56px",
    Footer: "Footer text",
    columns: [
      {
        Header: "Start Date",
        accessor: "start_date",
      },
      {
        Header: "Appeal Type",
        accessor: "appeal_type",
      },
      {
        Header: "Appeal Code",
        accessor: "appeal_code",
      },
      {
        Header: "Active Operations",
        accessor: "operations",
      },
      {
        Header: "Disaster Type",
        accessor: "disaster",
      },
      {
        Header: "Funding Requirements",
        accessor: "requirements",
      },
      {
        Header: "Funding Coverage",
        accessor: "coverage",
      },
    ],
  },
];

const rowsFour = [
  {
    start_date: "2018-09-18",
    appeal_type: "DREF",
    appeal_code: "MDRUA010",
    operations: "Venezuela: Conflict",
    disaster: "Epidemic",
    requirements: "208,367 CHF",
    coverage: "80%",
  },
  {
    start_date: "2018-10-18",
    appeal_type: "DREF",
    appeal_code: "MDRUA010",
    operations: "Venezuela: Conflict",
    disaster: "Epidemic",
    requirements: "208,367 CHF",
    coverage: "80%",
  },
];

const headingsFive = [
  {
    Header: "Table collapse - 56px",
    Footer: "Footer Text",
    columns: [
      {
        accessor: "national_society",
        Header: "National Society",
      },
      {
        accessor: "start_end_dates",
        Header: "Start-End Dates",
      },
      {
        accessor: "appeal_code",
        Header: "Appeal Code",
      },
      {
        accessor: "project_sector",
        Header: "Project Sector",
      },
      {
        accessor: "total_budget",
        Header: "Total Budget",
      },
      {
        accessor: "programme_type",
        Header: "Programme Type",
      },
      {
        accessor: "disaster_type",
        Header: "Disaster Type",
      },
      {
        accessor: "people_target",
        Header: "People Target",
      },
      {
        accessor: "people_reached",
        Header: "People Reached",
      },
    ],
  },
];

const rowsFive = [
  {
    national_society: "British RC",
    start_end_dates: "2020-06-01 - 2020-08-30",
    appeal_code: "Covid-19 Response",
    project_sector: "Health",
    total_budget: "30,000 CHF",
    programme_type: "Bilateral",
    disaster_type: "Epidemic,",
    people_target: "1,000,000",
    people_reached: "1,000,000",
  },
  {
    national_society: "British RC",
    start_end_dates: "2020-06-01 - 2020-08-30",
    appeal_code: "Covid-19 Response",
    project_sector: "Health",
    total_budget: "30,000 CHF",
    programme_type: "Bilateral",
    disaster_type: "Epidemic,",
    people_target: "1,000,000",
    people_reached: "1,000,000",
  },
];

const TablesPage = () => {
  return (
    <React.Fragment>
      <div>
        <div className="inner">
          <div className="fold__header">
            <h1>TABLES</h1>
            <p>
              Tables are used to organise and display data efficiently. The data
              table component allows for customization with additional
              functionality.
            </p>
          </div>
          <br />
          <br />

          <div className="fold__header">
            <div className="container-mid">
              <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Table elements</h2>
              </div>
            </div>
          </div>

          <div className="fold__body">
            <div className="container-mid">
              <Tabs>
                <TabList>
                  <Tab>Example</Tab>
                  <Tab>Code</Tab>
                </TabList>

                <TabPanel>
                  <div className="fold">
                    <DisplayTable
                      type="data"
                      columns={headingsOne}
                      rows={rowsOne}
                    />
                  </div>

                  <DisplayTable
                    type="data"
                    columns={headingsTwo}
                    rows={rowsTwo}
                  />
                  
                  <div className="fold">
                    <DisplayTable
                      type="data"
                      columns={headingsThree}
                      rows={rowsThree}
                    />
                  </div>

                </TabPanel>
                <TabPanel>
                  <Code source={`${htmlString}`} />
                </TabPanel>
              </Tabs>
            </div>
            
            <div className="fold">
              <div className="container-mid">
                <h2 className="fold__title margin-reset">COMMENTS</h2>
                <br/>
                <p>Table elements are organised in groups to facilitate the creation of patterns. Table can be single-lined (56px) or double-lined (72px).</p>
              </div>
            </div>

            <div className="container-full">
              <div className="fold__header">
                <div className="fold__header__block">
                  <h2 className="fold__title margin-reset">Tables example</h2>
                </div>
              </div>
            </div>

            <div className="container-mid">
              <Tabs>
                <TabList>
                  <Tab>Example</Tab>
                  <Tab>Code</Tab>
                </TabList>

                <TabPanel>
                  <div className="fold">
                    <DisplayTable
                      type="data"
                      columns={headingsFour}
                      rows={rowsFour}
                    />
                  </div>

                  <DisplayTable
                    type="data"
                    columns={headingsFive}
                    rows={rowsFive}
                  />
                </TabPanel>
                <TabPanel>
                  <Code source={`${tableTwo}`} />
                </TabPanel>
              </Tabs>
            </div>

            <div className="fold">
              <div className="container-mid">
                <h2 className="fold__title margin-reset">COMMENTS</h2>
                <br/>
                <p>Pagination will always stay at the bottom of a table or inside the collapsable group. It will be aligned to the right side of the screen.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default TablesPage;
