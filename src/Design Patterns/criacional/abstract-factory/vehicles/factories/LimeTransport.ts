import ITransportFactory from "./interfaces/ITransportFactory";
import ILand from "../land/interfaces/ILand";
import IAircraft from "../aerial/interfaces/IAirCraft";
import Drone from "../aerial/Drone";
import Rollerblades from "../land/Rollerblades";

export default class LimeTransport implements ITransportFactory {
    createTransportVehicle(): ILand {
        return new Rollerblades();
     }
     createTransportAirCraft(): IAircraft {
        return new Drone();
    }
}