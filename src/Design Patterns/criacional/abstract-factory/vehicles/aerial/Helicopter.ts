import IAircraft from "./interfaces/IAirCraft";

export default class Helicopter implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Iniciando a decolagem...");
    }
    getCargo(): void {
        console.log("Passageiros ok, ligando hélices...");
    }
    checkWind(): void {
        console.log("Ventos a 25km, Sudeste, status ok!");
    }
    
}