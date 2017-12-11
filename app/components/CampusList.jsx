import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import store, { getCampuses } from '../store';


function CampusList (props) {

  const { campuses } = props

  return (
    <div className="campusDisplay">
      <div className="pageTitle">
        <h3>Campuses</h3>
      </div>
      {
        campuses.map(campus => {
          return (
              <div className="campusItem" key={campus.id}>
                <NavLink to={`/campuses/${campus.id}`}>
                <img src={campus.imageUrl} />
                <div id="campusName">
                  {campus.name}
                </div>
              </NavLink>
            </div>
          )
        })
      }
    </div>
  );
}

  const mapStateToProps = function (state) {
    return {
      campuses: state.campuses
    }
  }

const CampusListContainer = connect(mapStateToProps)(CampusList)
export default CampusListContainer
