import React, { Component } from 'react';
import { Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import history from '../history';
import CampusesList from './CampusesList';
import StudentsList from './StudentsList';
import Home from './Home';
import store from '../store';
import SingleStudentDetails from './SingleStudentDetails';
import SingleCampusDetails from './SingleCampusDetails';
import { fetchCampuses } from '../reducers/campuses';
import { fetchStudents } from '../reducers/students';


class Main extends Component {

  componentDidMount () {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }

  render(){
    return (
      <Router history={history}>
        <div>
          <div className="header">
            <h1>Campus Manager</h1>
            <div className="navbar">
              <Navbar />
            </div>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/campuses" component={CampusesList} />
          <Route exact path="/students" component={StudentsList} />
          <Route exact path="/students/:id" component={SingleStudentDetails} />
          <Route exact path="/campuses/:id" component={SingleCampusDetails} />
        </div>
      </Router>
    );
  }
}

const mapState = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchCampuses());
    dispatch(fetchStudents());
  }
});


export default connect(mapState, mapDispatch)(Main);
