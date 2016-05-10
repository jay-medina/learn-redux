
import React from 'react';
import ReactDOM from 'react-dom';
import Artist from '../src/artist';
var TestUtils = require('react-addons-test-utils');

describe('Artist', function(){
  var component;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<Artist name="Run the jewels" />);
  });

  it("should display the artist name", () => {
    const node = ReactDOM.findDOMNode(component);

    expect(node.textContent).toMatch(/Artist name: Run the jewels/);
  });
})
