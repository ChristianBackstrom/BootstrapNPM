const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Helt Galet' });
});

router.get('/boot', (req, res, next) => {
  res.render('bootstrap', {});
});

module.exports = router;
