import "reflect-metadata"; // Required by class-transformer
import {plainToClass} from "class-transformer";
import {MotorcycleEntity} from './models/Vehicle';

export class App {
  message = 'Hello World!';

  constructor() {
    this.getData();
  }

  async getData() {
    let resp;
    let data;

    try {
      resp = await fetch('data/vehicles.json');
    } catch (e) {
      console.error("JSON fetching error\n", e);
		}
    try {
      data = await resp.json();
    } catch (e) {
      console.error("JSON parsing error\n", e);
		}

		const realMotorcycles:MotorcycleEntity[] = plainToClass(MotorcycleEntity, data.vehicles.Motorcycle);
    console.log(realMotorcycles[0].numberOfWeapons());
    debugger;
  }

}