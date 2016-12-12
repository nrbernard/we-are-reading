import React, { Component } from 'react';
import List from './List';

export default class Intex extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };
  }

  componentDidMount() {
    fetch('/api/bookmarks', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(items => this.setState({ items }));
  }

  render() {
    return <List items={this.state.items} />
  }
}
