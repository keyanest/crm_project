import React, {Component} from 'react';
import Menu from './Menu';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
}


export default App;
