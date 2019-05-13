const router = require('express').Router();
const Candy = require('../db/models/Candy');

router.get('/', async (req, res, next) => {
  try {
    const found = await Candy.findAll();
    res.json(found);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
