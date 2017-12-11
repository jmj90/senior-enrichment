import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import { addStudent } from '../reducers/students';
import { updateCampus } from '../reducers/campuses';

class SingleCampusDetails extends Component {
  constructor(props) {
    super(props);

    this.enrollNewStudent = this.enrollNewStudent.bind(this);
    this.editCampusInfo = this.editCampusInfo.bind(this);
  }

  render() {
    return (
      <div className="singleStudentView">
        <div className="current-campus">
          {console.log(this.props.campuses)}
          <div>
            {
              this.props.campuses.filter(campus => campus.id === this.props.campus.id)
                .map(campus => (
                    <div key={campus.id}>
                      <h2> {campus.name} </h2>
                      <img src={campus.imageUrl} />
                    </div>
                  )
                )
            }
          </div>
        </div>
        <br />
        <div>
          {this.editCampusForm()}
        </div>
        <br />
        <div>
          {this.newStudentForm()}
        </div>
        <br />
        <div>
          {this.getStudentsInCampus()}
        </div>
        <br />
      </div>
    );
  }


  getStudentsInCampus() {
    return (
      <div>
        <h4>Current Students: </h4>
        {
          this.props.students.filter(student => student.campusId === this.props.campus.id)
          .map(currentStudent => (
              <NavLink key={currentStudent.id} to={`/students/${currentStudent.id}`}>
              <h4> {currentStudent.fullname} </h4>
            </NavLink>)
          )
        }
      </div>
    )
  }

  editCampusForm() {
    return (
      <div>
        <form onSubmit={this.editCampusInfo}>
          <div>
            <h4>Edit Campus Name: </h4>
            <h4>
              <input name="name" type="text" required placeholder="Campus Name" />
            </h4>
          </div>
          <div>
            <input type="submit" value="Submit" onClick={this.pageReloader}
            />
          </div>
        </form>
      </div>
    )
  }

  newStudentForm() {
    return (
      <div>
        <form onSubmit={this.enrollNewStudent}>
          <div>
            <h4>Enroll New Student: </h4>
            <h4>
              <input name="firstName" type="text" required placeholder="First Name" />
            </h4>
            <h4>
              <input name="lastName" type="text" required placeholder="Last Name" />
            </h4>
            <h4>
              <input name="email" type="text" required placeholder="Student Email" />
            </h4>
          </div>
          <div>
            <input type="submit" value="Submit" onClick={this.pageReloader} />
          </div>
        </form>
      </div>
    )
  }

  enrollNewStudent(event) {
    event.preventDefault();
    const student = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      campusId: this.props.campus.id
    };
    this.props.addStudent(student);
    event.target.firstName.value = '';
    event.target.lastName.value = '';
    event.target.email.value = '';
  }

  editCampusInfo(event) {
    event.preventDefault();
    const campus = {
      id: this.props.campus.id,
      name: event.target.name.value
    };
    this.props.updateCampus(campus);
    event.target.name.value = '';
  }

  pageReloader(){
    return window.location.reload()
  }

}

const mapStateToProps = ({ campuses, students }, ownProps) => {
  const campusParamId = Number(ownProps.match.params.id);
  return {
    campus: _.find(campuses, campus => campus.id === campusParamId),
    students,
    campuses
  };
}

const mapDispatchToProps = { addStudent, updateCampus };

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampusDetails);
