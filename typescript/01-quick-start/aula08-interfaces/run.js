"use strict";
var dao_animal_1 = require("./dao.animal");
var animal_1 = require("./../aula07-classes/animal");
var dao = new dao_animal_1.AnimalDao();
var animal = new animal_1.Animal('Rex');
dao.insert(animal);
//# sourceMappingURL=run.js.map