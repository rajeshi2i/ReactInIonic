import { Component } from '@angular/core';

/**
 * Generated class for the TestAngularComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'test-angular',
  templateUrl: 'test-angular.html'
})
export class TestAngularComponent {

  list: Array<object> = [];
  text: string;

  constructor() {
    console.log('Hello TestAngularComponent Component');
    for (let i=0; i<10000; i++) {
      this.list.push({
        list: i
      });
    }
    this.text = 'Angular Component';
  }

}
