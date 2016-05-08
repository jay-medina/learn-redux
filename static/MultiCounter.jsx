import React from 'react';
import Counter from './Counter.js';

export default React.createClass({
  renderCounter() {
    return this.props.values.map((value, index) => <Counter key={index} index={index}
                                        value={value}
                                        increaseCount={this.props.increaseCount}
                                        decreaseCount={this.props.decreaseCount} />);
  },
  render() {
    return (
      <div>
        <div>{this.renderCounter()}</div>
        <div>
          <button onClick={this.props.addCounter}>Add Counter</button>
          <button onClick={this.props.removeCounter}>Remove Counter</button>
        </div>
      </div>
    );
  }
});
