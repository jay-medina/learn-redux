import _ from 'underscore';

const OPERATORS = ['+'];

function sumValues(state, operator) {
  if(_.isNumber(state.memory) && _.isNumber(state.snd_value)) {
    return {
      last_input: operator,
      last_op: operator,
      memory: state.memory + state.snd_value,
      snd_value: undefined,
      screen: state.memory + state.snd_value
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

export default function operatorReducer(state, action) {
  if(OPERATORS.includes(action.value)) {
    const operator = action.value.trim();
    if(_.isUndefined(state.memory)){
      return setMemoryValue(state, operator);
    }

    return sumValues(state, operator);
  }

  return state;
}
