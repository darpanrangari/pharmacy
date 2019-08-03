
var medicine = require('../module/medicine');

var express = require('express');

var router = express.Router()

router.get('/', medicine.viewAll);
router.get('/create', medicine.create);
router.post('/create', medicine.save);
router.get('/edit/:id', medicine.edit);
router.post('/update', medicine.update);
router.post('/delete', medicine.remove);

module.exports = router;