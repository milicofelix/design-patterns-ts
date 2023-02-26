import ITransportFactory from "./interfaces/ITransportFactory";
import ILand from "../land/interfaces/ILand";
import IAircraft from "../aerial/interfaces/IAirCraft";
import Car from "../land/Car";
import AirPlane from "../aerial/AirPlane";

export default class UberTransport implements ITransportFactory {
    createTransportVehicle(): ILand {
        return new Car();
    }
    createTransportAirCraft(): IAircraft {
        return new AirPlane();
    }

}