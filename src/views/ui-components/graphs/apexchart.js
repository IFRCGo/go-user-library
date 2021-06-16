import React from "react";
import {PropTypes as T} from 'prop-types';
import Chart from 'react-apexcharts'

import LanguageContext from '../../../languageContext';

class ApexChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data;
    }

    render() {
        return (
            <div id="chart">
                <h2 className="fold__title"><span className="">{this.state.title}</span></h2>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type={this.state.options.chart.type}
                    width={this.state.options.width}
                    height={this.state.options.height} />
            </div>
        );
    }
}

export default ApexChart;

ApexChart.contextType = LanguageContext;

ApexChart.propTypes = {
    option: T.string,
    type: T.string,
    autoDismiss: T.string,
    popover: T.bool,
    children: T.node,
    text: T.string,
    _hide: T.func,
};