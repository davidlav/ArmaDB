import { DataApi } from '../../data-api';
import { autoinject } from 'aurelia-framework';
import {
  StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy,
  VehicleProxy
} from '../../models/proxies';

@autoinject
export class TableView {

  tableData:StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy[] = [];

	constructor(private data:DataApi) {
		this.showData();
	}

	async showData() {
		const vehData:VehicleProxy = await this.data.vehicleData();
    const cars = vehData.vehicles.Car;
    this.tableData = cars!.sort(() => 0.5 - Math.random()).slice(0, 12);
	}

	activate() {
		console.log('tabl view activated');
	}

}