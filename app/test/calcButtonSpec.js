
import React from 'react';
import ReactDOM from 'react-dom';
import {CalcButton, ACButton, OperatorBtn} from '../src/calcButton';
var TestUtils = require('react-addons-test-utils');

describe('CalcButton', function(){
  let component;
  let node;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<CalcButton>Hello</CalcButton>);
    node = ReactDOM.findDOMNode(component);
  });

  describe("by default", () => {
    it("should display text as button content", () => {
      expect(node.textContent).toMatch(/Hello/);
    });

    it("should have calc-btn class attribute by default", () => {
      expect(node.className).toMatch(/calc-btn/);
    });
  });

  it('should allow custom classnames to be added', () => {
    component = TestUtils.renderIntoDocument(<CalcButton className="myButton">Hello</CalcButton>);
    node = ReactDOM.findDOMNode(component);

    expect(node.className).toMatch('myButton');
  });

  describe("when clicked", () => {
    it('should make a call to update the screen', () => {
      const props = { updateScreen: () => {}};
      spyOn(props, 'updateScreen');
      component = TestUtils.renderIntoDocument(<CalcButton {...props} >Hello</CalcButton>);

      node = ReactDOM.findDOMNode(component);
      TestUtils.Simulate.click(node);
      expect(props.updateScreen).toHaveBeenCalled();
    });
  });
});

describe("ACButton", () => {
  it("should display a button with AC as it's content", () => {
    const component = TestUtils.renderIntoDocument(<ACButton />);
    const node = ReactDOM.findDOMNode(component);
    expect(node.textContent).toMatch(/AC/);
  });

  it('should invoke clearScreen when clicked', () => {
    const props = { clearScreen: () => {}};
    spyOn(props, 'clearScreen');
    
    const component = TestUtils.renderIntoDocument(<ACButton {...props} />);
    const node = ReactDOM.findDOMNode(component);
    TestUtils.Simulate.click(node);
    expect(props.clearScreen).toHaveBeenCalled();
  });
});

describe("OperatorButton", () => {
  let component;
  let node;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<OperatorBtn>+</OperatorBtn>);
    node = ReactDOM.findDOMNode(component);
  });

  it("should display a button with Operation as it's content", () => {
    expect(node.textContent).toMatch(/\+/);
  });

  it('should have a custom classname operator', () => {
    expect(node.className).toMatch('operator');
  });
});
