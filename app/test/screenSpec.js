import React from 'react';
import ReactDOM from 'react-dom';
import Screen from '../src/screen';
import TestUtils from 'react-addons-test-utils';

describe('Screen', function(){
  var component;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<Screen value="0" />);
  });

  it("should display the value", () => {
    const node = ReactDOM.findDOMNode(component);

    expect(node.textContent).toMatch(/0/);
  });
});
