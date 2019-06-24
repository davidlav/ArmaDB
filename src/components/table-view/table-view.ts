import { DataApi } from '../../data-api';
import { autoinject } from 'aurelia-framework';
import {
  StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy,
  VehicleProxy
} from '../../models/proxies';
import { Router } from 'aurelia-router';

@autoinject
export class TableView {

  tableData:StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy[] = [];

	constructor(private data:DataApi, private router:Router) {}

	async activate() {
		const vehData:VehicleProxy = await this.data.vehicleData();
    const cars = vehData.vehicles.Car;
    this.tableData = cars!.sort(() => 0.5 - Math.random()).slice(0, 12);
	}

	rowClicked({ className }:StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy) {
	  this.router.navigateToRoute('veh', { className })
  }

}