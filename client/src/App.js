import React, { Component } from 'react';
import get from 'lodash/get';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelObj: null,
      level: undefined
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('/api/info')
      .then(res => res.json())
      .then(levelObj => this.setState({ levelObj }));
  }

  handleChange(e) {
    this.setState({ level: e.target.value });
  }

  getItemLevel = () => {

    if (this.state.level >= 265) {
      return 'Legendary/BFA gear';
    } else if (this.state.level >= 240) {
      return 'Mythic gear';
    } else if (this.state.level >= 225) {
      return 'Heroic gear';
    } else if (this.state.level >= 210) {
      return 'Normal gear';
    } else {
      return 'LFR or previous tier';
    }
  };

  render() {
    return (
      <div>
      <h1 className="App-header">BFA Item Level Converter</h1>
        <div className="background columns">
          <div className="container column">
            New iLvL<br />
            <input type="number" value={this.state.value} onChange={this.handleChange} name="newLevel" />
          </div>
          <div className="container column">
            Old level<br />
            <p>{this.state.level && get(this.state.levelObj, this.state.level)}</p>
            <p>{get(this.state.levelObj, this.state.level) ? this.getItemLevel() : 'Enter a valid item level to begin.'}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
