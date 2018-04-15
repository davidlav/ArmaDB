import {Vehicle} from './models/interfaces';
import {VehicleProxy, WeaponsEntity2Proxy} from './models/proxies';

export class App {
  message = 'Hello World!';

  constructor() {
    this.getData();
  }

  async getData() {
    const resp = await fetch('data/vehicles.json');
    const vehicleIJSON:Vehicle = await resp.json();
    const vehicleProxy:VehicleProxy = VehicleProxy.Create(vehicleIJSON);
    const gun:WeaponsEntity2Proxy = vehicleProxy.vehicles.Motorcycle[0].weapons[0];
    debugger;
  }

}