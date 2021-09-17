import React from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import {PropTypes as T} from 'prop-types';

const TabsContent = (props) => {

    return (
        <div className={props.tabs.align}>
            <h3>{props.tabs.name}</h3>
            <Tabs className={props.tabs.type}>
                <TabList>
                    {props.tabs.list.map((tab) =>
                        <Tab>
                            {tab.title}
                        </Tab>
                    )}
                </TabList>
                {props.tabs.list.map((tab) =>
                    <TabPanel>
                        <div className="tabs-page">
                            {tab.content}
                        </div>
                    </TabPanel>
                )}
            </Tabs>
        </div>
    );
};

export default TabsContent;

TabsContent.propTypes =
    {
        tabs: {
            type: T.string,
            name: T.string,
            list: {
                id: T.number,
                title: T.string,
                content: T.content
            }
        },
    };
