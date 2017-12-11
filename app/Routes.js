// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Router } from 'react-router';
// import { Route, Switch } from 'react-router-dom';
// import history from './history';
// import Root from './components/Root';
// import Home from './components/Home';
// import AllCampusesList from './components/Campuses/AllCampusesList';
// import CampusDetail from './components/Campuses/CampusDetail';
// import AllStudentsList from './components/Students/AllStudentsList';
// import StudentDetail from './components/Students/StudentDetail';
// import { fetchCampuses, fetchStudents } from './reducers';
//
//
// class Routes extends Component {
//
//   componentDidMount() {
//     this.props.fetchInitialData();
//   }
//
//   render() {
//     return (
//       <Router history={history}>
//         <Root>
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/campuses" component={AllCampuses} />
//             <Route exact path="/campuses/:id" component={SingleCampus} />
//             <Route exact path="/students" component={AllStudents} />
//             <Route exact path="/students/:id" component={SingleStudent} />
//           </Switch>
//         </Root>
//       </Router>
//     );
//   }
//
// }
//
// const mapState = null;
//
// const mapDispatch = dispatch => ({
//   fetchInitialData: () => {
//     dispatch(fetchCampuses());
//     dispatch(fetchStudents());
//   }
// });
//
// export default connect(mapState, mapDispatch)(Routes);
