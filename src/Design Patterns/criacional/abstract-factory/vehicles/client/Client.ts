import IAircraft from "../aerial/interfaces/IAirCraft";
import ITransportFactory from "../factories/interfaces/ITransportFactory";
import ILand from "../land/interfaces/ILand";

export default class Client {
    private vehicle: ILand;
    private aircraft: IAircraft;

    constructor(factory: ITransportFactory) {
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAirCraft();
    }
    startRoute(): void {
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }
}