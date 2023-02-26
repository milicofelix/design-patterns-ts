import ILand from "./interfaces/ILand";

export default class Rollerblades implements ILand {
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando o trajeto pela ciclovia...");
    }
    getCargo(): void {
        console.log("Pegamos a encomenda!");
    }
}