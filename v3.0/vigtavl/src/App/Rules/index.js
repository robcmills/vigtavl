import React, { Component } from 'react';
import withStyles from 'react-jss'

import Rule from '../Rule';
import rules from './rules';
import styles from './styles'

class Rules extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>VigTavl ⚔ v3.0</h1>
          <p>A turn-based strategy game of medieval combat.</p>
          <p>Author: <a href="http://robcmills.net" target="_blank">robcmills</a></p>
          <p>2 to 3 players | 11+ | 45 - 60 minutes</p>
        </div>
        {this.renderRules()}
      </div>
    );
  }

  renderRules = () => {
    return rules.map((rule, index) => <Rule {...rule} key={index} />);
  }
}

export default withStyles(styles)(Rules);
