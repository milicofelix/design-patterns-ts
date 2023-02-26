import ITransportFactory from "./interfaces/ITransportFactory";
import ILand from "../land/interfaces/ILand";
import IAircraft from "../aerial/interfaces/IAirCraft";
import Motocycle from "../land/Motorcycle";
import Helicopter from "../aerial/Helicopter";

export default class NineNineTransport implements ITransportFactory {
    createTransportVehicle(): ILand {
       return new Motocycle();
    }
    createTransportAirCraft(): IAircraft {
       return new Helicopter();
    }

}