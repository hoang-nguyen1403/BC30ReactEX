import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import StudentTable from './StudentTable'
import { connect } from "react-redux";



class FormValidation extends Component {
    

  render() {
    let {students } = this.props.studentReducer; 
    return (
      <div className='container'>
          <RegisterForm />
          <StudentTable students = {students}>
          </StudentTable>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    studentReducer: state.studentReducer,
  });

export default connect(mapStateToProps)(FormValidation);
  