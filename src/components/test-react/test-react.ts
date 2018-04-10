import { Component, OnInit, Injector } from '@angular/core';
import { ReactChildComponentView } from '../react/child/child';

/**
 * Generated class for the TestReactComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'test-react',
  templateUrl: 'test-react.html'
})
export class TestReactComponent implements OnInit{

  text: string;

  constructor(public injector: Injector) {
    console.log('Hello TestReactComponent Component');
    this.text = 'React Component Container';
  }

  public ngOnInit() {
    ReactChildComponentView.initialize();
  }

}
