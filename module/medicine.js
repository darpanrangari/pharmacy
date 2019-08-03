var util = require('util');
var db = require('./medicineMemoryDB');

exports.viewAll = function (req, res) {
    res.render('display/index', { medicines: db.list()});
};

exports.create = function (req, res) {
    res.render('create/index');
};

exports.edit = function (req, res) {
    var medicine = db.getById(req.params.id);
    res.render('edit/index', {medicine: medicine})
}

exports.save = function (req, res) {
    db.add({name: req.body.name, manufacturer: req.body.manufacturer,batchNo: req.body.batchNo,expirationDt:req.body.expirationDt,price:req.body.price,type:req.body.type});
    res.redirect('/pharmacy');
};

exports.update = function (req, res) {
    db.update({id: req.body.id, name: req.body.name, manufacturer: req.body.manufacturer,batchNo: req.body.batchNo,expirationDt:req.body.expirationDt,price:req.body.price,type:req.body.type});
    res.redirect('/pharmacy');
};


exports.remove = function (req, res) {
    for(var i=0;i<req.body.id.length;i++) {
        db.remove(req.body.id[i]);
    }
    res.redirect('/pharmacy');
};