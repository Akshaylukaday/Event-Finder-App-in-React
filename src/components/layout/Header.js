import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            <h1 className="display-4">FindMyEvent</h1>
          </a>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item mr-5">
                <Link to="/" className="nav-link">
                  <h5 className="text-white">Home</h5>
                </Link>
              </li>
              <li className="nav-item mr-5">
                <Link to="/event/add" className="nav-link">
                  <h5 className="text-white">Create Event</h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
