
const Types = {
  UPDATE_VALUE: 'UPDATE_VALUE',
  CLEAR_VALUE: 'CLEAR_VALUE'
};

const INIT_STATE = '0';

const numberReducer = function(state = INIT_STATE, action) {
  if(state === INIT_STATE) {
    return action.value.toString();
  }
  return state + action.value;
};

const stringReducer = function(state, action) {

};

export const reducer = function(state = INIT_STATE, action) {
   if(action.type === Types.UPDATE_VALUE){
     const number = Number(action.value);

     if(Number.isNaN(number)) {
       return state;
     }

     return numberReducer(state, action);
   }
   else if(action.type === Types.CLEAR_VALUE) {
     return '0';
   }

  return state;
};
