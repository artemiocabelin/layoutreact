import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    const iblock = {display: 'inline-block'};
      
    return (
      <div style={iblock}>
          <h1>Navigation</h1>
          <Link to="/" className="btn btn-primary">Main</Link>
          <Link to="/secondary" className="btn btn-danger">Secondary</Link>
      </div>
    );
  }
}