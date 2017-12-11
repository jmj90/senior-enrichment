import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../reducers/students';
import SingleStudent from './SingleStudent';

class StudentsList extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <div className="campus-list">
          {this.getCurrentStudents()}
          <div>
            {this.renderNewStudent()}
          </div>
        </div>
      </div>
    );
  }

  renderNewStudent() {
    return (
      <div>
        <form id="addCampusForm" onSubmit={this.onSubmit}>
          <div>
            <h3>Register New Student </h3>
            <div>
              <label> First Name: </label>
              <input name="firstname" type="text" required placeholder="Student Name" />
                <label> Last Name: </label>
                <input name="lastname" type="text" required placeholder="Last" />
                  <label> GPA: </label>
                  <input name="gpa" type="integer" required placeholder="GPA" />
              <label> Email: </label>
              <input name="email" type="Email" required placeholder="Email" />
            </div>
          </div>
          <div>
            <button type="submit" id="submitButton" value="Submit"> Add Student </button>
          </div>
        </form>
      </div>
    )
  }

  getCurrentStudents() {
    return (
      <div className="campusDisplay">
        <div className="pageTitle">
          <h3>Current Students</h3>
        </div>
        {
          this.props.students
            .map(student => <SingleStudent student={student} key={student.id} />)
        }
      </div>
    )
  }

  onSubmit(event) {
    event.preventDefault();
    const student = {
      firstName: event.target.firstname.value,
      lastName: event.target.lastname.value,
      email: event.target.email.value,
      gpa: event.target.gpa.value,
    };
    this.props.addStudent(student);
  }

}

const mapStateToProps = ({ students, campuses }) => ({ students, campuses });

const mapDispatchToProps = { addStudent };

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
