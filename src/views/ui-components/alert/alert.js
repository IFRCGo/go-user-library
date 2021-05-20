import React from "react";
import {PropTypes as T} from 'prop-types';
import ReactDOMServer from "react-dom/server";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import c from 'classnames';

import LanguageContext from '../../../languageContext';
import Translate from '../../../components/Translate';

import Code from "./../../../hoc/source-code";

const AlertString = ReactDOMServer.renderToStaticMarkup(
    <alert
        id='1'
        type='success'
        text='Success Alert'
        autoDismiss='0'
    />
);

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.timeout = null;
        this.onDismissAlert = this.onDismissAlert.bind(this);
        this.state = {
            isHidden: true,
        }
    }

    onDismissAlert() {
        this.setState((prevState) => {
            return {
                isHidden: !prevState.isHidden
            };
        });
    }

    componentDidMount() {
        if (this.props.autoDismiss > 0) {
            this.timeout = setTimeout(() => this.onDismissAlert(), this.props.autoDismiss);
        }
    }

    componentWillUnmount() {
        console.log('timeout');
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    render() {
        let cl = c('alert', `alert--${this.props.type}`, {
            'alert--popover': this.props.popover
        });
        const {strings} = this.context;

        return (
            <div>
                <div className="tab__wrap">
                    <Tabs>
                        <TabList>
                            <Tab>Example</Tab>
                            <Tab>Code</Tab>
                        </TabList>

                        <TabPanel>
                            {this.state.isHidden && (
                                <div className={cl} role='alert'>
                                    <button className='alert__button-dismiss' title={strings.alertDismissTitle}
                                            onClick={this.onDismissAlert}>
                                            <span>
                                              <Translate stringId='alertDismiss'/>
                                            </span>
                                    </button>
                                    {this.props.text}
                                </div>
                            )}
                        </TabPanel>
                        <TabPanel>
                            <Code source={`${AlertString}`}/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Alert;

Alert.contextType = LanguageContext;

Alert.propTypes = {
    type: T.string,
    autoDismiss: T.string,
    popover: T.bool,
    children: T.node,
    text: T.string,
    _hide: T.func,
};