import React from 'react';
import ReactDOM from 'react-dom';
import MultiCounter from './MultiCounter.jsx';
import {store as CounterStore} from './reducers/CounterReducer.js';

import './reducers/CounterTest.js';

function increaseCount(index) {
  CounterStore.dispatch({index, type: 'INCREMENT'});
}

function decreaseCount(index) {
  CounterStore.dispatch({index, type: 'DECREMENT'});
}

function addCounter() {
  CounterStore.dispatch({type: 'ADD_COUNTER'});
}

function removeCounter() {
  CounterStore.dispatch({type: 'REMOVE_COUNTER'});
}

function render() {
  ReactDOM.render(
    <MultiCounter values={CounterStore.getState()}
              addCounter={addCounter}
              removeCounter={removeCounter}
              increaseCount={increaseCount}
              decreaseCount={decreaseCount} />,
    document.getElementById('app'));
}

CounterStore.subscribe(render);
render();
