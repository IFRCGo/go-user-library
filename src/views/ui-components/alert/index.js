import React from "react";
import Alert from "./alert";

const AlertPage = () => {
    return (
        <React.Fragment>
            <div className="inner">
                <div className="fold__header">
                    <div className="fold__header__block">
                        <h2 className="fold__title margin-reset">Alert</h2>
                    </div>
                </div>
                <div className="fold__body">
                    <div className="container-full">
                        <p>This is a alerts and this is some information -
                            success
                            warning,
                            Info,
                            danger
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-full">
                <b>Success alert</b>
                <Alert
                    id='1'
                    type='success'
                    text='Success Alert'
                    autoDismiss='0'
                />
            </div>

            <div className="container-full">
                <b>Warning alert</b>
                <Alert
                    id='2'
                    type='warning'
                    text='Warning Alert'
                    autoDismiss='0'
                />
            </div>

            <div className="container-full">
                <b>Info alert</b>
                <Alert
                    id='3'
                    type='info'
                    autoDismiss='0'
                    text='Info Alert'
                />
            </div>

            <div className="container-full">
                <b>Info alert & autoDismiss 5 seconds</b>
                <Alert
                    id='4'
                    type='info'
                    autoDismiss='5000'
                    text='Info Alert'
                />
            </div>

            <div className="container-full">
                <b>Danger alert</b>
                <Alert
                    id='5'
                    type='danger'
                    text='Danger Alert'
                    autoDismiss='0'
                />
            </div>

            <div className="container-full">
                <b>Danger alert & autoDismiss 10 seconds</b>
                <Alert
                    id='6'
                    type='danger'
                    text='Danger Alert'
                    autoDismiss='10000'
                />
            </div>

        </React.Fragment>
    );
};

export default AlertPage;
