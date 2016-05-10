import React from 'react';

const Artist = React.createClass({
  render() {
    return <span>Artist name: {this.props.name}</span>;
  }
});

export default Artist;
