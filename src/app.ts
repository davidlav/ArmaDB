import '../node_modules/materialize-css/dist/css/materialize.min.css';
import { PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {

	router!:Router;

	configureRouter(config:RouterConfiguration, router:Router) {
		config.title = 'ArmaDB';
		config.map([
			{route: '', moduleId: PLATFORM.moduleName('./components/table-view/table-view')},
			{route: 'veh/:className', name: 'veh', moduleId: PLATFORM.moduleName('./components/item-view/item-view')}, // localhost:8080/#/veh/...
		]);
		this.router = router;
	}

}