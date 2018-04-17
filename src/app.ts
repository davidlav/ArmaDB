import {VehicleProxy, WeaponsEntity2Proxy} from './models/proxies';

export class App {
  message = 'Hello World!';

  constructor() {
    this.getData();
  }

  async getData() {
    const resp = await fetch('data/vehicles.json');

		const vehicleProxy:VehicleProxy = VehicleProxy.Create(await resp.json());
    const gun2:WeaponsEntity2Proxy = vehicleProxy.vehicles.Motorcycle[0].weapons[0];
    // gun2.position = 'woopy!'; // Can't overwrite, readonly

    debugger;
  }

}