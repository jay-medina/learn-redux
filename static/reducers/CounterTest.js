import runTest from './ReducerTest.js';
import {multiCounter, counter} from './CounterReducer.js';

runTest({
  state: [1],
  action: {index: 1, type: 'INCREMENT'},
  result: [1],
  func: multiCounter
});

runTest({
  state: [1],
  action: {type: 'ADD_COUNTER'},
  result: [1,0],
  func: multiCounter
});


runTest({
  state: [1,0],
  action: {type: 'REMOVE_COUNTER'},
  result: [1],
  func: multiCounter
});

runTest({
  state: undefined,
  action: {},
  result: [0],
  func: multiCounter
})

runTest({
  state: [0],
  action: {index: 0, type: 'INCREMENT'},
  result: [1],
  func: multiCounter
});

runTest({
  state: [0],
  action: {index: 1, type: 'INCREMENT'},
  result: [0],
  func: multiCounter
});

runTest({
  state: [1, 2],
  action: {index: 0, type: 'INCREMENT'},
  result: [2, 2],
  func: multiCounter
});

runTest({
  state: [0, 2],
  action: {index: 1, type: 'INCREMENT'},
  result: [0, 3],
  func: multiCounter
});

runTest({
  state: [0, 2],
  action: {index: 1, type: 'Meow'},
  result: [0, 2],
  func: multiCounter
});

runTest({
  state: 0,
  action: { type: 'INCREMENT'},
  result: 1,
  func: counter
});

runTest({
  state: 1,
  action: { type: 'INCREMENT'},
  result: 2,
  func: counter
});

runTest({
  state: 2,
  action: { type: 'DECREMENT'},
  result: 1,
  func: counter
});

runTest({
  state: 1,
  action: { type: 'DECREMENT'},
  result: 0,
  func: counter
});

runTest({
  state: 1,
  action: { type: 'MEOW'},
  result: 1,
  func: counter
});

runTest({
  state: undefined,
  action: {},
  result: 0,
  func: counter
});
