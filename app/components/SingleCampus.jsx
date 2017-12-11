import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeCampus } from '../reducers/campuses';

class SingleCampus extends Component {
  constructor(props) {
    super(props);

    this.removeCampus = this.removeCampus.bind(this);
  }

  render() {
    const { campus } = this.props;
    return (
      <div className="campusItem">
          <img src={campus.imageUrl} />
        <NavLink className="single-campus-link" activeClassName="active" to={`/campuses/${campus.id}`}>
          <div id="campusName">
            {campus.name}
          </div>
        </NavLink>
        <button
          className="submitButton"
          onClick={this.removeCampus}>
          Remove
        </button>
      </div>
    )
  }

  removeCampus(event) {
    const { removeCampus, campus } = this.props;
    event.stopPropagation();
    alert('are you sure you want to remove this campus?')
    removeCampus(campus.id);
    window.location.reload()
  }

}

const mapStateToProps = ({ Campuses }) => ({ Campuses });

const mapDispatchToProps = { removeCampus };

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
