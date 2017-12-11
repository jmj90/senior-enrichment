// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Router } from 'react-router';
// import { Route, Switch } from 'react-router-dom';
// import history from './history';
// import Root from './components/Root';
// import Home from './components/Home';
// import AllCampusesList from './components/Campuses/AllCampusesList';
// import CampusDetail from './components/Campuses/CampusDetail';
// import StudentList from './components';
// import StudentDetail from './components/Students/StudentDetail';
// import { fetchCampuses, fetchStudents } from './store';
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
//             <Route exact path="/campuses" component={AllCampusesList} />
//             <Route exact path="/campuses/:id" component={CampusDetail} />
//             <Route exact path="/students" component={StudentList} />
//             <Route exact path="/students/:id" component={StudentDetail} />
//           </Switch>
//         </Root>
//       </Router>
//     );
//   }
//
// }
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
