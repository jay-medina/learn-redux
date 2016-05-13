import {reducer} from '../../src/store/calculatorReducer.js';

describe("CalculatorReducer", () => {

  describe("by default", () => {
    it('should have a state of initial values', () => {
      expect(reducer(undefined, {})).toEqual(getInit());
    });
  });

  describe("when state is the init state", () => {
    describe("when user inputs a number", () => {
      it('should set the number to the passed value', () => {
        const result = reducer(getInit(), {type: 'UPDATE_VALUE', value: '4'});

        expect(result).toEqual({
          last_input: 4,
          last_op: undefined,
          memory: undefined,
          snd_value: undefined,
          screen: 4
        });
      });
    });

    describe("when user hits +/- button", () => {
      it('should have no effect', () => {
        const result = reducer(getInit(), {type: 'UPDATE_VALUE', value: '+/-'});

        expect(result).toEqual(getInit());
      });
    });
  });

  describe("when screen value is not zero", () => {
    it('should append the passed value to the number', () => {
      const state = getInit();
      state.screen = 4;
      state.last_input = 4;

      expect(reducer(state, {type: 'UPDATE_VALUE', value: '8'})).toEqual({
        last_input: 8,
        last_op: undefined,
        memory: undefined,
        snd_value: undefined,
        screen: 48
      });
    });

    describe("when user hits +/- button", () => {
      it('should inverse the sign of the value', () => {
        let result = reducer(getInit(), {type: 'UPDATE_VALUE', value: '4'});
            result = reducer(result, {type: 'UPDATE_VALUE', value: '+/-'});

        expect(result).toEqual({
          last_input: '+/-',
          last_op: undefined,
          memory: undefined,
          snd_value: undefined,
          screen: -4
        });
      });

      describe("when user hits +/- again", () => {
        it('should inverse the sign of the value back again', () => {
          let result = reducer(getInit(), {type: 'UPDATE_VALUE', value: '4'});
              result = reducer(result, {type: 'UPDATE_VALUE', value: '+/-'});
              result = reducer(result, {type: 'UPDATE_VALUE', value: '+/-'});

          expect(result).toEqual({
            last_input: '+/-',
            last_op: undefined,
            memory: undefined,
            snd_value: undefined,
            screen: 4
          });
        });
      });
    });
  });

  describe("when the value is not a number or an operator", () => {
    it('should return state', () => {
      const result = reducer(getInit(), {type: 'UPDATE_VALUE', value: 'ASD'});
      expect(result).toEqual(getInit());
    });
  });

  describe('when a user clears the value', () => {
    it('should reset the value to initial state', () => {
      const state = getInit();
      state.screen = 4;
      state.last_input = 4;

      const result = reducer(state, {type: 'CLEAR_VALUE'});
      expect(result).toEqual(getInit());
    });
  });

  describe("mix of plus and equal operator", () => {
    it('should display correct output', () => {
      let result = reducer(getInit(), {type: 'UPDATE_VALUE',value:  '3'});
          result = reducer(result, {type: 'UPDATE_VALUE', value:  '+'});
          result = reducer(result, {type: 'UPDATE_VALUE', value: '3'});
          result = reducer(result, {type: 'UPDATE_VALUE', value: '='});
          result = reducer(result, {type: 'UPDATE_VALUE', value: '+'});
          result = reducer(result, {type: 'UPDATE_VALUE', value: '5'});
          result = reducer(result, {type: 'UPDATE_VALUE', value: '='});

      expect(result).toEqual({
        last_input: '=',
        last_op: '+',
        memory: 11,
        snd_value: 5,
        screen: 11
      });
    });
  });

  function getInit() {
    return {
      last_input: undefined,
      last_op: undefined,
      memory: undefined,
      snd_value: undefined,
      screen: 0
    };
  }
});
