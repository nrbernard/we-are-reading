import React, { Component } from 'react';

export default class NewBookmark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: this.props.comment,
      owner: this.props.owner,
      type: this.props.type,
      url: this.props.url
    };

    this.handleURLChange = e => this.setState({url: e.target.value});
    this.handleCommentChange = e => this.setState({comment: e.target.value});
    this.handleOwnerChange = e => this.setState({owner: e.target.value});
    this.handleTypeChange = e => this.setState({type: e.target.value});
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    alert(JSON.stringify(this.state));
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="owner">Submitter</label>
          <select
            value={this.state.owner}
            onChange={this.handleOwnerChange}
            className="form-control"
            id="owner"
          >
            <option value="becca">Becca</option>
            <option value="nick">Nick</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="url">URL</label>
          <input
            type="text"
            className="form-control"
            id="url"
            placeholder="http://www.nytimes.com/2016/12/10/opinion/sunday/im-prejudiced-he-said-then-we-kept-talking.html"
            value={this.state.url}
            onChange={this.handleURLChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            value={this.state.type}
            onChange={this.handleTypeChange}
            className="form-control"
            id="owner"
          >
            <option value="article">Article</option>
            <option value="video">Video</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            className="form-control"
            id="comment"
            placeholder="Super interesting!"
            value={this.state.comment}
            onChange={this.handleCommentChange}
          />
        </div>

        <input
          type="submit"
          className="btn btn-primary"
          value="Submit"
        />
      </form>
    );
  }
}

NewBookmark.defaultProps = {
  url: '',
  type: 'article',
  owner: 'becca',
  comment: ''
}
