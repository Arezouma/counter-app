import React, { Component } from 'react';

// Stateless Functional components
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar
        <span className="badge badge-pill badge-secondary">
          {props.totalCcounters}
        </span>

      </a>
    </nav>
  )
}

export default NavBar;
