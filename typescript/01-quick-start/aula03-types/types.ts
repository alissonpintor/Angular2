function log(message: string){
    console.log(message);
}

function log2(message: any){ //Defini que pode receber qquer tipo
    console.log(message);
}

let array: Array<string> = ['Ola', 'Teste'];
let array2: [string] = ['Ola', 'Teste'];
let isActive: boolean = true;
let nome: string = 'Alisson'

log('Hello Word typescript');

/*
TIPOS PADRAO
string
number
boolean
arrays
...

*/