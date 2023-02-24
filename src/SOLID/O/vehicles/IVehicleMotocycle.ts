export default interface IVehicleMotocycle {
  startVehicle(): void;
  configure(
    color: string,
    year: number,
    engine: number
  ): void;
}