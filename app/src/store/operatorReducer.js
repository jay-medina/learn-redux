import _ from 'underscore';
import plusOpReducer from './plusOpReducer';
import equalOpReducer from './equalOpReducer';

function plusMinusReducer(state, operator) {
  const nState = Object.assign({}, state);

  if(state.screen !== 0) {
    nState.last_input = operator;
    nState.screen = -state.screen;
  }

  return nState;
}

export default function operatorReducer(state, action) {
  const operator = action.value;
  switch (operator) {
    case '+': return plusOpReducer(state, operator);
    case '=': return equalOpReducer(state, operator);
    case '+/-': return plusMinusReducer(state, operator);
  }

  return state;
}
