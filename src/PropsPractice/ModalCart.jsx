import React, { Component } from "react";

export default class ModalCart extends Component {
  render() {
    let { productInCart, deleteProductFromCart, changeQuantity } = this.props;
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
                          <td>
                            <div
                              style={{
                                display: "flex",
                                textAlign: "center",
                                justifyContent: "start",
                              }}
                            >
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  changeQuantity(data.maSP);
                                }}
                              >
                                {" "}
                                +{" "}
                              </button>

                              <p className="m-0 p-2">{data.soLuong}</p>

                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  changeQuantity(data.maSP, false);
                                }}
                              >
                                {" "}
                                -{" "}
                              </button>
                            </div>
                          </td>
                          <td>{data.giaBan * data.soLuong}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                deleteProductFromCart(data.maSP);
                              }}
                            >
                              Xoá
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="4"></td>
                      <td style={{ fontWeight: 700 }}>Tổng tiền :</td>
                      <td style={{fontWeight:700}}>
                        {productInCart.reduce((total, product, index) => {
                          return product.giaBan * product.soLuong;
                        }, 0)}
                      </td>
                    </tr>
                  </tfoot>
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
