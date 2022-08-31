import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookingChair extends Component {
  
  render() {
    let {bookingInfo} = this.props.bookingMovieReducer
    let firstRow = bookingInfo.filter(p=> p.hang ==="")[0]['danhSachGhe']
    let chairs = bookingInfo.filter(p=> p.hang !=="")

    console.log(chairs)
    return (
      <table style={{width:"100%"}}>
        <thead>
          <tr>  
            <th></th>
            {firstRow.map((prop, index)=>{
              return <th className='firstChar' key={index}>{prop.soGhe}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {chairs.map((prop, index)=>{
            return <tr key={index}>
                <td className="firstChar"> {prop.hang} </td>
                {prop.danhSachGhe.map((p, i)=>{
                  return <td  key={i}><button className='ghe'>{p.soGhe}</button></td>
                })}
              </tr>
          })}
        </tbody>
        
      </table>
    )
  }
}


const mapStateToProps = (state) => ({
  bookingMovieReducer: state.bookingMovieReducer,
});

export default connect(mapStateToProps)(BookingChair);
