import _ from 'underscore';
import { execute } from './util';

const PLUS = '+';
const EQUAL_OP = '=';

function sumValues(state, operator) {
  if(_.isNumber(state.memory) && _.isNumber(state.snd_value)) {
    return {
      last_input: operator,
      last_op: operator,
      memory: execute(state.last_op, state.memory, state.snd_value),
      snd_value: undefined,
      screen: execute(state.last_op, state.memory, state.snd_value)
    };
  }

  if(operator !== state.last_op) {
    return {
      last_input: operator,
      last_op: operator,
      memory: state.memory,
      snd_value: state.snd_value,
      screen: state.screen
    };
  }

  return state;
}

function setMemoryValue(state, operator) {
  return {
    last_input: operator,
    last_op: operator,
    memory: state.screen,
    snd_value: undefined,
    screen: state.screen
  };
}

export default function operatorReducer(state, operator = PLUS) {
  if(_.isUndefined(state.memory)){
    return setMemoryValue(state, operator);
  }

  if(EQUAL_OP === state.last_input) {
    return {
      last_input: operator,
      last_op: operator,
      memory: state.memory,
      snd_value: undefined,
      screen: state.screen
    };
  }

  return sumValues(state, operator);
}
