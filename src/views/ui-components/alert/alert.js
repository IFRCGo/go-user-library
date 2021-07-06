import React from "react";
import {PropTypes as T} from 'prop-types';
import ReactDOMServer from "react-dom/server";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import c from 'classnames';

import {IoWarningOutline} from 'react-icons/io5';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {FiAlertTriangle} from 'react-icons/fi';
import {CgCheckO} from 'react-icons/cg';

import LanguageContext from '../../../languageContext';
import Translate from '../../../components/Translate';

import Code from "./../../../hoc/source-code";

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
        // console.log('timeout');
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    sourceData(data) {
        const AlertString = ReactDOMServer.renderToStaticMarkup(
            <alert
                id={data.id}
                option={data.option}
                type={data.type}
                text={data.text}
                autoDismiss='0'
            />);
        return AlertString;
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
                                <div className={cl + ' ' + this.props.option + ' ' + this.props.type} role='alert'>
                                    <button className='alert__button-dismiss' title={strings.alertDismissTitle}
                                            onClick={this.onDismissAlert}>
                                                <span>
                                                  <Translate stringId='alertDismiss'/>
                                                </span>
                                    </button>

                                    <span className='icon'>
                                            {this.props.type === "warning" ?
                                                <IoWarningOutline size="24px" className={this.props.type}/> : null}
                                        {this.props.type === "error" ?
                                            <FiAlertTriangle size="24px" className={this.props.type}/> : null}
                                        {this.props.type === "info" ?
                                            <AiOutlineInfoCircle size="24px" className={this.props.type}/> : null}
                                        {this.props.type === "success" ?
                                            <CgCheckO size="24px" className={this.props.type}/> : null}
                                        </span>
                                    <span className='text'>{this.props.text}</span>
                                </div>
                            )}
                        </TabPanel>
                        <TabPanel>
                            <Code source={this.sourceData(this.props)}/>
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
    option: T.string,
    type: T.string,
    autoDismiss: T.string,
    popover: T.bool,
    children: T.node,
    text: T.string,
    _hide: T.func,
};