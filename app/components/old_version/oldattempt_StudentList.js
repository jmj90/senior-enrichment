// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { NavLink } from 'react-router-dom'
//
// function StudentList (props) {
//   const { students, campuses } = props
//
//
//   const getCampus = (student) => {
//       var studentCampusArr = campuses.filter(school => school.id === student.campusId)
//       return studentCampusArr[0];
//   };
//
//     return (
//       <div className="studentDisplay">
//           <div className="pageTitle">
//             <h3>Current Students</h3>
//           </div>
//           <div className="studentList">
//         {
//           campuses && students.map(student => {
//             return (
//               <div className="studentContainer" key={student.id}>
//                 <NavLink to={`/students/${student.id}`} className="studentNameLink">
//                   {student.fullname}
//                   </NavLink>
//                 <div className="gpaBox"> GPA: {student.gpa} </div>
//                 <h5> Campus:
//                   { student.campusId &&
//                     <NavLink to={`/campuses/${getCampus(student).id}`}>
//                       {getCampus(student).name}
//                     </NavLink>
//                   }
//                   { !student.campusId &&
//                     <div>No School </div> }
//                 </h5>
//                 <button>Remove</button>
//               </div>
//             )
//           })
//         }
//       </div>
//         <form id="addStudentForm" >
//           <h1> Register New Student </h1>
//             <div>
//               <label> Student Name: </label>
//                 <div>
//                   <input id="nameFormValue" placeholder="Name" />
//                 </div>
//                 <label> Email: </label>
//                 <div>
//                   <input id="emailFormValue" placeholder="Email" />
//                 </div>
//                 <label> GPA: </label>
//                 <div>
//                   <input id="gpaFormValue" placeholder="0.0 - 4.0" />
//                 </div>
//                 <label> Campus To Attend: </label>
//                 <div>
//                   <select id="campusFormValue">
//                     { campuses.map(campus => {
//                       return (
//                         <option key={campus.id} value = {campus.id}>{campus.name}</option>
//                       )
//                     })}
//                   </select>
//                 </div>
//               </div>
//               <br/>
//               <button type="submit" id="submitButton"> Add Student </button>
//             </form>
//
//       </div>
//     );
//   }
//
//   const mapStateToProps = function (state) {
//     return {
//       students: state.students,
//       campuses: state.campuses
//     }
//   }
//
// const CampusListContainer = connect(mapStateToProps)(StudentList)
// export default CampusListContainer
