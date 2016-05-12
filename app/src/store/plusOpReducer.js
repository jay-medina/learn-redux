import _ from 'underscore';

const OPERATOR = '+';
const EQUAL_OP = '=';

function sumValues(state) {
  if(_.isNumber(state.memory) && _.isNumber(state.snd_value)) {
    return {
      last_input: OPERATOR,
      last_op: OPERATOR,
      memory: state.memory + state.snd_value,
      snd_value: undefined,
      screen: state.memory + state.snd_value
    };
  }

  return state;
}

function setMemoryValue(state) {
  return {
    last_input: OPERATOR,
    last_op: OPERATOR,
    memory: state.screen,
    snd_value: undefined,
    screen: state.screen
  };
}

export default function operatorReducer(state) {
  if(_.isUndefined(state.memory)){
    return setMemoryValue(state);
  }

  if(EQUAL_OP === state.last_input) {
    return {
      last_input: OPERATOR,
      last_op: OPERATOR,
      memory: state.memory,
      snd_value: undefined,
      screen: state.screen
    };
  }

  return sumValues(state);
}
