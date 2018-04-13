export class App {
  message = 'Hello World!';
  data;

  constructor() {
    this.getData();
  }

  async getData() {
    const resp = await fetch('data/vehicles.json');
    this.data = await resp.json();
    console.log(this.data);
  }

}