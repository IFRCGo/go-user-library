import React from "react";

// NOT USED: import AmericanLogo from "./../../assets/graphics/content/arc_logo.png";
// NOT USED: import BritishLogo from "./../../assets/graphics/content/brc_logo.png";
// NOT USED: import JapaneseLogo from "./../../assets/graphics/content/jrc_logo.png";
// NOT USED: import CanadianLogo from "./../../assets/graphics/content/crc_logo.png";
// NOT USED: import DutchLogo from "./../../assets/graphics/content/nlrc_logo.jpg";
// NOT USED: import SpanishLogo from "./../../assets/graphics/content/esp_logo.jpg";
// NOT USED: import AustralianLogo from "./../../assets/graphics/content/aurc_logo.jpg";
// NOT USED: import EricssonLogo from "./../../assets/graphics/content/ericsson_logo.png";
import MapboxDiagram from "./../../assets/graphics/content/Mapbox-data-flow.png"
import DisplayTable from "../../components/tables";
import ReactDOMServer from "react-dom/server";
import LinkButton from "../../components/link-button";
import Link from "../../components/link";

const headingsOne = [
  {
    Header: "Mapbox",
    columns: [
      {
        Header: "Mapbox name",
        accessor: "mapbox",
      },
      {
        Header: "Tileset ID",
        accessor: "tilese_ID",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Data",
        accessor: "data",
      },
      {
        Header: "Details",
        accessor: "details",
      },
    ],
  },
];

const link = '<a title="Districts data dictionary" href="https://docs.google.com/spreadsheets/d/1Ixb39GhNOGlWdE2ersLe1xb35x1-Q4KNlmtd_1ArIYs/edit#gid=1578736194" target="_blank" rel="noreferrer">View data dictionary</a>';

const sampleLink =
    <Link
        href="#link"
        class="link--with-icon"
        name="link"
    />;

const link1 =
    <Link
        href="https://docs.google.com/spreadsheets/d/1Ixb39GhNOGlWdE2ersLe1xb35x1-Q4KNlmtd_1ArIYs/edit#gid=1444469565"
        class="link--with-icon"
        name="Countries data dictionary"
        target="_blank"
    />;

const link2 =
    <Link
        href="https://docs.google.com/spreadsheets/d/1Ixb39GhNOGlWdE2ersLe1xb35x1-Q4KNlmtd_1ArIYs/edit#gid=1578736194"
        class="link--with-icon"
        name="Districts data dictionary"
        target="_blank"
    />;

const link3 =
    <Link
        href="https://goadmin.ifrc.org/api/v2/district/?format=csv&limit=5000"
        class="link--with-icon"
        name="Download CSV"
        target="_blank"
    />;


const rowsOne = [
  {
    mapbox: "GO Countries",
    tilese_ID: "go-ifrc.go-countries",
    type: 'Polygon',
    data: <Link
        href="https://goadmin.ifrc.org/api/v2/country/?format=csv&limit=500"
        class="link--with-icon"
        name="Download CSV"
        target="_blank"
    />,
    details: <Link
        href="https://docs.google.com/spreadsheets/d/1Ixb39GhNOGlWdE2ersLe1xb35x1-Q4KNlmtd_1ArIYs/edit#gid=1444469565"
        class="link--with-icon"
        name="View data dictionary"
        target="_blank"
    />
  },
  {
    mapbox: "GO Country Centroids",
    tilese_ID: "go-ifrc.go-country-centroids\t",
    type: 'Polygon',
    data: 'Point',
    details: ''
  },
  {
    mapbox: "GO Districts 1",
    tilese_ID: "go-ifrc.go-country-centroids",
    type: 'Polygon',
    data: <Link
        href="https://goadmin.ifrc.org/api/v2/district/?format=csv&limit=5000"
        class="link--with-icon"
        name="Download CSV"
        target="_blank"
    />,
    details: <Link
        href="https://docs.google.com/spreadsheets/d/1Ixb39GhNOGlWdE2ersLe1xb35x1-Q4KNlmtd_1ArIYs/edit#gid=1578736194"
        class="link--with-icon"
        name="View data dictionary"
        target="_blank"
    />
  },
  {
    mapbox: "GO District Centroids",
    tilese_ID: "go-ifrc.go-country-centroids",
    type: 'Polygon',
    data: 'Point',
    details: ''
  }
];

