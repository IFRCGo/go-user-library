import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BreadCrumb from "./../../../components/breadcrumb";

const BreadcrumbsPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <div className="fold__header__block">
            <h2 className="fold__title margin-reset">Breadcrumbs</h2>
          </div>
        </div>
        <div className="fold__body">
          <div className="container-full">
            <p>This is a Breadcrumbs and this is some information</p>
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
            <BreadCrumb
              crumbs={[
                { link: "/ui-components/buttons", name: "Buttons" },
                { link: "/get-started", name: "Home" },
              ]}
            />
          </TabPanel>
          <TabPanel>
            <p>Any content 2</p>
          </TabPanel>
        </Tabs>
      </div>
    </React.Fragment>
  );
};
export default BreadcrumbsPage;
