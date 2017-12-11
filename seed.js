//doesnt work :(

var Promise = require('bluebird');
var {
  db,
  Campuses,
  Students,
} = require('../models');

var data = {
  Campuses: [
    {name: "Uncle Gregs School Of Learning"},
    {name: "The School Of Planet Earth"},
    {name: "Hogwarts"},
    {name: "Harry Herpson High"},
    {name: "School of Good Learnin'"},

  ],
  Students: [
    {firstName: "Alinea", lastName: "maigc", gpa: 3.2, campusId: 1},
    {firstName: "Nip", lastName: "haplin", gpa: 2.9, campusId: 2},
    {firstName: "Bumblefold", lastName: "guseman", gpa: 3.8, campusId: 2},
    {firstName: "General", lastName: "Montana", gpa: 1.2, campusId: 3},
  ],

};

db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
    });
  });
})
.then(function () {
  console.log("Finished inserting data (press ctrl-c to exit)");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});
