import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


function StudentList (props) {

  const { campuses } = props

    return (
      <div>
        <h3>Single Campuses Will Go Here</h3>
      </div>
      )
    }

  const mapStateToProps = function (state, ownProps) {
    return {
      students: state.students,
      campuses: state.campuses
    }
  }


const CampusListContainer = connect(mapStateToProps)(StudentList)
export default CampusListContainer
