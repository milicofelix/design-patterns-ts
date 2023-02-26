import IVehicle from "./interfaces/IVehicle";

export default class Bike implements IVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando a rota no pedal...");
    }
    getCargo(): void {
        console.log("Pegamos a encomenda, bora lá!");
    }
    
}