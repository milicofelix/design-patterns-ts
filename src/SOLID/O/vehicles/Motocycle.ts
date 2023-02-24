import IVehicleMotocycle from "./IVehicleMotocycle";

export default class MotoCycle implements IVehicleMotocycle {
  constructor(
    color: string,
    year: number,
    engine: number
  ) {
    this.configure(color, year, engine);
  }
  startVehicle(): void {
    console.log("Ligando o veículo.");
  }
  configure(color: string, year: number, engine: number): void {
    console.log(`Criando uma moto: ${color} ${year} ${engine} celindradas`);
    this.startVehicle();
  }
}