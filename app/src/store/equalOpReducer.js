import _ from 'underscore';
import {isADivideByZeroCase} from './divideReducer';
import {execute} from './util';

const EQUAL = '=';
const NOT_A_NUMBER = 'not a number';

export default function operatorReducer(state) {

  if(isADivideByZeroCase(state)) {
    return {
      last_input: undefined,
      last_op: undefined,
      memory: NOT_A_NUMBER,
      snd_value: undefined,
      screen: NOT_A_NUMBER
    };
  }

  if(state.last_input === EQUAL) {
      return {
        last_input: EQUAL,
        last_op: state.last_op,
        memory: execute(state.last_op, state.screen, state.snd_value),
        snd_value: state.snd_value,
        screen: execute(state.last_op, state.screen, state.snd_value)
      };
  }

  if(!_.isUndefined(state.last_op)) {
    const nState = {
      last_input: EQUAL,
      last_op: state.last_op,
      memory: execute(state.last_op, state.memory, state.screen),
      snd_value: state.snd_value,
      screen: execute(state.last_op, state.memory, state.screen)
    };

    if(_.isUndefined(state.snd_value)) {
      nState.snd_value = state.screen;
    }

    return nState;
  }

  return {
    last_input: EQUAL,
    last_op: state.last_op,
    memory: state.screen,
    snd_value: undefined,
    screen: state.screen
  };
}
