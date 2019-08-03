var medicines = require('./medicines').medicines;
var memoryDb={};
var id = 0;

var list = function () {
    if(id==0){
        for(var i=0;i<medicines.length;i++){
            add(medicines[i]);
        }
    }
    return memoryDb;
};

var add = function (item) {
    id = id + 1;
    item.id = id;
    memoryDb[item.id] = item;
};

var getById = function (id) {
    return memoryDb[id];
};

var update = function (item) {
    memoryDb[item.id] = item;
};

var remove = function (id) {
    delete memoryDb[id];
};

exports.list = list;
exports.add = add;
exports.getById = getById;
exports.memoryDb = memoryDb;
exports.remove = remove;
exports.update = update;