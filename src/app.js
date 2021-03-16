import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/main.scss";

/** Layouts **/
import PageLayoutUi from "./hoc/page-layout-ui";
import PageLayoutDesign from "./hoc/page-layout-design";
import PageLayoutContent from "./hoc/page-layout-content";
import PageLayout from "./hoc/page-layout";

/** Views **/
import Home from "./views/";
import GetStarted from "./views/get-started/";
import Resources from "./views/resources/";

/** Pages **/
import ButtonsPage from "./views/ui-components/buttons";
import LinksPage from "./views/ui-components/links";
import BreadcrumbsPage from "./views/ui-components/breadcrumbs";
import DesignPage from "./views/brand-design/intro";
import MapPage from "./views/content/map";

/* 
   App 
 */
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const App = () => (
  <Switch>
    <AppRoute exact path="/" layout={PageLayout} component={Home} />
    <AppRoute path="/get-started" layout={PageLayout} component={GetStarted} />

    <AppRoute
      path="/ui-components/breadcrumbs"
      layout={PageLayoutUi}
      component={BreadcrumbsPage}
    />
    <AppRoute
      path="/ui-components/buttons"
      layout={PageLayoutUi}
      component={ButtonsPage}
    />

    <AppRoute
      path="/ui-components/links"
      layout={PageLayoutUi}
      component={LinksPage}
    />
    <AppRoute
      path="/brand-design/intro"
      layout={PageLayoutDesign}
      component={DesignPage}
    />
    <AppRoute
      path="/content/map"
      layout={PageLayoutContent}
      component={MapPage}
    />
    <AppRoute path="/resources" layout={PageLayout} component={Resources} />
  </Switch>
);
export default App;
