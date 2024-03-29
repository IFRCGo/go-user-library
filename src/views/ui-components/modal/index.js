import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactDOMServer from "react-dom/server";

import Button from "./../../../components/button";
import ConfirmModal from "./../../../components/modal";
import Code from "./../../../hoc/source-code";

const htmlString = ReactDOMServer.renderToStaticMarkup(
  <ConfirmModal
    title="this is a modal"
    message="This is the content"
    okText="OK"
  />
);

const ModalPage = () => {
  const [modalReveal, setModalReveal] = useState(false);
  const handleDeleteConfirmed = () => {
    setModalReveal(false);
  };

  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <h1>Modal</h1>
          <p>Modals focus the user's attention exclusively on one piece of information or action through a window that opens up on top of the page content, with a faded out background.</p>
        </div>
        <br/><br/>
        <div className="fold__header">
          <div className="container-mid">
            <div className="fold__header__block">
              <h2 className="fold__title margin-reset">Modal box</h2>
            </div>
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
            <br/><br/>
              <Button
                size="small"
                type="primary-filled"
                text="Open Modal"
                onClick={() => {
                  setModalReveal(true);
                }}
              >
                Open modal
              </Button>
              {modalReveal ? (
                <ConfirmModal
                  title="this is a modal"
                  message="This is the content"
                  okText="OK"
                  onClose={handleDeleteConfirmed}
                />
              ) : null}
            </TabPanel>
            <TabPanel>
              <Code source={`${htmlString}`} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
      
    </React.Fragment>
  );
};
export default ModalPage;
