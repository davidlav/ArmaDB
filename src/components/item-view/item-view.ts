import { autoinject } from 'aurelia-framework';
import { DataApi } from '../../data-api';
import { StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy } from '../../models/proxies';
import { RouteConfig } from 'aurelia-router';

@autoinject
export class ItemView {

  veh!:StaticWeaponEntityOrCarEntityOrTankEntityOrShipFEntityOrPlaneEntityProxy;

	constructor(private data:DataApi) {}

  async activate(params:{ className:string }, routeConfig:RouteConfig) {
    this.veh = await this.data.getVehicle(params.className);
    routeConfig.navModel!.setTitle(this.veh.dispName);
    console.log(this.veh);
  }

}