import React, { Component } from 'react'
import { NavLink } from "react-router-dom";


export default class Description extends Component {
  render() {
    return (
      <div className="container">
          <h3>
              BT Bootcamp 30
          </h3>
          <p>
              BT2: React Glasses
              Click  <NavLink to='/Glasses'>Here !</NavLink>
          </p>
          <hr />
          <p>
              BT1: React Layout
              Click  <NavLink to='/BTLayout'>Here !</NavLink>
          </p>
          <hr />
      </div>

    )
  }
}
