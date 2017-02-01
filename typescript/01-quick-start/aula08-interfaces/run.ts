import {DaoInterface} from './dao.interfaces';
import {AnimalDao} from './dao.animal';
import {Animal} from './../aula07-classes/animal';

let dao: DaoInterface = new AnimalDao();
let animal: Animal = new Animal('Rex');
dao.insert(animal);