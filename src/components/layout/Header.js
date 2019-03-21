import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header(props) {
  const { branding } = props
  return (
    <nav className="nav navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
        <div className="container">
            <Link to="/" className="navbar-brand">{branding}</Link>
            <div>
                <ul>
                    <li className="navbar-nav mr-auto">
                        <Link to="/" className="nav-link"><i className="fas fa-home"></i> Home</Link>
                        <Link to="/add" className="nav-link"><i className="fas fa-plus"></i> Add</Link>
                        <Link to="/about" className="nav-link"><i className="fas fa-question"></i> About</Link>
                    </li>
                </ul> 
            </div>
        </div>
    </nav>
  )
}

Header.defaultProps = {
    branding: 'My App'
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};


export default Header;