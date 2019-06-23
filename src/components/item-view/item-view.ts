import { autoinject } from 'aurelia-framework';
import { DataApi } from '../../data-api';
import { StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy } from '../../models/proxies';

@autoinject
export class ItemView {

  veh:StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy;

	constructor(private data:DataApi) {
	}

  async activate(params, routeConfig) {
    this.veh = await this.data.getVehicle(params.className);
    routeConfig.navModel.setTitle = this.veh.dispName; // TODO Doesn't work
    console.log(this.veh);
  }

}