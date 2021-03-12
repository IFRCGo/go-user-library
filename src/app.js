import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/main.scss";

/** Layouts **/
import PageLayoutUi from "./hoc/page-layout-ui";
import PageLayoutDesign from "./hoc/page-layout-design";
import PageLayout from "./hoc/page-layout";

/** Views **/
import Content from "./views/content/";
import Home from "./views/get-started/";
import Resources from "./views/resources/";

/** Pages **/
import ButtonsPage from "./views/ui-components/buttons";
import BreadcrumbsPage from "./views/ui-components/breadcrumbs";
import DesignPage from "./views/brand-design/intro";
import ColoursPage from "./views/brand-design/colours";

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
    <AppRoute path="/get-started" layout={PageLayout} component={Home} />
    <AppRoute
      path="/ui-components/buttons/"
      layout={PageLayoutUi}
      component={ButtonsPage}
    />

    <AppRoute
      path="/ui-components/breadcrumbs/"
      layout={PageLayoutUi}
      component={BreadcrumbsPage}
    />
    <AppRoute
      path="/brand-design/intro"
      layout={PageLayoutDesign}
      component={DesignPage}
    />
    <AppRoute
      path="/brand-design/colours/"
      layout={PageLayoutDesign}
      component={ColoursPage}
    />
    <AppRoute path="/content" layout={PageLayout} component={Content} />
    <AppRoute path="/resources" layout={PageLayout} component={Resources} />
  </Switch>
);
export default App;
