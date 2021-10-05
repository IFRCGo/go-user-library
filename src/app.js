import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./styles/main.scss";

/** Layouts **/
import PageLayoutUi from "./hoc/page-layout-ui";
import PageLayoutDesign from "./hoc/page-layout-design";
import PageLayoutContent from "./hoc/page-layout-content";
import PageLayout from "./hoc/page-layout";

/** Views **/
import GetStarted from "./views/get-started/";
import Maps from "./views/maps/";

/** Pages **/
/** UI Components **/
import AlertPage from "./views/ui-components/alert";
import BreadcrumbsPage from "./views/ui-components/breadcrumbs";
import ButtonsPage from "./views/ui-components/buttons";
import CardsPage from "./views/ui-components/cards";
import FiltersPage from "./views/ui-components/filters";
import FormsPage from "./views/ui-components/forms";
import GraphsPage from "./views/ui-components/graphs";
import HeadersPage from "./views/ui-components/headers";
import LinksPage from "./views/ui-components/links";
import ModalPage from "./views/ui-components/modal";
import NavigationsPage from "./views/ui-components/navigation";
import TabsPage from "./views/ui-components/tab-content";
import TablesPage from "./views/ui-components/tables";
import TooltipPage from "./views/ui-components/tooltip";
import PreloaderPage from "./views/ui-components/preloader";

/** Brand Design **/
import DesignPage from "./views/brand-design/design";
import ColoursPage from "./views/brand-design/colours";
import IconographyPage from "./views/brand-design/iconography";
import LogoPage from "./views/brand-design/logo";
import TypographyPage from "./views/brand-design/typography";
import BrandPage from "./views/brand-design/brand";

/** Content **/
import GoApiPage from "./views/data/goapi";
import InfographicsPage from "./views/data/infographics";
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
    <Router>
        <Switch>
            <AppRoute exact path="/" layout={PageLayout} component={GetStarted}/>
            <AppRoute path="/get-started" layout={PageLayout} component={GetStarted}/>
            <AppRoute
                path="/ui-components/alert"
                layout={PageLayoutUi}
                component={AlertPage}
            />
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
                path="/ui-components/filters"
                layout={PageLayoutUi}
                component={FiltersPage}
            />
            <AppRoute
                path="/ui-components/forms"
                layout={PageLayoutUi}
                component={FormsPage}
            />
            <AppRoute
                path="/ui-components/graphs"
                layout={PageLayoutUi}
                component={GraphsPage}
            />
            <AppRoute
                path="/ui-components/headers"
                layout={PageLayoutUi}
                component={HeadersPage}
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
                path="/ui-components/navigation"
                layout={PageLayoutUi}
                component={NavigationsPage}
            />
            <AppRoute
                path="/ui-components/preloader"
                layout={PageLayoutUi}
                component={PreloaderPage}
            />
            <AppRoute
                path="/ui-components/tabs"
                layout={PageLayoutUi}
                component={TabsPage}
            />
            <AppRoute
                path="/ui-components/tables"
                layout={PageLayoutUi}
                component={TablesPage}
            />
            <AppRoute
                path="/ui-components/tooltip"
                layout={PageLayoutUi}
                component={TooltipPage}
            />
            <AppRoute
                path="/brand-design/brand/"
                layout={PageLayoutDesign}
                component={BrandPage}
            />
            <AppRoute
                path="/brand-design/colours/"
                layout={PageLayoutDesign}
                component={ColoursPage}
            />
            <AppRoute
                path="/brand-design/design"
                layout={PageLayoutDesign}
                component={DesignPage}
            />
            <AppRoute
                path="/brand-design/iconography"
                layout={PageLayoutDesign}
                component={IconographyPage}
            />
            <AppRoute
                path="/brand-design/logo"
                layout={PageLayoutDesign}
                component={LogoPage}
            />
            <AppRoute
                path="/brand-design/typography"
                layout={PageLayoutDesign}
                component={TypographyPage}
            />
            <AppRoute
                path="/brand-design/brand"
                layout={PageLayoutDesign}
                component={BrandPage}
            />
            <AppRoute
                path="/data/goapi"
                layout={PageLayoutContent}
                component={GoApiPage}
            />
            <AppRoute
                path="/data/infographics"
                layout={PageLayoutContent}
                component={InfographicsPage}
            />

            <AppRoute path="/maps" layout={PageLayout} component={Maps}/>
        </Switch>
    </Router>
);
export default App;
