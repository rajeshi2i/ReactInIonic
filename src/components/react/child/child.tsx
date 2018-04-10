import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface State {}

class ReactChildComponent extends React.Component<State> {
  state: any;
  constructor(props) {
    super(props);
    let lis = [];
    for (var i=0; i<10000; i++) {
      lis.push({
        list: i
      });
    }
    this.state = {
      lis
    };
  }

  public render() {
    const {lis} = this.state;
    const list = lis.map((i) =>
      <li key={i.list}>
        React component List - {i.list}
      </li>
    );
    return(
      <div>
        <h1>React Component</h1>
        <ul>
          { list }
        </ul>
      </div>
    );
  }
};

export class ReactChildComponentView {

  static initialize() {
    ReactDOM.render(<ReactChildComponent/>, document.getElementById('react-component-container'));
  }
}
