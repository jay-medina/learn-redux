import {reducer} from '../../src/store/calculatorReducer';

describe("MinusOperator", () => {

  describe("when state is the init state", () => {
    describe("when user inputs a minus operator", () => {
      it("should set zero as the memory value and update the screen", () => {
        const state = getInit();

        const result = reducer(state, {type: 'UPDATE_VALUE', value: '-'});

        expect(result).toEqual({
          last_input: '-',
          last_op: '-',
          memory: 0,
          snd_value: undefined,
          screen: 0
        });
      });
    });
  });

  describe("when user has input a value", () => {
    describe("when user inputs a minus operator", () => {
      it('should set memory as the screen value and update the screen', () => {
        const state = getInit();

        let result = reducer(state, {type: 'UPDATE_VALUE', value: '1'});
            result = reducer(result, {type: 'UPDATE_VALUE', value: '-'});

        expect(result).toEqual({
          last_input: '-',
          last_op: '-',
          memory: 1,
          snd_value: undefined,
          screen: 1
        });
      });
    });
  });

  describe("when user has already input a minus operator", () => {
    describe("when user inputs a plus operator", () => {
      it('should override the last op', () => {
        const state = getInit();

        let result = reducer(state, {type: 'UPDATE_VALUE', value: '1'});
            result = reducer(result, {type: 'UPDATE_VALUE', value: '-'});
            result = reducer(result, {type: 'UPDATE_VALUE', value: '+'});

        expect(result).toEqual({
          last_input: '+',
          last_op: '+',
          memory: 1,
          snd_value: undefined,
          screen: 1
        });
      });
    });

    describe("when user inputs a minus operator again", () => {
      it('should keep the same state', () => {
        const state = getInit();

        let result = reducer(state, {type: 'UPDATE_VALUE', value: '1'});
            result = reducer(result, {type: 'UPDATE_VALUE', value: '-'});
            result = reducer(result, {type: 'UPDATE_VALUE', value: '-'});

        expect(result).toEqual({
          last_input: '-',
          last_op: '-',
          memory: 1,
          snd_value: undefined,
          screen: 1
        });
      });
    });

    describe("when user inputs a number value", () => {
      it('should subtract the value to snd_value and update the screen', () => {
        const state = getInit();

        let result = reducer(state, {type: 'UPDATE_VALUE', value: '1'});
            result = reducer(result, {type: 'UPDATE_VALUE', value: '-'});
            result = reducer(result, {type: 'UPDATE_VALUE', value: '3'});

        expect(result).toEqual({
          last_input: 3,
          last_op: '-',
          memory: 1,
          snd_value: 3,
          screen: 3
        });
      });

      describe("when value exists for snd_value", () => {
        it('should append the value to snd_value and update the screen', () => {
          const state = getInit();

          let result = reducer(state, {type: 'UPDATE_VALUE', value: '1'});
              result = reducer(result, {type: 'UPDATE_VALUE', value: '-'});
              result = reducer(result, {type: 'UPDATE_VALUE', value: '2'});
              result = reducer(result, {type: 'UPDATE_VALUE', value: '3'});

          expect(result).toEqual({
            last_input: 3,
            last_op: '-',
            memory: 1,
            snd_value: 23,
            screen: 23
          });
        });
      });

    });
  });

  describe("when user inputs a minus operator", () => {
    describe("when 2nd value and memory are populated", () => {
      it('should subtract the value into memory, reset the 2nd value and update screen', () => {
        const state = getInit();

        let result = reducer(state, {type: 'UPDATE_VALUE', value: '1'});
            result = reducer(result, {type: 'UPDATE_VALUE', value: '-'});
            result = reducer(result, {type: 'UPDATE_VALUE', value: '2'});
            result = reducer(result, {type: 'UPDATE_VALUE', value: '-'});

        expect(result).toEqual({
          last_input: '-',
          last_op: '-',
          memory: -1,
          snd_value: undefined,
          screen: -1
        });
      });
    });
  });

  describe("mixing minus and plus", () => {
    it('produce the correct result', () => {
      const state = getInit();
      debugger;
      let result = reducer(state, {type: 'UPDATE_VALUE', value: '2'});
          result = reducer(result, {type: 'UPDATE_VALUE', value: '+'});
          result = reducer(result, {type: 'UPDATE_VALUE', value: '6'});
          result = reducer(result, {type: 'UPDATE_VALUE', value: '-'});
          result = reducer(result, {type: 'UPDATE_VALUE', value: '3'});
          result = reducer(result, {type: 'UPDATE_VALUE', value: '='});

      expect(result).toEqual({
        last_input: '=',
        last_op: '-',
        memory: 5,
        snd_value: 3,
        screen: 5
      });
    });
  });

  function getInit() {
    const init = {
      last_input: undefined,
      last_op: undefined,
      memory: undefined,
      snd_value: undefined,
      screen: 0
    };

    return Object.assign({}, init);
  }
});
