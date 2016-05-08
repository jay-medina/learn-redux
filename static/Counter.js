import React from 'react';

const Counter = React.createClass({
  increaseCount() {
    this.props.increaseCount(this.props.index);
  },
  decreaseCount() {
    this.props.decreaseCount(this.props.index);
  },
  render(){
    return (
      <div>
        <div style={{'fontSize': '48px'}}>{this.props.value}</div>
        <div>
          <button onClick={this.increaseCount}>+</button>
          <button onClick={this.decreaseCount}>-</button>
        </div>
      </div>
    );
  }
});

export default Counter;
