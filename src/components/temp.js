import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
   
  static propTypes = {
    branding: PropTypes.string.isRequired
  };

  render() {
    const { branding } = props;

    return (
        <nav className="nav navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
            <a href="/" className="navbar-brand">{branding}</a>
            <div>
                <ul>
                    <li className="navbar-nav mr-auto">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                </ul> 
            </div>
        </div>
    </nav>
    );
  }
}

Header.defaultProps = {
    branding: 'My App'
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};


export default Header;