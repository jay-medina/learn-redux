import plusOpReducer from './plusOpReducer';

const MINUS = '-';

export default function operatorReducer(state) {
  return plusOpReducer(state, MINUS);
}
