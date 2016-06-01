import mainOpReducer from './mainOpReducer';

const DIVIDE_OP = '/';
const NOT_A_NUMBER = 'not a number';

function isSecondValueAZero(state) {
  return state.snd_value === 0;
}

export function isADivideByZeroCase(state) {
  return isSecondValueAZero(state) && state.last_op === DIVIDE_OP;
}

export default function operatorReducer(state, operator) {
  if(isADivideByZeroCase(state)) {
    return {
      last_input: undefined,
      last_op: undefined,
      memory: NOT_A_NUMBER,
      snd_value: undefined,
      screen: NOT_A_NUMBER
    };
  }

  return mainOpReducer(state,operator);
}
