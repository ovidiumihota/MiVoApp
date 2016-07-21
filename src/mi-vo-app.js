import {Component, View} from 'angular2/core';

@Component({
  selector: 'mi-vo-app'
})

@View({
  templateUrl: 'mi-vo-app.html'
})

export class MiVoApp {

  constructor() {
    console.info('MiVoApp Component Mounted Successfully');
  }

}
