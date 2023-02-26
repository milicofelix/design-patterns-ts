import IVehicle from "./interfaces/IVehicle";

export default class Car implements IVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando a rota...");
    }
    getCargo(): void {
        console.log("Pegamos o(s) passageiro(s), estamos prontos!");
    }
    
}