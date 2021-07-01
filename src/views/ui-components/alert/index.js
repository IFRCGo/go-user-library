import React from "react";
import Alert from "./alert";

const AlertPage = () => {
  return (
    <React.Fragment>
      <div className="inner">
        <div className="fold__header">
          <h1>ALERTS</h1>
          <p>Alerts are an important method of communicating with users and providing feedback. They are used in form of banners, alert boxes and alert messages.</p>
        </div>
        <br/><br/>

        <div className="fold__header">
          <div className="container-mid">
            <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Top banner</h2>
            </div>
          </div>
        </div>

        <div className="fold__body">
          <div className="container-mid">
            <p>TODO</p>
          </div>
        </div>


        <div className="fold__header">
          <div className="container-mid">
            <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Alert box</h2>
            </div>
          </div>
        </div>
        <div className="fold__body">
          <div className="container-mid">
            <p>Alerts are an important method of communicating with users and providing feedback. They are used in form of banners, alert boxes and alert messages.</p>
          
            <br/>
            <h2>Primary (Option 1)</h2>
            <br/>
            <b>Warning alert</b>
          </div>
          <div className="container-full">
            <Alert
                id='1'
                option='primary'
                type='warning'
                text='Warning Alert'
                autoDismiss='0'
            />
          </div>
          <div className="container-mid">
            <b>Success alert</b>
          </div>
          <div className="container-full">
            <Alert
                id='2'
                option='primary'
                type='success'
                text='Success Alert'
                autoDismiss='0'
            />
          </div>
          <div className="container-mid">
              <b>Info alert</b>
          </div>
          <div className="container-full">
            <Alert
                id='3'
                option='primary'
                type='info'
                text='Info Alert'
            />
          
            <hr/>
          </div>

          <div className="fold">
            <div className="container-mid">
              <h2>Secondary (Option 2)</h2>
              <br/>
              <b>Success alert</b>
            </div>
            <div className="container-full">
              
              <Alert
                  id='4'
                  option='secondary'
                  type='success'
                  text='Success Alert'
                  autoDismiss='0'
              />
            </div>
            <div className="container-mid">
              <b>Warning alert</b>
            </div>
            <div className="container-full">
              <Alert
                  id='5'
                  option='secondary'
                  type='warning'
                  text='Warning Alert'
                  autoDismiss='0'
              />
            </div>
            <div className="container-mid">
              <b>Info alert</b>
            </div>
            <div className="container-full">
              <Alert
                  id='6'
                  option='secondary'
                  type='info'
                  autoDismiss='0'
                  text='Info Alert'
              />
            </div>
            <div className="container-mid">
              <b>Info alert & autoDismiss 5 seconds</b>
            </div>
            <div className="container-full">
              <Alert
                  id='7'
                  option='secondary'
                  type='info'
                  autoDismiss='5000'
                  text='Info Alert'
              />
            </div>
            <div className="container-mid">
              <b>Danger alert</b>
            </div>
            <div className="container-full">
              <Alert
                  id='8'
                  option='secondary'
                  type='error'
                  text='Danger Alert'
                  autoDismiss='0'
              />
            </div>
            <div className="container-mid">
              <b>Danger alert & autoDismiss 10 seconds</b>
            </div>
            <div className="container-full">
              <Alert
                  id='9'
                  option='secondary'
                  type='error'
                  text='Danger Alert'
                  autoDismiss='10000'
              />
            <hr/>
            </div>
          </div>
          <div className="container-mid">

            <h2>Message forms</h2>
            <br/>
            <b>Error Message</b>
            <Alert
                id='10'
                option='message'
                type='error'
                text='Either your username or password is incorrect. Please try once again'
                autoDismiss='0'
            />
          
            <h2 className="fold__title margin-reset">COMMENTS</h2>
            <br/>
            <p>Alert boxes can be used in the primary. secondary or message form, depending on alert level.</p>
            <div className="container-mid">
              <ul className="container-mid">
                  <li><strong>Informational:</strong> Provide additional information to users</li>
                  <li><strong>Success:</strong> Confirm a task was completed as expected.</li>
                  <li><strong>Warning:</strong> Inform users that they are taking actions that are not desirable.</li>
                  <li><strong>Error:</strong> Inform users of an error or critical failure.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AlertPage;
