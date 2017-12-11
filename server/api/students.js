const router = require('express').Router();
const { Students }  = require('../db/models');

module.exports = router;

// GET /api/students/
router.get('/', function (req, res, next) {
  Students.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

// GET /api/students/:studentId
router.get('/:studentId', function (req, res, next) {
  Students.findById(req.params.studentId)
    .then(student => res.json(student))
    .catch(next);
});


// POST /api/students
router.post('/', function (req, res, next) {
  Students.create(req.body)
    .then(student => res.json(student))
    .catch(next);
});

// PUT /api/students/studentId
router.put('/:studentId', function (req, res, next) {
  const studentId = req.params.studentId;

  Students.findById(studentId)
    .then(student => student.update(req.body))
    .then(res.status(200).send('Updated Student Information'))
    .catch(next);
});


// DELETE /api/student
router.delete('/:studentId', function (req, res, next) {
  const id = req.params.studentId;
  Students.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
