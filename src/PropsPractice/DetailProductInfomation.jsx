import React, { Component } from 'react'

export default class DetailProductInfomation extends Component {
    state = {
        
    }
  render() {
      let {detailProduct} = this.props
    return (
      <div className="container ">
          <div className="row m-5">
              <div className="col-4 text-center">
                  <h3 >{detailProduct.tenSP}</h3>
                  <img src={detailProduct.hinhAnh} alt=""  width="100%"/>
                  <p>Giá: {detailProduct.giaBan} VND</p>

              </div>
              <div className="col-8">
                  <h3>Thông số kỹ thuật</h3>
                  <table className="table">
                      <tbody>
                          <tr>
                              <td>Màn hình</td>
                              <td>{detailProduct.manHinh}</td>
                          </tr>
                          <tr>
                              <td>Hệ Điều Hành</td>
                              <td>{detailProduct.heDieuHanh}</td>
                          </tr>
                          <tr>
                              <td>Camera Trước</td>
                              <td>{detailProduct.cameraTruoc}</td>
                          </tr>
                          <tr>
                              <td>Camera Sau</td>
                              <td>{detailProduct.cameraSau}</td>
                          </tr>
                          <tr>
                              <td>RAM</td>
                              <td>{detailProduct.ram}</td>
                          </tr>
                          <tr>
                              <td>ROM</td>
                              <td>{detailProduct.rom}</td>
                          </tr>
                      </tbody>
                  </table>
                  
              </div>
          </div>
      </div>
    )
  }
}
