import React, { Component } from 'react';

import './app.css';
import Rule from './Rule';
import rules from './rules';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>VigTavl ⚔ v2.1</h1>
          <p>A turn-based strategy game of medieval combat.</p>
          <p>Author: Robert C. Mills</p>
          <p>2 to 4 players | 11+ | 45 - 60 minutes</p>
        </div>
        {this.renderRules()}
      </div>
    );
  }

  renderRules = () => {
    return rules.map((rule, index) => <Rule {...rule} key={index} />);
  }
}

export default App;
