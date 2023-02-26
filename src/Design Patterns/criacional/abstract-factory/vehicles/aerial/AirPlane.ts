import IAircraft from "./interfaces/IAirCraft";

export default class AirPlane implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Iniciando a decolagem...");
    }
    getCargo(): void {
        console.log("Passageiros embarcados, estamos prontos!");
    }
    checkWind(): void {
        console.log("Ventos a 25km, status ok!");
    }
    
}