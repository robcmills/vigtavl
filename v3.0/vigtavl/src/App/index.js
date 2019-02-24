import React, { Component } from 'react';

import Router from './Router';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hash: window.location.hash,
    }
  }

  render() {
    return (
      <Router hash={this.state.hash} />
    );
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.handleHashChange)
  }

  handleHashChange = () => {
    this.setState({ hash: window.location.hash });
  }
}

export default App;
