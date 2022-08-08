import React, { Component } from "react";

export default class ModalCart extends Component {
  render() {
    let { productInCart, deleteProductFromCart } = this.props;
    return (
      <div className="row">
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{ minWidth: "888px" }}
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ Hàng</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã Sản Phẩm</th>
                      <th>Hình Ảnh</th>
                      <th>Tên Sản Phẩm</th>
                      <th>Số Lượng</th>
                      <th>Thành Tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {productInCart.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>{data.maSP}</td>
                          <td>
                            {" "}
                            <img src={data.hinhAnh} alt="" width="50px" />
                          </td>
                          <td>{data.tenSP}</td>
                          <td>{data.soLuong}</td>
                          <td>{data.giaBan}</td>
                          <td>
                            <button className="btn btn-danger" onClick={
                                ()=>{
                                    deleteProductFromCart(data.maSP)
                                }
                            }>Xoá</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-danger">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
