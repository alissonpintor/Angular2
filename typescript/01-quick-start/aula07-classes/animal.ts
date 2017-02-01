export class Animal {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public mover(distanciaPorMetros: number): void {
        console.log(`${this.nome} moveu ${distanciaPorMetros}m.`)
    }
}