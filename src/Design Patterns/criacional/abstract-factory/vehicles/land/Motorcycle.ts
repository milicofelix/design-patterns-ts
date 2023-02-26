import ILand from "./interfaces/ILand";

export default class Motocycle implements ILand {
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando a entrega...");
    }
    getCargo(): void {
        console.log("Pegamos a encomenda!");
    }
    
}