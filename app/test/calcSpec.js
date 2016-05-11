import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from '../src/calculator';
import {ACButton, CalcButton, OperatorBtn} from '../src/calcButton';
import Screen from '../src/screen';
import {reducer} from '../src/store/calculatorReducer';
import {createStore} from 'redux';
import TestUtils from 'react-addons-test-utils';

describe('Calculator', function(){
  let component;
  let calcStore;

  beforeEach(() => {
    calcStore = createStore(reducer);
  });

  it("should display the 0 zero by default", () => {
    component = TestUtils.renderIntoDocument(<Calculator store={calcStore} />);
    const arr = TestUtils.findAllInRenderedTree(component, com => {
      return TestUtils.isCompositeComponentWithType(com, Screen);
    });

    const node = ReactDOM.findDOMNode(arr[0]);
    expect(node.textContent).toEqual('0');
  });

  describe("when number is clicked", () => {
    it('should update the display', () => {
      spyOn(calcStore, 'dispatch').and.callThrough();
      component = TestUtils.renderIntoDocument(<Calculator store={calcStore} />);
      whenScreenDisplaysANumber(component, '0');
      whenNumberButtonIsClicked(component, '4');
      thenWeDispatchToUpdateTheScreenValue(calcStore, '4');
      thenScreenUpdatesTo('4');
    });
  });

  describe("when plus operator is clicked", () => {
    describe("by default", () => {
      it('should display zero', () => {
        spyOn(calcStore, 'dispatch').and.callThrough();
        component = TestUtils.renderIntoDocument(<Calculator store={calcStore} />);
        whenScreenDisplaysANumber(component, '0');
        whenOperatorIsClicked(component, '+');
        thenWeDispatchToUpdateTheScreenValue(calcStore, '+');
        thenScreenUpdatesTo('0');
      });
    });

    describe("when number is entered first", () => {
      it('should display the number', () => {
        spyOn(calcStore, 'dispatch').and.callThrough();
        calcStore.dispatch({type:'UPDATE_VALUE', value: '4'});
        component = TestUtils.renderIntoDocument(<Calculator store={calcStore} />);
        whenScreenDisplaysANumber(component, '4');
        whenOperatorIsClicked(component, '+');
        thenWeDispatchToUpdateTheScreenValue(calcStore, '+');
        thenScreenUpdatesTo('4');
      });
    });

    describe("when number is entered twice", () => {
      it('should display the sum of the two numbers', () => {
        spyOn(calcStore, 'dispatch').and.callThrough();
        component = TestUtils.renderIntoDocument(<Calculator store={calcStore} />);
        whenNumberButtonIsClicked(component, '4');
        whenOperatorIsClicked(component, '+');
        whenNumberButtonIsClicked(component, '3');
        whenOperatorIsClicked(component, '+');
        thenWeDispatchToUpdateTheScreenValue(calcStore, '+');
        thenScreenUpdatesTo('7');
      });
    });
  });

  describe('when AC it clicked', () => {
    beforeEach(() => {
      spyOn(calcStore, 'dispatch').and.callThrough();
      calcStore.dispatch({type:'UPDATE_VALUE', value: '8'});
      component = TestUtils.renderIntoDocument(<Calculator store={calcStore} />);
    });

    it('should reset value of screen', () => {
      whenScreenDisplaysANumber(component, '8');
      whenACButtonIsClicked(component);
      thenWeDispatchToResetTheValue(calcStore);
      thenScreenUpdatesTo('0');
    });
  });

  function thenScreenUpdatesTo(value) {
    const component = TestUtils.renderIntoDocument(<Calculator store={calcStore} />);
    const scrnNode = ReactDOM.findDOMNode(getScreen(component));

    expect(scrnNode.textContent).toEqual(value);
  }

  function thenWeDispatchToUpdateTheScreenValue(calcStore, value) {
    expect(calcStore.dispatch).toHaveBeenCalledWith({type:'UPDATE_VALUE', value: value});
  }

  function thenWeDispatchToResetTheValue(calcStore) {
    expect(calcStore.dispatch).toHaveBeenCalledWith({type:'CLEAR_VALUE'});
  }

  function whenOperatorIsClicked(component, operator) {
    const operatorBtns = getComponent(component, OperatorBtn);
    const operatorBtn = operatorBtns.find(btn => btn.props.children === operator);
    const btnNode = ReactDOM.findDOMNode(operatorBtn);
    expect(btnNode.textContent).toEqual(operator);
    TestUtils.Simulate.click(btnNode);
  }

  function whenNumberButtonIsClicked(component, number) {
    const numberButtons = getComponent(component, CalcButton);
    const numberButton = numberButtons.find(btn => btn.props.children === number);
    const buttonNode = ReactDOM.findDOMNode(numberButton);
    expect(buttonNode.textContent).toEqual(number);
    TestUtils.Simulate.click(buttonNode);
  }

  function whenScreenDisplaysANumber(component, number) {
    let scrnNode = ReactDOM.findDOMNode(getScreen(component));
    expect(scrnNode.textContent).toEqual(number);
  }

  function whenACButtonIsClicked(component) {
    const buttons = getComponent(component, ACButton);
    const acButtonNode = ReactDOM.findDOMNode(buttons[0]);
    expect(acButtonNode.textContent).toEqual('AC');
    TestUtils.Simulate.click(acButtonNode);
  }

  function getScreen(component) {
    return getComponent(component, Screen)[0];
  }

  function getComponent(root, componentType) {
    return TestUtils.findAllInRenderedTree(root, com => {
      return TestUtils.isCompositeComponentWithType(com, componentType);
    });
  }
});
