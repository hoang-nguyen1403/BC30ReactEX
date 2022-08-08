import React, { Component } from "react";

export default class ProductCard extends Component {
  render() {
      const {cardData, getDetailedProduct, addProductToCart} = this.props;
    return (
      <div className="card text-white bg-dark">
        <img className="card-img-top" src={cardData.hinhAnh} alt="Title" height="350px" width="200px"/>
        <div className="card-body">
          <h4 className="card-title">{cardData.tenSP}</h4>
          <button className="btn btn-danger" onClick={()=>{
              getDetailedProduct(cardData)
          }}>Xem Chi Tiết</button>
          <button className="btn btn-primary m-2" 
          onClick={()=>{
              let {maSP, tenSP, giaBan, hinhAnh} = cardData
              let productInfo = {maSP,tenSP, giaBan, hinhAnh}
              addProductToCart(productInfo)
          }}
          >Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
