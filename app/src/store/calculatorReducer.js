import _ from 'underscore';
import numberReducer from './numberReducer';
import operatorReducer from './operatorReducer';

const Types = {
  UPDATE_VALUE: 'UPDATE_VALUE',
  CLEAR_VALUE: 'CLEAR_VALUE'
};

function getInitState(){
  return {
    last_input: undefined,
    last_op: undefined,
    memory: undefined,
    snd_value: undefined,
    screen: 0
  };
}

export const reducer = function(state, action) {
  if(_.isUndefined(state)) {
    return getInitState();
  }

  if(action.type === Types.UPDATE_VALUE){
    let nState = numberReducer(state,action);

    return operatorReducer(nState, action);
  }
  else if(action.type === Types.CLEAR_VALUE) {
    return getInitState();
  }

  return state;
};
