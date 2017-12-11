'use strict';

var Sequelize = require('sequelize');
const db = require('../index');


// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// Exporting all models from here seems like a good idea!

const Students = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    isEmail: true
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      max: 4.0,
      min: 0.0,
    }
  }
}, {
  getterMethods: {
    fullname: function(){
      return this.firstName + ' ' + this.lastName;
    }
  }
});

const Campuses = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://isc.uw.edu/wp-content/uploads/2017/06/cropped-favicon-flat-180x180.png'
  },
  description: {
    type: Sequelize.TEXT
  }
});


Campuses.hasMany(Students, {as: 'student'});


module.exports = { db, Students, Campuses };
