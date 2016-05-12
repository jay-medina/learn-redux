import _ from 'underscore';
import plusOpReducer from './plusOpReducer';
import equalOpReducer from './equalOpReducer';

export default function operatorReducer(state, action) {
  const operator = action.value;
  switch (operator) {
    case '+': return plusOpReducer(state, operator);
    case '=': return equalOpReducer(state, operator);
  }

  return state;
}
