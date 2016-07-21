import {Component, View} from 'angular2/core';

@Component({
    selector: 'mivo',
    template: `
  <div className="mivo-main">
   <div class="header">
     <h1>Header</h1>
   </div>
   <div class="mivo-content">
    <h2>Content</h2>
   </div>
  </div>
  `
})

@View({
    templateUrl: 'mi-vo-app.html'
})

export class MiVoApp {

    constructor() {
        console.info('MiVoApp Component Mounted Successfully');
    }

}
