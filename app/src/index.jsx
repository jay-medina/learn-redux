import React from 'react';
import ReactDOM from 'react-dom';
import {reducer} from './store/numberStore';
import {createStore} from 'redux';
import Calculator from './calculator.jsx';
import './index.css';

const calcStore = createStore(reducer);
function render() {
  ReactDOM.render(<Calculator store={calcStore} />,document.getElementById('app'));
}
calcStore.subscribe(render);
render();
