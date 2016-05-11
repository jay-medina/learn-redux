import {reducer} from '../../src/store/calculatorReducer.js';

describe("CalculatorReducer", () => {
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
        const result = reducer(init, {type: 'UPDATE_VALUE', value: 4});

        expect(result).toEqual({
          last_input: 4,
          last_op: undefined,
          memory: undefined,
          snd_value: undefined,
          screen: 4
        });
      });
    });
  });

  describe("when screen value is not zero", () => {
    it('should append the passed value to the number', () => {
      const state = Object.assign({}, init);
      state.screen = 4;
      state.last_input = 4;

      expect(reducer(state, {type: 'UPDATE_VALUE', value: '8'})).toEqual({
        last_input: 8,
        last_op: undefined,
        memory: undefined,
        snd_value: undefined,
        screen: 48
      });
    })
  });

  describe("when the value is not a number or an operator", () => {
    it('should return state', () => {
      const result = reducer(init, {type: 'UPDATE_VALUE', value: 'ASD'});
      expect(result).toEqual(init);
    });
  });

  describe('when a user clears the value', () => {
    it('should reset the value to initial state', () => {
      const state = Object.assign({}, init);
      state.screen = 4;
      state.last_input = 4;

      const result = reducer(state, {type: 'CLEAR_VALUE'});
      expect(result).toEqual(init);
    });
  });
});
