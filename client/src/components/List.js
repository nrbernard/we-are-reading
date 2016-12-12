import React, { Component } from 'react';
import Item from './Item';

export default class List extends Component {
  render() {
    const items = this.props.items.map(item => <Item key={item._id} item={item} />)

    return (
      <ul className="media-list">
        {items}
      </ul>
    );
  }
}

List.propTypes = {
  items: React.PropTypes.array
};
