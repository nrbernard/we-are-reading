import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import items from '../../lib/data';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <List items={items} />
      </div>
    );
  }
}

export default App;
