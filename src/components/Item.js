import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const item = this.props.item;
    const image = item.thumbnail;

    return (
      <li className="media">
        <a className="media-left media-middle" href={item.url}>
          <img className="media-object" src={image} alt="Preview" width="128" />
        </a>
        <div className="media-body">
          <h4 className="media-heading">
            <a href={item.url}>{item.title}</a>
          </h4>

          <p>{item.description}</p>
        </div>
      </li>
    );
  }
}

Item.propTypes = {
  item: React.PropTypes.object
};
