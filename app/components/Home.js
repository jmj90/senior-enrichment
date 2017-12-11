import React, { Component } from 'react';
import axios from 'axios';
import store, { fetchCampuses, fetchStudents } from '../store';


export default class Home extends Component {

  render(){
    return (
      <div className="studentDisplay">
        <div className="pageTitle">
          <h3>Welcome To the Campus Manager</h3>
        </div>
        <div id="homeImage">
          <img src="http://www.lboro.ac.uk/media/wwwlboroacuk/external/content/abouttheuniversity/hazlerigg.jpg" />
        </div>
      </div>
    )
  }
}
