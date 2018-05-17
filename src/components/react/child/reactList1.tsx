import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'lodash';

interface State {}

interface Props {
  count?: Number;
}

export class ReactChildComponent1 extends React.Component<Props, State> {
  state: any;
  constructor(props) {
    super(props);
  }

  public render() {
    let card = [];
    _.times(this.props.count, (i) => {
      card.push(<div className="card card-md" key={i}> React component List - {i+1} </div>);
    });
    return(
      <div>
        { card }
      </div>
    );
  }
};