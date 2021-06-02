import React from "react";
import ReactDOMServer from "react-dom/server";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import Code from "./../../../hoc/source-code";
import TabsContent from "../../../components/tab-content";
import ConfirmModal from "../../../components/modal";

const tabOne = {
    type: "primary",
    name: "MAIN TABS - Selected / Unselected",
    list: [
        {id: 1, title: 'EMERGENCY DETAILS', content: 'Welcome EMERGENCY DETAILS.'},
        {id: 2, title: 'EMERGENCY DETAILS', content: 'Welcome EMERGENCY DETAILS 2.'}
    ]
};

const tabTwo = {
    type: "primary",
    name: "Tab / 5 elements",
    list: [
        {id: 1, title: 'EMERGENCY DETAILS', content: 'EMERGENCY- Welcome EMERGENCY 1.'},
        {id: 2, title: 'REPORTS / DOCUMENTS', content: 'REPORTS / DOCUMENTS - Welcome EMERGENCY 2.'},
        {id: 3, title: '3W', content: '3W -Welcome EMERGENCY 3.'},
        {id: 4, title: 'SURGE', content: 'SURGE - Welcome EMERGENCY 4.'},
        {id: 5, title: 'ADDITIONAL DETAILS', content: 'ADDITIONAL DETAILS - Welcome EMERGENCY 5.'}
    ]
};

const tabThree = {
    type: "primary",
    name: "Tab / 6 elements",
    list: [
        {id: 1, title: 'EMERGENCY', content: 'EMERGENCY- Welcome EMERGENCY 1.'},
        {id: 2, title: '3W', content: '3W - Welcome EMERGENCY 2.'},
        {id: 3, title: 'REGIONAL PROFILE', content: 'REGIONAL PROFILE -Welcome EMERGENCY 3.'},
        {id: 4, title: 'TREND ANALYSIS', content: 'TREND ANALYSIS - Welcome EMERGENCY 4.'}
    ]
};

const tabFour = {
    type: "secondary",
    name: "Tab / secondary / selected",
    list: [
        {id: 1, title: 'EARLY ACTIONS', content: 'Welcome EMERGENCY DETAILS.'}
    ]
};

const tabFive = {
    type: "secondary",
    name: "Tab / secondary / unselected",
    list: [
        {id: 1, title: 'SUMMARY', content: 'CONTENT TEXT...1'},
        {id: 1, title: 'RISK AND VULNERABILITY OVERVIEW', content: 'CONTENT TEXT...2'},
        {id: 1, title: 'EARLY ACTIONS', content: 'CONTENT TEXT...3'}
    ]
};

const htmlString = ReactDOMServer.renderToStaticMarkup(
    <ConfirmModal
        type="primary / secondary"
        name="headline title"
        list="array -> id/title/content"
    />
);

const TabsPage = () => {
    return (
        <React.Fragment>
            <div className="inner">
                <div className="fold__header">
                    <div className="fold__header__block">
                        <h2 className="fold__title margin-reset">TABS</h2>
                    </div>
                </div>
                <div className="fold__body">
                    <div className="container-full">
                        <p>Tabs are used to allow an easy navigation between views within the same context</p>
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
                        <div className="tab_content">
                            <TabsContent
                                tabs={tabOne}
                            >
                            </TabsContent>
                        </div>

                        <div className="tab_content">
                            <TabsContent
                                tabs={tabTwo}
                            >
                            </TabsContent>
                        </div>

                        <div className="tab_content">
                            <TabsContent
                                tabs={tabThree}
                            >
                            </TabsContent>
                        </div>

                        <div className="tab_content">
                            <TabsContent
                                tabs={tabFour}
                            >
                            </TabsContent>
                        </div>

                        <div className="tab_content">
                            <TabsContent
                                tabs={tabFive}
                            >
                            </TabsContent>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <Code source={`${htmlString}`}/>
                    </TabPanel>
                </Tabs>
            </div>

            <div className="fold__body">
                    <h2 className="fold__title margin-reset">COMMENTS</h2>
                    <p>Primary tabs are used on the majority of the pages, while secondary - when there are more views
                        inside a specific primary tab.</p>
            </div>

        </React.Fragment>
    );
};
export default TabsPage;

