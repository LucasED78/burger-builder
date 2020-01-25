import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    toggleMenu: false
  }

  toggleMenuHandler = () => {
    const isToggled = this.state.toggleMenu;

    this.setState({
      toggleMenu: !isToggled
    });
  }

  render(){
    return (
      <Aux>
        <Toolbar menuClicked={this.toggleMenuHandler} />
        <SideDrawer menuClosed={this.toggleMenuHandler} showBackdrop={this.state.toggleMenu} />

        <div className={classes.Content}>{ this.props.children }</div>
      </Aux>
    )
  }
}

export default Layout;