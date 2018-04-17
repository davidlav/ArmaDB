import '../node_modules/materialize-css/dist/css/materialize.min.css';
import {DataApi} from './data-api';
import {autoinject} from 'aurelia-framework';

@autoinject
export class App {

  constructor(private data:DataApi) {
    this.showData();
  }

  async showData() {
    const vehData = await this.data.vehicleData();
    debugger;
  }
}