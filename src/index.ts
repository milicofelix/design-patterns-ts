import TypeVehicle from "./TypeVehicle";
import Vehicle from "./SOLID/O/vehicles/Vehicle";
import Motocycle from "./SOLID/O/vehicles/Motocycle";
import Car from "./SOLID/O/vehicles/Car";
import Client from "./SOLID/S/utils/Client";
import Notify from "./SOLID/S/utils/Notify";


const client = new Client();
const notify = new Notify(client);

console.log(client, notify);

const typeVehicle = TypeVehicle.CAR;
let vehicle;

if (typeVehicle === TypeVehicle.CAR) {
    vehicle = new Car("Branco", 2019, 2.0, 4, 4);
    //vehicle = new Vehicle('Branco',2019,2.0,5,4);
} else if (typeVehicle === TypeVehicle.MOTORCYCLE) {
    vehicle = new Motocycle("Preto", 2022, 250);
    //vehicle = new Vehicle('Vermelho',2023,1000,2,0);
}
