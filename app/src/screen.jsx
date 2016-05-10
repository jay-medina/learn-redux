import React from 'react';

const Screen = React.createClass({
  render() {
    return (
      <div className='screenContainer'>
        {this.props.value}
      </div>
    );
  }
});

export default Screen;
