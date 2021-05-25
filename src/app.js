import React from "react";
import {Route, Switch} from "react-router-dom";
import "./styles/main.scss";

/** Layouts **/
import PageLayoutUi from "./hoc/page-layout-ui";
import PageLayoutDesign from "./hoc/page-layout-design";
import PageLayoutContent from "./hoc/page-layout-content";
import PageLayout from "./hoc/page-layout";

/** Views **/
import GetStarted from "./views/get-started/";
import Resources from "./views/resources/";

/** Pages **/
/** UI Components **/
import ButtonsPage from "./views/ui-components/buttons";
import LinksPage from "./views/ui-components/links";
import BreadcrumbsPage from "./views/ui-components/breadcrumbs";
import FormsPage from "./views/ui-components/forms";
import ModalPage from "./views/ui-components/modal";
import CardsPage from "./views/ui-components/cards";
import TabsPage from "./views/ui-components/tab-content";
/** Brand Design **/
import DesignPage from "./views/brand-design/intro";
import ColoursPage from "./views/brand-design/colours";
/** Content **/
import MapPage from "./views/content/map";

/* 
   App 
 */
const AppRoute = ({component: Component, layout: Layout, ...rest}) => (
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
        <AppRoute exact path="/" layout={PageLayout} component={GetStarted}/>
        <AppRoute path="/get-started" layout={PageLayout} component={GetStarted}/>

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
            path="/ui-components/cards"
            layout={PageLayoutUi}
            component={CardsPage}
        />
        <AppRoute
            path="/ui-components/forms"
            layout={PageLayoutUi}
            component={FormsPage}
        />

        <AppRoute
            path="/ui-components/links"
            layout={PageLayoutUi}
            component={LinksPage}
        />
        <AppRoute
            path="/ui-components/modal"
            layout={PageLayoutUi}
            component={ModalPage}
        />
        <AppRoute
            path="/ui-components/tabs"
            layout={PageLayoutUi}
            component={TabsPage}
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
        <AppRoute
            path="/content/map"
            layout={PageLayoutContent}
            component={MapPage}
        />
        <AppRoute path="/resources" layout={PageLayout} component={Resources}/>
    </Switch>
);
export default App;
