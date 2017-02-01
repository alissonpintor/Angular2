"use strict";
var Animal = (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.mover = function (distanciaPorMetros) {
        console.log(this.nome + " moveu " + distanciaPorMetros + "m.");
    };
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map