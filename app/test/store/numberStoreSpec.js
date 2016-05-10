import {reducer} from '../../src/store/numberStore.js';
import {createStore} from 'redux';

describe("NumberStoreReducer", () => {

  describe("by default", () => {
    it('should have a state of zero', () => {
      expect(reducer(undefined, {})).toEqual('0');
    });
  });

  describe("when state is zero", () => {
    it('should set the number to the passed value', () => {
      expect(reducer('0', {type: 'UPDATE_VALUE', value: 4})).toEqual('4');
    })
  });

  describe("when state is not zero", () => {
    it('should append the passed value to the number', () => {
      expect(reducer('8', {type: 'UPDATE_VALUE', value: 4})).toEqual('84');
    })
  });

  describe("when the value is not a number", () => {
    it('should return state', () => {
      const result = reducer('8', {type: 'UPDATE_VALUE', value: 'ASD'});
      expect(result).toEqual('8');
    });
  });

  describe('when a user clears the value', () => {
    it('should reset the value to initial state', () => {
      const result = reducer('8', {type: 'CLEAR_VALUE'});
      expect(result).toEqual('0');
    });
  });
});
