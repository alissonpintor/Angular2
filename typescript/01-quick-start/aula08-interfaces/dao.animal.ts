import { DaoInterface } from './dao.interfaces'
import { Animal } from './../aula07-classes/animal'

export class AnimalDao implements DaoInterface {

    tablename: string = '';

    insert(object: Animal): boolean {
        console.log('Inserting...');
         object.mover(50);
        return true;
    }

    update(object: Animal): boolean {
        return true;
    }

    delete(id: number): Animal {
        return null;
    }

    find(id: number): Animal {
        return null;
    }

    findAll(): [Animal] {
        return null;
    }
}