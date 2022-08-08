import React, { Component } from "react";
import ProductCard from "./ProductCard";
export default class ProductList extends Component {
  render() {
    const { productList, getDetailedProduct, addProductToCart } = this.props;
    return (
      <div className="container">
        <div className="row">
          {productList.map((data, index) => {
            return <div className="col-4" key={index}>
                <ProductCard 
                cardData={data} 
                getDetailedProduct={getDetailedProduct}
                addProductToCart={addProductToCart}>
                </ProductCard>
            </div>
          })}
        </div>
      </div>
    );
  }
}
