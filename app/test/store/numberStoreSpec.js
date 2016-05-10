import {reducer} from '../../src/store/numberStore.js';
import {createStore} from 'redux';

describe("NumberStoreReducer", () => {
  let state;
  const init = {
    last_input: undefined,
    last_op: undefined,
    memory: undefined,
    snd_value: undefined,
    screen: 0
  };

  describe("by default", () => {
    it('should have a state of initial values', () => {
      expect(reducer(undefined, {})).toEqual(init);
    });
  });

  describe("when state is the init state", () => {
    describe("when user inputs a number", () => {
      it('should set the number to the passed value', () => {
        state = init;
        const result = reducer(init, {type: 'UPDATE_VALUE', value: 4});

        expect(result.last_input).toEqual(4);
        expect(result.last_op).toEqual(undefined);
        expect(result.memory).toEqual(undefined);
        expect(result.snd_value).toEqual(undefined);
        expect(result.screen).toEqual(4);
      });
    });

    describe("when user inputs a operator", () => {
      it("should set zero as the memory value and update the screen", () => {
        expect(false).toBe(true);
      });
    });

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
