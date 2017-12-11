const router = require('express').Router();
const { Campuses }  = require('../db/models');

module.exports = router;

// GET / api/campuses
router.get('/', function (req, res, next) {
  Campuses.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

router.get('/:campusId', function (req, res, next) {
  Campuses.findById(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next);
});


// PUT /api/campuses/campusId
router.put('/:campusId', function (req, res, next) {
  const campusId = req.params.campusId;

  Campuses.findById(campusId)
    .then(campus => campus.update(req.body))
    .then(res.status(200).send('Updated Campus Information'))
    .catch(next);
});

// POST /api/campus
router.post('/', function (req, res, next) {
  Campuses.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});

// DELETE /api/campus
router.delete('/:campusId', function (req, res, next) {
  const id = req.params.campusId;
  Campuses.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
