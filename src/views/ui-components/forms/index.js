import React from "react";
import Form from "./form";

const FormsPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <div className="fold__header__block">
            <h2 className="fold__title margin-reset">Forms</h2>
          </div>
        </div>
        <div className="fold__body">
          <div className="container-full">
            <p>This is a forms and this is some information</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Form />
    </React.Fragment>
  );
};
export default FormsPage;
