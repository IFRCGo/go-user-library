import React from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Code from "../../../hoc/source-code";
import ReactDOMServer from "react-dom/server";
import Map from "../../../components/map";

const MapListing = [
    {
        iframe: 'https://app.powerbi.com/view?r=eyJrIjoiMTExYTlmZDMtMTNkZi00MmY5LTkyYTYtNTczZGU0MmQxYjE3IiwidCI6ImEyYjUzYmU1LTczNGUtNGU2Yy1hYjBkLWQxODRmNjBmZDkxNyIsImMiOjh9',
        title: 'testing',
        frameBorder: '0',
        width: '100%',
        height: '2240px'
    },
    {
        iframe: 'https://app.powerbi.com/view?r=eyJrIjoiMDQ5YzBlODItOTQ3Yy00Y2Q2LWFjZmEtZWIxMTAwZjkxZGU2IiwidCI6ImEyYjUzYmU1LTczNGUtNGU2Yy1hYjBkLWQxODRmNjBmZDkxNyIsImMiOjh9',
        title: 'testing1',
        frameBorder: '0',
        width: '100%',
        height: '2240px'
    },
    {
        iframe: 'https://app.powerbi.com/view?r=eyJrIjoiYmQxZjFhMzItYzRlNy00ZTQzLWE5ZTEtZDZhNDliNjY4OWEwIiwidCI6ImEyYjUzYmU1LTczNGUtNGU2Yy1hYjBkLWQxODRmNjBmZDkxNyIsImMiOjh9',
        title: 'testing2',
        frameBorder: '0',
        width: '100%',
        height: '2240px'
    },
    {
        iframe: 'https://app.powerbi.com/view?r=eyJrIjoiMTM4Y2ZhZGEtNGZmMS00ODZhLWFjZjQtMTE2ZTIyYTI0ODc4IiwidCI6ImEyYjUzYmU1LTczNGUtNGU2Yy1hYjBkLWQxODRmNjBmZDkxNyIsImMiOjh9&pageName=ReportSectionfa0be9512521e929ae4a',
        title: 'testing3',
        frameBorder: '0',
        width: '100%',
        height: '2240px'
    }
];

const htmlString = ReactDOMServer.renderToStaticMarkup(
    <Map
        list = {MapListing}
    />
);

const MapPage = () => {
    return (
        <div className="inner">
            <div className="fold__body">
                <div className="container-full">
                    <h1>MAPS</h1>
                    <p>
                        Depending on the scale, the size of the map and the information you would like to show, each map
                        is unique. It is therefore impossible to provide one map style that fits all. Adapt the style of
                        your map based on scale, content, shape and readability.

                        In all cases, an important first step is to create a base map that is suitable for layering
                        future information. These base maps should emphasize clarity and versatility. They should also
                        print well in colour and black and white, as they may well be printed in varying conditions.
                        They should also look good when projected or on screen.
                    </p>

                </div>

                <div className="box_space">

                    <div className="fold__header">
                        <div className="fold__header__block">
                            <h2 className="fold__title margin-reset">WORLD MAP</h2>
                        </div>
                    </div>

                    <Tabs>
                        <TabList>
                            <Tab>Example</Tab>
                            <Tab>Code</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="box_space">
                                <Map
                                    list={MapListing}
                                />
                            </div>

                        </TabPanel>
                        <TabPanel>
                            <Code source={`${htmlString}`}/>
                        </TabPanel>
                    </Tabs>
                    <div className="box_space">
                        <h2 className="fold__title margin-reset">Mapbox guidelines</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet leo vel nunc iaculis
                            fermentum eget quis tortor. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MapPage;
