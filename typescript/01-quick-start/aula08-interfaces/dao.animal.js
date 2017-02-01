"use strict";
var AnimalDao = (function () {
    function AnimalDao() {
        this.tablename = '';
    }
    AnimalDao.prototype.insert = function (object) {
        console.log('Inserting...');
        object.mover(50);
        return true;
    };
    AnimalDao.prototype.update = function (object) {
        return true;
    };
    AnimalDao.prototype.delete = function (id) {
        return null;
    };
    AnimalDao.prototype.find = function (id) {
        return null;
    };
    AnimalDao.prototype.findAll = function () {
        return null;
    };
    return AnimalDao;
}());
exports.AnimalDao = AnimalDao;
//# sourceMappingURL=dao.animal.js.map