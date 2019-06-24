import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import {
  StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy,
  VehicleProxy
} from './models/proxies';

@autoinject
export class DataApi {
	private vehicles:VehicleProxy;

	constructor(private http:HttpClient) {
		this.http.configure(config =>
			config.useStandardConfiguration().withBaseUrl('data/'));
	}

	async vehicleData():Promise<VehicleProxy> {
		if(this.vehicles)
			return this.vehicles;
		else {
			try {
				const resp:Response = await this.http.fetch('OLD/vehicles.json');
				const data:JSON = await resp.json();
				this.vehicles = VehicleProxy.Create(data);
			} catch (err) {
				console.error("Error creating vehicle data", err);
			}
			return this.vehicles;
		}
	}

	async getVehicle(className:string):Promise<StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy> {
		const veh = await this.vehicleData();
		return veh.vehicles.Car.find(item => item.className === className);
	}

}