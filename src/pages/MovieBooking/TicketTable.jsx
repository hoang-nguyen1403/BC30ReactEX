import React, { Component } from "react";
import { connect } from "react-redux";
class TicketTable extends Component {
  render() {
    let { bookingInfo, bookingTicket } = this.props.bookingMovieReducer;
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
        <table className="table text-light mt-5">
          <thead>
            <tr>
              <th>Số Ghế</th>
              <th>Giá</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              bookingTicket.map((prop, index)=>{
                return <tr key={index}>
                  <td>{prop.soGhe}</td>
                  <td>{prop.gia}</td>
                  <td><button className="btn btn-danger" 
                  onClick={()=>{
                    const action = {
                      type: "DELETE_CHAIR",
                      payload: { chairCode: prop.soGhe },
                      
                    }
                    if(window.confirm("Are you sure to delete this chair ?")){
                      this.props.dispatch(action);
                    }
                    
                  }}
                  >Xoá</button></td>
                </tr>
              })
            }
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>Tổng Tiền</td>
              <td>{
                    bookingTicket.reduce(
                        (quantity, chair, index) => {
                          return quantity +chair.gia;
                        },0)
                }</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookingMovieReducer: state.bookingMovieReducer,
});

export default connect(mapStateToProps)(TicketTable);
