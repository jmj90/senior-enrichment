import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { _ } from 'lodash'



function StudentList (props, ownProps) {

  const { students, campuses } = props

    return (
      <div className="studentDisplay">
        <div className="pageTitle">
          <h3>Students</h3>
        </div>
        {
          students.map(student => {
            return (
              <div key={student.id}>
                <NavLink to={`/students/${student.id}`} className="studentLink">
                  <h3>{student.fullname} </h3>
                  </NavLink>
                <h5>gpa: {student.gpa} </h5>
                <h5>school: </h5>
              </div>
            )
          })
        }
        <form id="student-form" >
            <h1> Register New Student </h1>
            <div>
              <label> First name: </label>
              <div>
                <input id='firstNameVal'  placeholder='first'/>
              </div>
              <label> Last name: </label>
              <div>
                <input id='lastNameVal'  placeholder='last'/>
              </div>
              <label> Email </label>
              <div>
                <input id='emailFieldVal'  placeholder='email' />
              </div>
              <label> Gpa </label>
              <div>
                <input id='gpaFieldVal'  placeholder='gpa' />
              </div>
              <label> School </label>
            <div>
                <button type='submit' > Add Student
                 </button>
            </div>
            </div>
          </form>
      </div>
    );
  }

  const mapStateToProps = function (state, ownProps) {
    return {
      students: state.students,
      campuses: state.campuses
    }
  }

const CampusListContainer = connect(mapStateToProps)(StudentList)
export default CampusListContainer
