import React, { Component } from 'react';

class NavToggle extends Component {
  constructor(props) {    
    super(props)
    this.state = {
      addClass: false
    }
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(){
    this.setState({addClass: !this.state.addClass});
  }


  render() {

    return (   
        <div onClick={this.handleClick} className={ this.state.addClass ? 'nav-toggle open' : 'nav-toggle'}>click here</div> 
    );
  }
}

export default NavToggle;
