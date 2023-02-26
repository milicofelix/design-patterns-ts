import BikeTransport from "./Design Patterns/criacional/transport/BikeTransport";
import CarTransport from "./Design Patterns/criacional/transport/CarTransport";
import MotorcycleTransport from "./Design Patterns/criacional/transport/MotorcycleTransport";
import Transport from "./Design Patterns/criacional/transport/Transport";
import Car from "./SOLID/O/vehicles/Car";
import Motocycle from "./SOLID/O/vehicles/Motocycle";
import Vehicle from "./SOLID/O/vehicles/Vehicle";
import Client from "./SOLID/S/utils/Client";
import Notify from "./SOLID/S/utils/Notify";
import TypeVehicle from "./TypeVehicle";
//declare var process;
const process = require('process');
/* const typeVehicle = TypeVehicle.CAR;
let vehicle;

const client = new Client
const notify = new Notify(client);
console.log('Single Responsibility Principle - SRP');
console.log(client, notify);

console.log('Open Closed Principle - OCP');

if (typeVehicle === TypeVehicle.CAR) {
    vehicle = new Car("Branco", 2019, 2.0, 4, 4);
    //vehicle = new Vehicle('Branco',2019,2.0,5,4);
} else if (typeVehicle === TypeVehicle.MOTORCYCLE) {
    vehicle = new Motocycle("Preto", 2022, 250);
    //vehicle = new Vehicle('Vermelho',2023,1000,2,0);
}
 */
let transport: Transport;

if(process.argv[2] == "--uber") {
    transport = new CarTransport();
} else if(process.argv[2] == "--moto") {
    transport = new MotorcycleTransport();
} else if(process.argv[2] == "--eat") {
    transport = new BikeTransport();
} else {
    console.error('Selectione um tipo valido de entrega!');
}

if(transport){
    transport.startTransport();
} 


/* const process = require('process');
  
// Printing process.argv property value
var args = process.argv;
  
console.log("number of arguments is "+args.include);
  
args.forEach((val, index) => {
    console.log(`${index}: ${val}`);
}); */