import { Component, Input } from '@angular/core';

import * as _ from 'lodash';

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
  _count: Number = 0;

  constructor() {
    this.text = 'Angular Component';
  }

  @Input()
  set count(count: Number) {
    this._count = count || 0;
    this.iterateList(this._count);
  }

  iterateList(count: Number) {
    this.list = [];
    _.times(count, (i) => {
      this.list.push({
        list: i+1
      });
    });
  }

}
