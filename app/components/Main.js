import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar'
import CampusList from './CampusList'
import StudentList from './StudentList'
import Home from './Home'
import SingleCampus from './SingleCampus'
import store, { fetchCampuses, fetchStudents } from '../store';



export default class Main extends Component {

  componentDidMount () {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }

  render(){
    return (
      <Router>
        <div>
          <div className="header">
              <h1>Campus Manager</h1>
              <div className="navbar">
                <Navbar />
              </div>
          </div>
            <Route exact path="/" component={Home} />
            <Route exact path="/campuses" component={CampusList} />
            <Route exact path="/students" component={StudentList} />
            <Route exact path="/campuses/:id" component={SingleCampus} />
        </div>
      </Router>
    );
  }
}
