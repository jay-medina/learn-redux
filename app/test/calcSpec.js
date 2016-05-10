import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from '../src/calculator';
import {ACButton} from '../src/calcButton';
import Screen from '../src/screen';
import {reducer} from '../src/store/numberStore';
import {createStore} from 'redux';
import TestUtils from 'react-addons-test-utils';

describe('Calculator', function(){
  let component;
  let calcStore;

  beforeEach(() => {
    calcStore = createStore(reducer);
    component = TestUtils.renderIntoDocument(<Calculator store={calcStore} />);
  });

  it("should display the 0 zero by default", () => {
    const arr = TestUtils.findAllInRenderedTree(component, com => {
      return TestUtils.isCompositeComponentWithType(com, Screen);
    });

    const node = ReactDOM.findDOMNode(arr[0]);
    expect(node.textContent).toEqual('0');
  });

  describe('when AC it clicked', () => {
    beforeEach(() => {
      spyOn(calcStore, 'dispatch').and.callThrough();
      calcStore.dispatch({type:'UPDATE_VALUE', value: '8'});
      component = TestUtils.renderIntoDocument(<Calculator store={calcStore} />);
    });

    it('should reset value of screen', () => {
      whenScreenDisplaysANumber(component);
      whenACButtonIsClicked(component);
      thenScreenResetsToZero();
      thenWeDispatchToResetTheValue(calcStore);
    });

    function thenScreenResetsToZero() {
      const component = TestUtils.renderIntoDocument(<Calculator store={calcStore} />);
      const scrnNode = ReactDOM.findDOMNode(getComponent(component, Screen));

      expect(scrnNode.textContent).toEqual('0');
    }

    function thenWeDispatchToResetTheValue(calcStore) {
      expect(calcStore.dispatch).toHaveBeenCalledWith({type:'CLEAR_VALUE'});
    }

    function whenScreenDisplaysANumber(component) {
      let scrnNode = ReactDOM.findDOMNode(getComponent(component, Screen));
      expect(scrnNode.textContent).toEqual('8');
    }

    function whenACButtonIsClicked(component) {
      const acButtonNode = ReactDOM.findDOMNode(getComponent(component, ACButton));
      expect(acButtonNode.textContent).toEqual('AC');
      TestUtils.Simulate.click(acButtonNode);
    }

    function getComponent(root, componentType) {
      return TestUtils.findAllInRenderedTree(root, com => {
        return TestUtils.isCompositeComponentWithType(com, componentType);
      })[0];
    }
  });
});
