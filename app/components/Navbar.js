import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/* -----------------    COMPONENT     ------------------ */

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/"> Home </Link>
        <Link to="/campuses"> Campuses </Link>
        <Link to="/students"> Students </Link>
    </div>
    );
  }
}
