import React, { PureComponent } from "react";
import { connect } from "react-redux";

class StudentTable extends PureComponent {
  deleteStudent(studentId) {
    const action = {
      type: "DELETE_STUDENT",
      payload: { studentId: studentId },
    };
    this.props.dispatch(action);
    // this.props.dispatch(action)
    alert(`Deleted student with ${studentId}`);
  }

  searchStudent = (event)=>{
    const action = {
      type: "SEARCH_CHANGE_INPUT",
      studentID: event.target.value,
    };
    console.log(event.target.value)
    this.props.dispatch(action);
  }

  setStudentToForm = (studentId) => {
    const action = {
      type: "SET_STUDENT_TO_FORM",
      payload: { updateButtonStyle: "inline-block", studentId: studentId },
    };
    this.props.dispatch(action);
  };
  renderStudentRow(students) {
    return students.map((prod, index) => {
      return (
        <tr key={index}>
          <td>{prod.id}</td>
          <td>{prod.fullName}</td>
          <td>{prod.phoneNumber}</td>
          <td>{prod.email}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.deleteStudent(prod.id);
              }}
            >
              Delete
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={() => {
                this.setStudentToForm(prod.id);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="studentTable mx-5 mt-5">
        <div className="row">
          <div className="search-bar row mb-4">
            <input
              className="form-control"
              id="search"
              name="search"
              placeholder="Search by ID"
              onChange={(event) => {
                this.searchStudent(event);
              }}
            />
          </div>
          <table className="table">
            <thead className="bg-black text-light">
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{this.renderStudentRow(this.props.students)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  studentReducer: state.studentReducer,
});

export default connect(mapStateToProps)(StudentTable);
