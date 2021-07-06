import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Code from "../../../hoc/source-code";
import ReactDOMServer from "react-dom/server";
import Map from "../../../components/map";
import Link from "../../../components/link";

const MapListing = [
  {
    iframe:
      "https://app.powerbi.com/view?r=eyJrIjoiMTExYTlmZDMtMTNkZi00MmY5LTkyYTYtNTczZGU0MmQxYjE3IiwidCI6ImEyYjUzYmU1LTczNGUtNGU2Yy1hYjBkLWQxODRmNjBmZDkxNyIsImMiOjh9",
    title: "testing",
    frameBorder: "0",
    width: "100%",
    height: "2240px",
  },
  {
    iframe:
      "https://app.powerbi.com/view?r=eyJrIjoiMDQ5YzBlODItOTQ3Yy00Y2Q2LWFjZmEtZWIxMTAwZjkxZGU2IiwidCI6ImEyYjUzYmU1LTczNGUtNGU2Yy1hYjBkLWQxODRmNjBmZDkxNyIsImMiOjh9",
    title: "testing1",
    frameBorder: "0",
    width: "100%",
    height: "2240px",
  },
  {
    iframe:
      "https://app.powerbi.com/view?r=eyJrIjoiYmQxZjFhMzItYzRlNy00ZTQzLWE5ZTEtZDZhNDliNjY4OWEwIiwidCI6ImEyYjUzYmU1LTczNGUtNGU2Yy1hYjBkLWQxODRmNjBmZDkxNyIsImMiOjh9",
    title: "testing2",
    frameBorder: "0",
    width: "100%",
    height: "2240px",
  },
  {
    iframe:
      "https://app.powerbi.com/view?r=eyJrIjoiMTM4Y2ZhZGEtNGZmMS00ODZhLWFjZjQtMTE2ZTIyYTI0ODc4IiwidCI6ImEyYjUzYmU1LTczNGUtNGU2Yy1hYjBkLWQxODRmNjBmZDkxNyIsImMiOjh9&pageName=ReportSectionfa0be9512521e929ae4a",
    title: "testing3",
    frameBorder: "0",
    width: "100%",
    height: "2240px",
  },
];

const htmlString = ReactDOMServer.renderToStaticMarkup(
  <Map list={MapListing} />
);

const MapPage = () => {
  return (
    <div className="inner">
      <div className="fold__header">
        <h1>MAPS</h1>
        <p>
          Depending on the scale, the size of the map and the information you
          want to show, every map is unique. It is therefore impossible to
          provide one map style that fits all. The tools here provide a
          starting point for maps that can built on using the guidelines to
          maintain a consistent style.
        </p>
      </div>
      <br/><br/>

      <div className="fold__header">
        <div className="container-mid">
          <div className="fold__header__block">
            <h2 className="fold__title margin-reset">MAPBOX</h2>
          </div>
        </div>
        <br/>
        <p>Mapbox is used to provide a basemap that meets the IFRC agreed country names and boundaries. You can use this on any application including a website, PowerBI, Tableau or GIS software. Like other webmaps, the detail changes as you zoom in, with different features becoming visible.</p>
        <p>The control you have over what the basemap shows varies depending on the software but most do not allow any customisation. We provide two styles for different usecases.</p>
        <br/>
        <p className="poppins_16 font_weight_500">GO Main Style</p>
        <p>Used throughout GO, this style has a labels for countries and will show more detail as you zoom in.</p>
        <p><Link
          href="https://docs.mapbox.com/mapbox-gl-js/api/"
          icon="chevron-right"
          class="link--with-icon"
          name="https://docs.mapbox.com/mapbox-gl-js/api/"
        /></p>
        <br/>
        <p className="poppins_16 font_weight_500">QGIS</p>
        <p>Templates for QGIS mapping are currently being worked on and will be shared here when completed.</p>
      </div>
      <br/><br/>

      <div className="fold__header">
        <div className="container-mid">
          <div className="fold__header__block">
            <h2 className="fold__title margin-reset">WORLD MAP</h2>
          </div>
        </div>
      </div>

      <div className="fold__body">
        <div className="container-mid">
          <Tabs>
            <TabList>
              <Tab>Example</Tab>
              <Tab>Code</Tab>
            </TabList>

            <TabPanel>
              <div className="box_space">
                <Map list={MapListing} />
              </div>
            </TabPanel>
            <TabPanel>
              <Code source={`${htmlString}`} />
            </TabPanel>
          </Tabs>
          <div className="box_space">
            <h2 className="fold__title margin-reset">Mapbox guidelines</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              imperdiet leo vel nunc iaculis fermentum eget quis tortor.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MapPage;
