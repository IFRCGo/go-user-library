import React  from 'react';  
import { Route, Switch } from 'react-router-dom';
import './styles/main.scss';
// import './index.scss';  
  
/** Layouts **/
import PageLayout from "./hoc/page-layout"; 
  
/** Views **/  
import BrandDesign from './views/brand-design/';
import Content from './views/content/';
import Home from './views/get-started/';
import Resources from './views/resources/';
import UiComponents from './views/ui-components/';  
  
/* 
   App 
 */  
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

const App = () => (
    <Switch>
        <AppRoute exact path="/" layout={PageLayout}  component={Home} /> 
        <AppRoute path="/get-started" layout={PageLayout}  component={Home} />
        <AppRoute path="/brand-design" layout={PageLayout}  component={BrandDesign} />
        <AppRoute path="/ui-components" layout={PageLayout}  component={UiComponents} />
        <AppRoute path="/content" layout={PageLayout}  component={Content} />
        <AppRoute path="/resources" layout={PageLayout}  component={Resources} />  
    </Switch>
) 
export default App; 

