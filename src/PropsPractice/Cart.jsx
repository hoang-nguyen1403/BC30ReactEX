import React, { Component } from "react";
import DetailProductInfomation from "./DetailProductInfomation";
import ModalCart from "./ModalCart";
import ProductList from "./ProductList";
// import dataPhone from '../data/dataPhone.json'

const phoneData = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./Images/img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./Images/img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./Images/img/applephone.jpg",
  },
];

export default class Cart extends Component {
  state = {
    detailProduct: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./Images/img/vsphone.jpg",
    },
    productInCart: [
      // {maSP: 1,
      // tenSP: "VinSmart Live",
      // giaBan: 5700000,
      // hinhAnh: "./Images/img/vsphone.jpg",
      // soLuong: 1}
    ],
    cartIcon : "fa-solid fa-cart-shopping"
  };
  getDetailedProduct = (productData) => {
    this.setState({ detailProduct: productData });
  };
  addProductToCart = (productData) => {
    let currentProduct = [...this.state.productInCart];

    let isAdded = false;
    for (let i = 0; i < currentProduct.length; i++) {
      let product = currentProduct[i];
      if (product.maSP === productData.maSP) {
        product.soLuong += 1;
        isAdded = true;
      }
    }
    if (!isAdded) {
      let newproductData = { ...productData, soLuong: 1 };
      currentProduct.push(newproductData);
    }

    this.setState({ productInCart: currentProduct });
    console.log(this.state.cartIcon)
    if (this.state.cartIcon === "fa-solid fa-cart-shopping"){
    
      this.setState({cartIcon:"fas fa-cart-arrow-down"})
    } 

  };

  deleteProductFromCart = (productId) => {
    let currentProduct = [...this.state.productInCart];
    currentProduct = currentProduct.filter((p) => p.maSP !== productId);
    this.setState({ productInCart: currentProduct });
    if (!this.state.productInCart.length){
      let cartIcon = this.state.cartIcon
      if (cartIcon === "fa-solid fa-cart-shopping"){
        this.setState({cartIcon:"fa-solid fa-cart-shopping"})
      } 
    }
  };

  changeQuantity = (productId, isIncreased=true) => {
    let currentProduct = [...this.state.productInCart];
    let index = currentProduct.findIndex(product=>product.maSP === productId)
    if (isIncreased){
      currentProduct[index].soLuong += 1;
    }else{
      if (currentProduct[index].soLuong  >1){
        currentProduct[index].soLuong -= 1;
      }
    }
    this.setState({productInCart: currentProduct})
  }

  render() {
    let productQuantity = this.state.productInCart.reduce(
      (quantity, productData, index) => {
        return quantity + productData.soLuong;
      },
      0
    );
    return (
      <div className="container">
        <h3 className="text-center m-5 text-success">Shoping Cart</h3>
        <ModalCart
          productInCart={this.state.productInCart}
          deleteProductFromCart={this.deleteProductFromCart}
          changeQuantity = {this.changeQuantity}
        ></ModalCart>
        <div className="text-end m-2">
          <span
            className="text-danger "
            data-bs-toggle="modal"
            data-bs-target="#modelId"
            style={{ cursor: "pointer", fontSize: "18px", fontWeight: "bold" }}> <i class={this.state.cartIcon}></i>
            Giỏ hàng ({productQuantity})
          </span>
        </div>
        <ProductList
          productList={phoneData}
          getDetailedProduct={this.getDetailedProduct}
          addProductToCart={this.addProductToCart}
        ></ProductList>
        <DetailProductInfomation
          detailProduct={this.state.detailProduct}
        ></DetailProductInfomation>
      </div>
    );
  }
}
