import React from "react";
import Form from "./form";

const FormsPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <h1>FORMS</h1>
          <p>Form elements allow users to provide data or configure options. The text field here are used in forms and reports, as well as in section filters.</p>
        </div>
        <br/><br/>

        <div className="fold__body">
          <div className="container-full">
            <Form/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default FormsPage;
