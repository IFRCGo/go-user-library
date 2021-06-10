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
                        <p>Form elements allow users to provide data or configure options. The text field here are used
                            in forms and reports, as well as in section filters.</p>
                    </div>
                </div>
            </div>
            <Form/>

        </React.Fragment>
    );
};
export default FormsPage;
