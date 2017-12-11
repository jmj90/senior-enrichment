'use strict';

const { db, Students, Campuses } = require('./server/db/models');
const app = require('./server');
const PORT = 1234;

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
.then(() => {
  console.log('db synced in main.js')
  app.listen(PORT, () => console.log(`listening on port ${PORT}...`))
});
