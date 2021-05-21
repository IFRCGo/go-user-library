import React from "react";
import Alert from "./alert";

const AlertPage = () => {
    return (
        <React.Fragment>
            <div className="inner">
                <div className="fold__header">
                    <div className="fold__header__block">
                        <h2 className="fold__title margin-reset">ALERT BOX</h2>
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
                        <p>https://react-icons.github.io/react-icons</p>
                    </div>
                </div>
            </div>

            <h2>Primary (Option 1)</h2>
            <div className="container-full">
                <b>Warning alert</b>
                <Alert
                    id='1'
                    option='primary'
                    type='warning'
                    text='Warning Alert'
                    autoDismiss='0'
                />
                <b>Success alert</b>
                <Alert
                    id='2'
                    option='primary'
                    type='success'
                    text='Success Alert'
                    autoDismiss='0'
                />
                <b>Info alert</b>
                <Alert
                    id='3'
                    option='primary'
                    type='info'
                    text='Info Alert'
                />
            </div>
            <hr/>

            <h2>Secondary (Option 2)</h2>

            <div className="container-full">
                <b>Success alert</b>
                <Alert
                    id='4'
                    option='secondary'
                    type='success'
                    text='Success Alert'
                    autoDismiss='0'
                />
            </div>

            <div className="container-full">
                <b>Warning alert</b>
                <Alert
                    id='5'
                    option='secondary'
                    type='warning'
                    text='Warning Alert'
                    autoDismiss='0'
                />
            </div>

            <div className="container-full">
                <b>Info alert</b>
                <Alert
                    id='6'
                    option='secondary'
                    type='info'
                    autoDismiss='0'
                    text='Info Alert'
                />
            </div>

            <div className="container-full">
                <b>Info alert & autoDismiss 5 seconds</b>
                <Alert
                    id='7'
                    option='secondary'
                    type='info'
                    autoDismiss='5000'
                    text='Info Alert'
                />
            </div>

            <div className="container-full">
                <b>Danger alert</b>
                <Alert
                    id='8'
                    option='secondary'
                    type='danger'
                    text='Danger Alert'
                    autoDismiss='0'
                />
            </div>

            <div className="container-full">
                <b>Danger alert & autoDismiss 10 seconds</b>
                <Alert
                    id='9'
                    option='secondary'
                    type='danger'
                    text='Danger Alert'
                    autoDismiss='10000'
                />
            </div>

        </React.Fragment>
    );
};

export default AlertPage;
