import React, { Component } from "react";
import BookingChair from "./BookingChair";
import TicketTable from "./TicketTable";
import "./bookingChair.css";

export default class MovieBooking extends Component {
  render() {
    return (
      <div className="booking-page">
        <div className="cover">
          <div className="container " style={{ minHeight: "80vh" }}>
            <div className="row">
              <div className="left-col col-8 text-center text-light">
                <h3> ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h3>
                <div className="header-book text-center ">
                  <h4>Màn Hình</h4>
                  <div className="screen"></div>
                </div>
                <BookingChair></BookingChair>
              </div>
              <div className="right-col col-4">
                <TicketTable></TicketTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
