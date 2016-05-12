import {reducer} from '../../src/store/calculatorReducer';

describe("EqualOperator", () => {

  describe("when state is the init state", () => {
    describe("when user inputs a equal operator", () => {
      it("should set zero as the memory value", () => {
        const result = reducer(getInit(), {type: 'UPDATE_VALUE', value: '='});

        expect(result).toEqual({
          last_input: '=',
          last_op: undefined,
          memory: 0,
          snd_value: undefined,
          screen: 0
        });
      });
    });
  });

  describe("when user has input a value", () => {
    describe("when user inputs a equal operator", () => {
      it('should set memory as the screen value and update the screen', () => {
        let result = reducer(getInit(), {type: 'UPDATE_VALUE', value: '1'});
            result = reducer(result, {type: 'UPDATE_VALUE', value: '='});

        expect(result).toEqual({
          last_input: '=',
          last_op: undefined,
          memory: 1,
          snd_value: undefined,
          screen: 1
        });
      });
    });

    describe("when user inputs a non equal operator", () => {
      describe("when user then inputs an equal operator", () => {
        it('should set screen value to snd_value, sum the value and update the memory and screen', () => {
          let result = reducer(getInit(), {type: 'UPDATE_VALUE', value: '1'});
              result = reducer(result, {type: 'UPDATE_VALUE', value: '+'});
              result = reducer(result, {type: 'UPDATE_VALUE', value: '='});
              //console.log(`result is ${JSON.stringify(result)}`);

          expect(result).toEqual({
            last_input: '=',
            last_op: '+',
            memory: 2,
            snd_value: 1,
            screen: 2
          });
        });

        describe("when user inputs an equal operator again", () => {
          it('should perform the last operation', () => {
            let result = reducer(getInit(), {type: 'UPDATE_VALUE', value: '1'});
                result = reducer(result, {type: 'UPDATE_VALUE', value: '+'});
                result = reducer(result, {type: 'UPDATE_VALUE', value: '='});
                result = reducer(result, {type: 'UPDATE_VALUE', value: '='});

            expect(result).toEqual({
              last_input: '=',
              last_op: '+',
              memory: 3,
              snd_value: 1,
              screen: 3
            });
          });
        });
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
