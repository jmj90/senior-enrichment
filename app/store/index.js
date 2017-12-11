import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk';

const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware)
export default createStore(rootReducer, middleware)


// import axios from 'axios';
// import { createStore, applyMiddleware } from 'redux';
// import loggerMiddleware from 'redux-logger'
// import thunkMiddleware from 'redux-thunk';
//
//
//
// /* ------------       initialState      ------------------ */
//
// const initialState = {
//   campuses: [],
//   students: [],
// }
//
// /* -----------------    ACTIONS     ------------------ */
//
// // Campuses
// const INITIALIZE = 'INITIALIZE_CAMPUSES';
// const GET_CAMPUSES = 'GET_CAMPUSES';
// const CREATE_CAMPUS = 'CREATE_CAMPUS';
// const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
// const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
//
// // Students
//
// const GET_STUDENTS = 'GET_STUDENTS';
// const ADD_STUDENT = 'ADD_STUDENT';
// const REMOVE_STUDENT = 'REMOVE_STUDENT';
// const UPDATE_STUDENT = 'UPDATE_STUDENT';
//
// /* ------------   ACTION CREATORS     ------------------ */
// const initCampuses   = campuses => ({ type: INITIALIZE, campuses });
// export const getCampuses  = campuses => ({ type: GET_CAMPUSES, campuses });
// export const createCampusAction = campus  => ({ type: CREATE_CAMPUS, campus });
// export const removeCampusAction = id => ({ type: REMOVE_CAMPUS, id });
// export const updateCampus = campus  => ({ type: UPDATE_CAMPUS, campus });
//
// // Students
// export const getStudents  = students => ({ type: GET_STUDENTS, students });
//
//
// /* ------------       REDUCER     ------------------ */
//
// function reducer (state = initialState, action) {
//   switch (action.type) {
//
//     case INITIALIZE:
//     return action.campuses;
//
//     case GET_CAMPUSES:
//       return Object.assign({}, state, { campuses: action.campuses });
//
//       case GET_STUDENTS:
//         return Object.assign({}, state, { students: action.students });
//
//     case CREATE_CAMPUS:
//       return [action.campuses, ...action.campuses];
//
//     case REMOVE_CAMPUS:
//       return state.campuses.filter(campus => campus.id !== action.id);
//     //
//     // case UPDATE_CAMPUS:
//     //   return action.campuses.map(campus => (
//     //     action.campus.id === campus.id ? action.campuses : campuses
//     //   ));
//
//     default:
//       return state;
//   }
// }
//
// /* ------------       Thunks     ------------------ */
//
// export function fetchCampuses  () {
//   return function thunk (dispatch) {
//     return axios.get('/api/campuses')
//     .then(res => res.data)
//     .then(campus => {
//       const action = getCampuses(campus);
//       dispatch(action);
//     });
//   }
// }
//
// export function fetchStudents  () {
//   return function thunk (dispatch) {
//     return axios.get('/api/students')
//     .then(res => res.data)
//     .then(student => {
//       const action = getStudents(student);
//       dispatch(action);
//     });
//   }
// }
//
// export const deleteCampus = id => dispatch => {
//     axios.delete(`/api/campuses/${id}`)
//     .then(() => dispatch(removeCampusAction(id)))
//   };
//
// export const addCampus = campus => dispatch => {
//   axios.post('/api/campuses', campus)
//        .then(res => dispatch(createCampusAction(res.data)))
//        .catch(err => console.error(`Creating campus: ${campus} unsuccessful`, err));
// };
//
// /* ------------       export store     ------------------ */
//
// const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware)
// const store = createStore(reducer, middleware);
// export default store;
