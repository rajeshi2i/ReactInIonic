import { Component, OnInit, Injector, Input } from '@angular/core';
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
  _count: Number = 0;

  constructor(public injector: Injector) {
    this.text = 'React Component Container';
  }

  @Input()
  set count(count: Number) {
    this._count = count || 0;
    this.iterateList(this._count);
  }

  public ngOnInit(){
    if(this._count) {
      this.iterateList(this._count);
    }
  }

  private iterateList(count: Number) {
    if(count) {
      ReactChildComponentView.initialize(count);
    }
  }

}
