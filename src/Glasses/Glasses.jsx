import React, { Component } from "react";

import "./glasses.css";

const glassesData = [
    {imgSrc: "./Images/glassesImage/v1.png"},
    {imgSrc: "./Images/glassesImage/v2.png"},
    {imgSrc: "./Images/glassesImage/v3.png"},
    {imgSrc: "./Images/glassesImage/v4.png"},
    {imgSrc: "./Images/glassesImage/v5.png"},
    {imgSrc: "./Images/glassesImage/v6.png"},
    {imgSrc: "./Images/glassesImage/v7.png"},
    {imgSrc: "./Images/glassesImage/v8.png"},
]

export default class Glasses extends Component {
    modelImgSrc = "./Images/glassesImage/model.jpg"
    state = {
        glassesImg: "./Images/glassesImage/v1.png"
    }
    glassesData = [...glassesData]
    
    renderGlasses= ()=>{
        let content = this.glassesData.map((glassImg, index)=>{
            return <div key={index} className="col-2 glass-item">
                <img src={glassImg.imgSrc} className='glass-img' alt=""  onClick={()=>{
                    this.setState({glassesImg: glassImg.imgSrc})
                }} />
            </div>
        })
        return content
    }
  render() {
    return (
      <div className="container">
        <div className="glass_app">
          <div className="app_header">
            <div className="row">
              <h3 className="app_header_title"> Try Glasses App Online</h3>
            </div>
          </div>
          <div className="app_body">
              <div className="row">
                  <div className="col-6 left-col">
                    <img
                        className="card-img-top"
                        src={this.modelImgSrc}
                        alt="Title"
                        /> 
                    <img
                        className="card-img-top activeglass"
                        src={this.state.glassesImg}
                        alt="activeglass"
                        />     
                  </div>
                  <div className="col-6 right-col">
                    <img
                        className="card-img-top"
                        src={this.modelImgSrc}
                        alt="Title"
                        />  
                    </div>
              </div>
          </div>
          <div className="glasses_selection row border border-danger">
              {
                  this.renderGlasses()
              }
          </div>
        </div>
      </div>
    );
  }
}
