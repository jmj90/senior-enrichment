import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCampus } from '../reducers/campuses';
import SingleCampus from './SingleCampus';

class CampusesList extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <div className="campuses">
          {this.getCampuses()}
          <div>
            {this.newCampusForm()}
          </div>
        </div>
      </div>
    );
  }

  newCampusForm() {
    return (
      <div>
        <form id="addCampusForm" onSubmit={this.onSubmit}>
          <div>
            <h3>Register New Campus </h3>
            <div>
              <label> Campus Name: </label>
              <input name="name" type="text" required placeholder="Campus Name" />
              <label> Image Url: </label>
              <input name="image" type="text"placeholder="Image Url" />
            </div>
          </div>
          <div>
            <button type="submit" id="submitButton" value="Submit"> Add Campus </button>
          </div>
        </form>
      </div>
    )
  }

  getCampuses() {
    return (
      <div className="campusDisplay">
        <div className="pageTitle">
          <h3>Campuses</h3>
        </div>
        {
          this.props.campuses
            .map(campus => <SingleCampus campus={campus} key={campus.id} />)
        }
      </div>
    )
  }

  onSubmit(event) {
    event.preventDefault();
    const campus = {
      name: event.target.name.value,
    };
    this.props.addCampus(campus);
    event.target.name.value = '';
  }

}

const mapStateToProps = ({ campuses }) => ({ campuses });

const mapDispatchToProps = { addCampus };

export default connect(mapStateToProps, mapDispatchToProps)(CampusesList);
