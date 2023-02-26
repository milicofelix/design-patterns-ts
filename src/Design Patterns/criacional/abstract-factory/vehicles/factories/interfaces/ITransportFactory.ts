import IAircraft from "../../aerial/interfaces/IAirCraft";
import ILand from "../../land/interfaces/ILand";

export default interface ITransportFactory {
    createTransportVehicle(): ILand;
    createTransportAirCraft(): IAircraft;
}