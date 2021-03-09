import React from 'react'; 
import { Row, Col } from 'react-flexbox-grid';

import Header from './header';
import Footer from './footer';


const DefaultLayout = (props) => (                         
    <React.Fragment>                
      <Header />
      <div className="main">
          <div className="wrapper">
              <Row>
                  <Col xs={12} lg={3} className="grey-br">

                  </Col>
                  <Col xs={12} lg={9}>
                    <div className="content">                      
                        {props.children}                     
                    </div>           
                  </Col>
              </Row>
          </div>
      </div>
      <Footer />
      </React.Fragment> 
  );  

export default DefaultLayout;