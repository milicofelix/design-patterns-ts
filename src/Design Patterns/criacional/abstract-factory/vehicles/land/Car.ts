import ILand from "./interfaces/ILand";

export default class Car implements ILand {
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando o trajeto...");
    }
    getCargo(): void {
        console.log("Pegamos os passageiros, estamos prontos!");
    }
    
}