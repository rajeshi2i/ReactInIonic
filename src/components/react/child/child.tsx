import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'lodash';

interface State {}

interface Props {
  count?: Number;
}

class ReactChildComponent extends React.Component<Props, State> {
  state: any;
  constructor(props) {
    super(props);
  }

  public render() {
    let card = [];
    _.times(this.props.count, (i) => {
      card.push(<li key={i}> React component List - {i+1} </li>);
    });
    return(
      <ul>
        { card }
      </ul>
    );
  }
};

export class ReactChildComponentView {

  static initialize(count) {
    ReactDOM.render(<ReactChildComponent count={count}/>, this.getReactRenderDom());
  }

  static getReactRenderDom() {
    return document.getElementById('react-component-container');
  }
}
