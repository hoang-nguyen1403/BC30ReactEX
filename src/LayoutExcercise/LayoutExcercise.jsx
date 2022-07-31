import React, { Component } from 'react'
import Body from './Body'
import Carousel from './Carousel'

export default class LayoutExcercise extends Component {
  render() {
    return (
      <div className="container">
          <Carousel></Carousel>
          <Body></Body>
      </div>

    )
  }
}
