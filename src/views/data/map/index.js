import React from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Code from "../../../hoc/source-code";
import ReactDOMServer from "react-dom/server";
import Button from "../../../components/button";

const htmlString = ReactDOMServer.renderToStaticMarkup(
    <Button
        type="submit"
        size="small"
        name="primary filled button"
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
                                MAP
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
