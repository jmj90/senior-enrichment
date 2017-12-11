// import React from 'react';
// import { connect } from 'react-redux'
// import { NavLink } from 'react-router-dom'
// import { deleteCampus, addCampus } from '../store'
//
//
// function CampusList (props) {
//
//   const { campuses } = props
//
//
//   return (
//     <div className="campusDisplay">
//       <div className="pageTitle">
//         <h3>Campuses</h3>
//       </div>
//       {
//         campuses.map(campus => {
//           return (
//               <div className="campusItem" key={campus.id}>
//                 <NavLink to={`/campuses/${campus.id}`}>
//                 <img src={campus.imageUrl} />
//                 <div id="campusName">
//                   {campus.name}
//                 </div>
//               </NavLink>
//               <button onClick={deleteCampus(campus.id)}>Remove</button>
//             </div>
//           );
//         })
//       }
//       <form id="addCampusForm" onSubmit={addCampus} >
//         <h1> Register New Campus </h1>
//           <div>
//             <label> Campus Name: </label>
//               <div>
//                 <input id="campusNameFormValue" placeholder="Campus Name" />
//               </div>
//               <label> Image Url: </label>
//               <div>
//                 <input id="imageFormValue" placeholder="http://..." />
//               </div>
//               <label> Description: </label>
//               <div>
//                 <textarea id="descriptionFormValue" placeholder="Please tell us about your campus" />
//               </div>
//             </div>
//             <br/>
//             <button type="submit" id="submitButton"> Add Campus </button>
//           </form>
//
//     </div>
//   );
// }
//
//
//
//   const mapStateToProps = function (state) {
//     return {
//       campuses: state.campuses
//     }
//   }
//
//   const mapDispatchToProps = {
//     deleteCampus
//   };
//
// const CampusListContainer = connect(mapStateToProps, mapDispatchToProps)(CampusList)
// export default CampusListContainer
