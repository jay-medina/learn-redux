import _ from 'underscore';

const OPERATORS = ['+'];

function secondValueInput(state, number) {
  if(_.isUndefined(state.snd_value)) {
    return {
      last_input: number,
      last_op: state.last_op,
      memory: state.memory,
      snd_value: number,
      screen: number
    };
  }

  return {
    last_input: number,
    last_op: state.last_op,
    memory: state.memory,
    snd_value: Number(`${state.snd_value}${number}`),
    screen: Number(`${state.snd_value}${number}`)
  };
}

function firstValueInput(state, number) {
  const copyState = Object.assign({}, state);
  copyState.last_input = number;

  if(state.screen === 0) {
      copyState.screen = number;
  }
  else {
    copyState.screen = Number(`${state.screen}${number}`);
  }

  return copyState;
}

export default function numberReducer(state, action) {
  const number = Number(action.value);
  if(_.isNaN(number)) {
    return state;
  }

  if(OPERATORS.includes(state.last_input) || !_.isUndefined(state.snd_value)) {
    return secondValueInput(state, number);
  }

  return firstValueInput(state, number);
}
