import mainOpReducer from './mainOpReducer';
import equalOpReducer from './equalOpReducer';
import divideOpReducer from './divideReducer';

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
    case '-': return mainOpReducer(state, operator);
    case '+': return mainOpReducer(state, operator);
    case '*': return mainOpReducer(state, operator);
    case '/': return divideOpReducer(state, operator);
    case '=': return equalOpReducer(state);
    case '+/-': return plusMinusReducer(state, operator);
  }

  return state;
}
