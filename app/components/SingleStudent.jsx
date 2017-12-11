import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeStudent } from '../reducers/students';

class SingleStudent extends Component {
  constructor(props) {
    super(props);

    this.removeStudent = this.removeStudent.bind(this);
  }

  render() {
    const { student } = this.props;

    return (
      <div className="studentContainer" key={student.id}>
        <NavLink
          className="studentNameLink"
          activeClassName="active"
          to={`/students/${student.id}`}>
          <h4>
            {student.fullname}
          </h4>
        </NavLink>
        <div className="gpaBox"> GPA: {student.gpa} </div>
        <button
          className="submitButton"
          onClick={this.removeStudent}>
          Remove
          </button>
      </div>
    )
  }



  removeStudent(event) {
    const { removeStudent, student } = this.props;
    event.stopPropagation();
    alert('are you sure you want to remove this student?')
    removeStudent(student.id);
    window.location.reload()
  }

}

const mapStateToProps = ({ students }) => ({ students });

const mapDispatchToProps = { removeStudent };

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
