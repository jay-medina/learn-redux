import _ from 'underscore';
import {execute} from './util';

const OPERATOR = '=';

export default function operatorReducer(state) {
  if(state.last_input === OPERATOR) {
      return {
        last_input: OPERATOR,
        last_op: state.last_op,
        memory: execute(state.last_op, state.screen, state.snd_value),
        snd_value: state.snd_value,
        screen: execute(state.last_op, state.screen, state.snd_value)
      }
  }

  if(!_.isUndefined(state.last_op)) {
    const nState = {
      last_input: OPERATOR,
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
    last_input: OPERATOR,
    last_op: state.last_op,
    memory: state.screen,
    snd_value: undefined,
    screen: state.screen
  };
}
