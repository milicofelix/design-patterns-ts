import IAircraft from "./interfaces/IAirCraft";

export default class Drone implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Iniciando a decolagem...");
    }
    getCargo(): void {
        console.log("Bateria ok, controles ok, ligando hélices...");
    }
    checkWind(): void {
        console.log("Ventos a 1km, Leste, status ok!");
    }
    
}