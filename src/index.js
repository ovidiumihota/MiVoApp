import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {MiVoApp} from 'mi-vo-app';

@Component({
  selector: 'main'
})

@View({
  directives: [MiVoApp],
  template: `
    <mi-vo-app></mi-vo-app>
  `
})

class Main {

}

bootstrap(Main);
