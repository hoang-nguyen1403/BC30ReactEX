import React, { Component } from "react";

export default class TicketTable extends Component {
  render() {
    return (
      <div>
        <h3 className="text-light">Danh Sáchh Ghế Bạn Chọn</h3>
        <div className="chairType mt-5">
          <div className="row">
            <div className="col-2">
              <div className="recYellow gheDuocChon"></div>
            </div>
            <div className="col-10">
              <h3 className="text-light">Ghế đã đặt</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <div className="recYellow gheDangChon"></div>
            </div>
            <div className="col-10">
              <h3 className="text-light">Ghế đang đặt</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <div className="recYellow ghe"></div>
            </div>
            <div className="col-10">
              <h3 className="text-light">Ghế chưa đặt</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
