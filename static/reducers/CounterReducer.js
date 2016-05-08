import { createStore } from 'redux';
import _ from 'underscore';

export function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
}

function updateCounter(state, action) {
  if(_.isNumber(action.index) && action.index < state.length && action.type) {
    return [
      ...state.slice(0, action.index),
      counter(state[action.index], action),
      ...state.slice(action.index + 1)
    ];
  }

  return state;
}

function modifyCounter(state, action) {
  switch (action.type) {
    case 'ADD_COUNTER': return [...state, 0];
    case 'REMOVE_COUNTER': return state.splice(0, state.length - 1);
    default: return state;
  }
}

export function multiCounter(state = [0], action = {}) {
  //console.log(state, action);
  switch(action.type) {
    case 'INCREMENT' : return updateCounter(state, action);
    case 'DECREMENT' : return updateCounter(state, action);
    case 'ADD_COUNTER' : return modifyCounter(state, action);
    case 'REMOVE_COUNTER' : return modifyCounter(state, action);
    default: return state;
  }
}

export const store = createStore(multiCounter);

//store has 3 methods
//console.log(store.getState());
//store.dispatch({type: 'INCREMENT'});

//sets up a call back anytime an action is dispatched
/*store.subscribe(() => {
  alert('body clicked!');
}); */
