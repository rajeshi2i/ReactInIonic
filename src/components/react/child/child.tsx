import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactChildComponent } from './reactList';
import { ReactChildComponent1 } from './reactList1';

export class ReactChildComponentView {

  static initialize(count, component) {
    switch(component.name) {
      case 'react-list':
        ReactDOM.render(<ReactChildComponent count={count}/>, this.getReactRenderDom(component.id));
        break;
      default:
        ReactDOM.render(<ReactChildComponent1 count={count}/>, this.getReactRenderDom(component.id));
        break;
    }
  }

  static getReactRenderDom(id) {
    return document.getElementById(id);
  }
}
