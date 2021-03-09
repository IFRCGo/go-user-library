import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';

import menuIcon from '../assets/img/menu.svg';
import closeIcon from '../assets/img/close-menu.svg';

class SecondaryNavigation extends Component {

  rootSubmenuKeys = ["sub1","sub2", "sub3", "sub4", "sub5"];
  
  state = {
    openKeys: [],
    collapsed: false,
    addClass: false
  };

  toggleMenu = () => {
    this.setState({
      addClass: !this.state.addClass, openKeys: []
    });
  }

  closeMenu = () => {
    let isMobile = window.innerWidth <= 768;
    if (isMobile) {
      this.toggleMenu();
    }
  }

  onCollapse = collapsed => {
    this.setState({ collapsed , selected: !this.state.selected});
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };
  

  getMenu() {
    return (
      <Menu
          mode="inline"
          onOpenChange={this.onOpenChange}
          openKeys={this.state.openKeys}
        >
        
            <SubMenu key="sub1" title={<span className="submenu-title-wrapper">Get Started<i className="icon material-icons-round">expand_more</i></span>}>
              <MenuItem key="1-1"><Link to="/get-started/" onClick={this.closeMenu}>Overview</Link></MenuItem>
            </SubMenu>
            <SubMenu key="sub2" title={<span className="submenu-title-wrapper">Styles<i className="icon material-icons-round">expand_more</i></span>}>
              <MenuItem key="2-1"><Link to="/styles/colours/" onClick={this.closeMenu}>Colours</Link></MenuItem>
              <MenuItem key="2-2"><Link to="/styles/grid/" onClick={this.closeMenu}>Grid</Link></MenuItem>
              <MenuItem key="2-3"><Link to="/styles/icons/" onClick={this.closeMenu}>Iconography</Link></MenuItem>
              <MenuItem key="2-4"><Link to="/styles/video/" onClick={this.closeMenu}>Images &amp; videos</Link></MenuItem>
              {/* <MenuItem key="2-5"><Link to="/styles/microcopy/" onClick={this.closeMenu}>Microcopy</Link></MenuItem> */}
              <MenuItem key="2-6"><Link to="/styles/fonts/" onClick={this.closeMenu}>Typography</Link></MenuItem>
              <MenuItem key="2-7"><Link to="/styles/shadows/" onClick={this.closeMenu}>Shadows</Link></MenuItem>
              {/* <MenuItem key="2-8"><Link to="/core/spacing/" onClick={this.closeMenu}>Spacing</Link></MenuItem> */}
            </SubMenu>
            <SubMenu key="sub3"  title={<span className="submenu-title-wrapper">Components<i className="icon material-icons-round">expand_more</i></span>}> 
              <MenuItem key="3-1"><Link to="/components/accordion/" onClick={this.closeMenu}>Accordion</Link></MenuItem>
              <MenuItem key="3-2"><Link to="/components/alert-icons/" onClick={this.closeMenu}>Alerts</Link></MenuItem>
              <MenuItem key="3-3"><Link to="/components/bio-block/" onClick={this.closeMenu}>Bio block</Link></MenuItem>
              <MenuItem key="3-4"><Link to="/components/breadcrumbs/" onClick={this.closeMenu}>Breadcrumbs</Link></MenuItem>
              <MenuItem key="3-5"><Link to="/components/cta/" onClick={this.closeMenu}>Buttons</Link></MenuItem>  
              <MenuItem key="3-6"><Link to="/components/cards/" onClick={this.closeMenu}>Cards</Link></MenuItem>         
              <MenuItem key="3-7"><Link to="/components/cookie-banner/" onClick={this.closeMenu}>Cookie Banner</Link></MenuItem>
              <MenuItem key="3-8"><Link to="/components/datepicker/" onClick={this.closeMenu}>Datepicker</Link></MenuItem>
              <MenuItem key="3-9"><Link to="/components/form/" onClick={this.closeMenu}>Form elements</Link></MenuItem>
              <MenuItem key="3-10"><Link to="/components/footer/" onClick={this.closeMenu}>Footer</Link></MenuItem>
              <MenuItem key="3-11"><Link to="/components/gallery/" onClick={this.closeMenu}>Gallery</Link></MenuItem>
              <SubMenu className="third-level" key="3-12" title={<span className="submenu-title-wrapper">Hero banners<i className="icon material-icons-round">expand_more</i></span>}>               
                <MenuItem key="3-12-1"><Link to="/components/category-page-hero/" onClick={this.closeMenu}>Category page Hero</Link></MenuItem>
                <MenuItem key="3-12-2"><Link to="/components/content-page-hero/" onClick={this.closeMenu}>Content page Hero</Link></MenuItem>
                <MenuItem key="3-12-3"><Link to="/components/homepage-hero/" onClick={this.closeMenu}>Homepage Hero</Link></MenuItem>
                <MenuItem key="3-12-4"><Link to="/components/landing-page-hero/" onClick={this.closeMenu}>Landing page Hero</Link></MenuItem>
                <MenuItem key="3-12-5"><Link to="/components/special-page-hero/" onClick={this.closeMenu}>Special purpose Hero</Link></MenuItem>
                <MenuItem key="3-12-6"><Link to="/components/stories-page-hero/" onClick={this.closeMenu}>Stories page Hero</Link></MenuItem>
              </SubMenu>
              <MenuItem key="3-13"><Link to="/components/links/" onClick={this.closeMenu}>Links</Link></MenuItem> 
              <MenuItem key="3-14"><Link to="/components/lists/" onClick={this.closeMenu}>Lists</Link></MenuItem>
              <MenuItem key="3-15"><Link to="/components/search-components/" onClick={this.closeMenu}>Location Search</Link></MenuItem>  
              <MenuItem key="3-16"><Link to="/components/pagination/" onClick={this.closeMenu}>Pagination</Link></MenuItem>
              {/* <MenuItem key="3-17"><Link to="/components/quote/" onClick={this.closeMenu}>Quote</Link></MenuItem> */}
              <MenuItem key="3-18"><Link to="/components/table/" onClick={this.closeMenu}>Table</Link></MenuItem>
              <MenuItem key="3-19"><Link to="/components/tabs/" onClick={this.closeMenu}>Tabs</Link></MenuItem> 
              <MenuItem key="3-20"><Link to="/components/video-block/" onClick={this.closeMenu}>Video block</Link></MenuItem>              
            </SubMenu>
            <SubMenu key="sub4"  title={<span className="submenu-title-wrapper">Patterns<i className="icon material-icons-round">expand_more</i></span>}> 
              <MenuItem key="4-1"><Link to="/patterns/case-study/" onClick={this.closeMenu}>Case Study</Link></MenuItem>           
              <MenuItem key="4-2"><Link to="/patterns/contact-us/" onClick={this.closeMenu}>Contact us</Link></MenuItem>
              <MenuItem key="4-3"><Link to="/patterns/details/" onClick={this.closeMenu}>Detail component</Link></MenuItem>
              <MenuItem key="4-4"><Link to="/patterns/feedback/" onClick={this.closeMenu}>Feedback</Link></MenuItem>
              <MenuItem key="4-5"><Link to="/patterns/related-documents/" onClick={this.closeMenu}>Related Documents</Link></MenuItem>
              <MenuItem key="4-6"><Link to="/patterns/related-links/" onClick={this.closeMenu}>Related links</Link></MenuItem> 
              <MenuItem key="4-7"><Link to="/templates/page/" onClick={this.closeMenu}>Sample page</Link></MenuItem>
              <MenuItem key="4-8"><Link to="/patterns/section-links/" onClick={this.closeMenu}>Section links</Link></MenuItem>
              <MenuItem key="4-9"><Link to="/patterns/shop-details/" onClick={this.closeMenu}>Shop Details</Link></MenuItem>
              <MenuItem key="4-10"><Link to="/patterns/sitemap/" onClick={this.closeMenu}>Sitemap</Link></MenuItem>
              <MenuItem key="4-11"><Link to="/patterns/social-feed/" onClick={this.closeMenu}>Social Feed</Link></MenuItem>
            </SubMenu>
        </Menu>
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleMenu} className={ this.state.addClass ? 'nav-toggle open' : 'nav-toggle'}>
          <img src={this.state.addClass ? closeIcon : menuIcon} alt="menu"/>
          {this.state.addClass ? "Close" : "Menu"}
         
        </button>
        <div className={ this.state.addClass ? 'menu collapsed' : 'menu'}>
            {this.getMenu()}
        </div>
      </div>
    );
  }
}

export default withRouter(SecondaryNavigation);