const Maps = () => {
  return (
    <div className="page--homepage">
      <section className="inpage">
        <header className="inpage__header">
          <div className="">
            <div className="inpage__headline">
              <h1 className="inpage__title inpage__title--home container-lg">
                Maps
              </h1>
            </div>
          </div>
        </header>

        <div className="inpage__body">
          <br/>
          <div className="container-mid">
            <div>
              <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Mapbox</h2>
              </div>
            </div><br/>
            <p>
              We use Mapbox to host base maps that are used on GO and available for any mapping application across the Movement. The purpose is to provide consistent styling that also meets the IFRC standards for country names and boundaries.
            </p>
            <p>
              The IFRC Mapbox basemap can be used in other applications to add additional data on top, for example in web maps, PowerBI and Tableau. The basic information you will need for any application is the style URL and token:
            </p>
            <p>
              <b>Style URL</b><br/>
              <code>mapbox://styles/go-ifrc/ckrfe16ru4c8718phmckdfjh0</code><br/>
            </p>
            <p>
              <b>Access token</b><br/>
              <code>pk.eyJ1IjoiZ28taWZyYyIsImEiOiJja3E2bGdvb3QwaXM5MnZtbXN2eGtmaWgwIn0.llipq3Spc_PPA2bLjPwIPQ</code><br/>
            </p>
          </div>

          <div className="container-mid">
            <div className="fold">
                <div className="fold__header__block">
                  <h2 className="fold__title margin-reset">IFRC Basemap Style</h2>
                </div>
              <br/>
              <p>
                There is currently one managed style that is kept up-to-date with the data on GO for country (admin 0) and district (admin 1). By styling across zoom levels, the aim is that one style meets all use cases. Explore the style below or you can <a title="Mapbox preview" href="https://api.mapbox.com/styles/v1/go-ifrc/ckrfe16ru4c8718phmckdfjh0.html?fresh=true&title=view&access_token=pk.eyJ1IjoiZ28taWZyYyIsImEiOiJjamlybHUzNmMwZDUxM3Fwa215YjJ1dzk5In0.OhqEybDX303sHjHzq3nFYQ#1.86/14.69/14.13">use this preview link</a> to view in full screen.
              </p>
              <p>
                Note: country labels do not appear until zoom level 1 (z1) to simplify the map when viewed at global scale.
              </p><br/>
              <iframe
                src="https://api.mapbox.com/styles/v1/go-ifrc/ckrfe16ru4c8718phmckdfjh0.html?fresh=true&title=view&access_token=pk.eyJ1IjoiZ28taWZyYyIsImEiOiJjamlybHUzNmMwZDUxM3Fwa215YjJ1dzk5In0.OhqEybDX303sHjHzq3nFYQ#1.86/14.69/14.13"
                width='100%'
                height='500em'
                title='mapbox1'
              />
              <br/>
            </div>
          </div>

          <div className="container-mid">
            <div>
              <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Style updates</h2>
              </div>
              <br/>
              <p>
                The style will frequently be updated and any application using the styles will automatically reflect any changes. The main reason for changes are:
              </p>
              <div className="container-mid">
                <ul className="container-mid">
                  <li>Updates to the data on GO - e.g. country name or admin 1 boundaries</li>
                  <li>Bugs or style improvements - e.g. making borders clearer</li>
                  <li>Adding new features - e.g. waterways, cities, roads</li>
                </ul>
              </div>
              <p>
                Updates to the style will be drafted and the preview link shared on SIMS Slack and emailed to the Mapbox user group. Users will then have an opportunity to feedback on the style changes before they are pushed live. <b><a title="Mapbox signup" href="https://forms.office.com/Pages/ResponsePage.aspx?id=5Tu1ok5zbE6rDdGE9g_ZF8UfRpPFjdpDuqMSJeXmwA9UMElJTElON1VDTkg4REZHVVUzN1g5M0JOOSQlQCN0PWcu">Complete this form to join the Mapbox user group.</a></b>
              </p>
              <p>If you have any feedback or suggestions to improve the style, please email <b><a title="Email im@ifrc.org" href="mailto:im@ifrc.org">im@ifrc.org</a></b>.</p>
            </div>
          </div>

          <div className="container-mid">
            <div className="fold">
              <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Templates and instructions</h2>
              </div>
              <br/>
              <div className="about__resources">
                <div className="about__resources__row row flex-mid">
                  <div className="col col-6-mid">
                    <div className="box__global box__global--resources">
                      <div className="box__global__heading">
                        <div className="base-font-semi-bold">
                          Power BI - COMING SOON
                        </div>
                      </div>
                      <div className="box__global__content">
                        <p>
                          Here you can find a template and instructions for using the Mapbox plugin in PowerBI. The template includes a basic point map and choropleth map so that you can see how it is setup and apply this to your own projects.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col col-6-mid">
                    <div className="box__global box__global--resources">
                      <div className="box__global__heading">
                        <div className="base-font-semi-bold">
                          Tableau - CAN YOU HELP CREATE THIS?
                        </div>
                      </div>
                      <div className="box__global__content">
                        <p>
                          We're looking to provide a template and instructions to use Mapbox in Tableau. Can you help us create this documentation? If so, please email im@ifrc.org.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-mid">
            <div>
                <div className="fold__header__block">
                  <h2 className="fold__title margin-reset">Tileset data</h2>
                </div>
              <br/>
              <p>
                Tilesets are the name used for datasets in Mapbox that are used to build the style. These include the data exported from GO, added from ICRC and from other sources such as OpenStreetMap.
              </p>
              <p>
                You will need more detail about the Tilesets to be able to link to the data in Mapbox. For example, you might want to join your data to the Mapbox countries in order to <a title="Mapbox PowerBI choropleth" href="https://docs.mapbox.com/help/tutorials/power-bi-choropleth-map/">to create a choropleth map in PowerBI.</a> 
              </p>
              <p>
                Countries and districts are imported directly from GO. You can access the latest data from the API with the following link and view the data dictionary of the fields:
              </p>

              <div className="fold">
                <DisplayTable
                    type="data"
                    columns={headingsOne}
                    rows={rowsOne}
                />
              </div>

            </div>
          </div>

          <div className="container-mid">
            <div className="fold">
              <div className="fold__header__block">
                <h2 className="fold__title margin-reset">Setup</h2>
              </div>
              <br/>
              <p>
                The diagram below shows the data flow and processes from source files, to GO and then to Mapbox. 
              </p>
              <p><img alt="Diagram" src={MapboxDiagram} style={{width:'100%', maxWidth:'100%', height:'auto'}} /></p>
            </div>
          </div>

        </div>
        </section>
    </div>
  );
};
export default Maps;