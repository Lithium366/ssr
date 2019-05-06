import React from 'react';
import NavBar from './NavBar';

class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  state = {
    isMenuOpened: false,
  }

  toggleMenu() {
    this.setState({
      isMenuOpened: !this.state.isMenuOpened,
    });
  }

  closeMenu() {
    this.setState({
      isMenuOpened: false,
    });
  }

  render() {
    const {
      isMenuOpened,
    } = this.state;

    return (<NavBar
      toggleMenu={this.toggleMenu}
      closeMenu={this.closeMenu}
      isMenuOpened={isMenuOpened}
    />);
  }
}

export default NavBarContainer;
