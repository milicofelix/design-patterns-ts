export default class vehicle {
  public constructor(
    private color: string,
    private year: number,
    private engine: number,
    private seats: number,
    private doors: number
  ) {}

  public car(): void {
    console.log(
      `Criando um carro: ${this.color} ${this.year} ${this.engine} potência ${this.doors} portas com ${this.seats} assentos`
    );
    this.startVehicle();
  }

  public motorCycle(): void {
    console.log(
      `Criando uma moto: ${this.color} ${this.year} ${this.engine} cilindradas`
    );
    this.startVehicle();
  }

  public startVehicle() {
    console.log("Ligando o veículo.");
  }
}