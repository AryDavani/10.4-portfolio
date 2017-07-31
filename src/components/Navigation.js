import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <nav>
        <NavLink activeClassName="selected" exact to="/">Home</NavLink>
        <NavLink activeClassName="selected" to="/about">About</NavLink>
        <NavLink activeClassName="selected" to="/portfolio">Portfolio</NavLink>
        <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
        <NavLink activeClassName="selected" to="/references">References</NavLink>

      </nav>

    )
  }
}
