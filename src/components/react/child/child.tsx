import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface State {}

class ReactChildComponent extends React.Component<State> {

  constructor(props) {
    super(props);
  }

  public render() {
    var lis = [];

    for (var i=0; i<10; i++) {
        lis.push(<li>{i + 1}</li>);
    }
    return(
      <div>
        <h1>React Component</h1>
        <ul>{lis}</ul>
      </div>
    );
  }
};

export class ReactChildComponentView {

  static initialize() {
    ReactDOM.render(<ReactChildComponent/>, document.getElementById('react-component-container'));
  }
}
