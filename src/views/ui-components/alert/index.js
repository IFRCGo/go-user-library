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

                <b>Warning alert</b>
                <Alert
                    id='5'
                    option='secondary'
                    type='warning'
                    text='Warning Alert'
                    autoDismiss='0'
                />

                <b>Info alert</b>
                <Alert
                    id='6'
                    option='secondary'
                    type='info'
                    autoDismiss='0'
                    text='Info Alert'
                />

                <b>Info alert & autoDismiss 5 seconds</b>
                <Alert
                    id='7'
                    option='secondary'
                    type='info'
                    autoDismiss='5000'
                    text='Info Alert'
                />

                <b>Danger alert</b>
                <Alert
                    id='8'
                    option='secondary'
                    type='error'
                    text='Danger Alert'
                    autoDismiss='0'
                />

                <b>Danger alert & autoDismiss 10 seconds</b>
                <Alert
                    id='9'
                    option='secondary'
                    type='error'
                    text='Danger Alert'
                    autoDismiss='10000'
                />
            </div>

            <hr/>

            <h2>Message forms</h2>

            <div className="container-full">
                <b>Error Message</b>
                <Alert
                    id='10'
                    option='message'
                    type='error'
                    text='Either your username or password is incorrect. Please try once again'
                    autoDismiss='0'
                />
            </div>
            <div className="fold__body">
                <h2 className="fold__title margin-reset">COMMENTS</h2>
                <p>Alert boxes can be used in the primary. secondary or message form, depending on alert level.</p>
                <ul>
                    <li><strong>Informational:</strong> Provide additional information to users</li>
                    <li><strong>Success:</strong> Confirm a task was completed as expected.</li>
                    <li><strong>Warning:</strong> Inform users that they are taking actions that are not desirable.</li>
                    <li><strong>Error:</strong> Inform users of an error or critical failure.</li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default AlertPage;
