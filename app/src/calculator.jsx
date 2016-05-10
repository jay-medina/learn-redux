import React from 'react';
import { CalcButton, ACButton, OperatorBtn } from './calcButton';
import Screen from './screen.jsx';

const ButtonRow = function(props) {
  return (
    <div className="calc_btn-row">
      {props.children}
    </div>
  );
};

const ButtonContainer = React.createClass({
  render() {
    return (
      <div>
        <ButtonRow>
          <ACButton {...this.props} />
          <CalcButton {...this.props}>+/-</CalcButton>
          <CalcButton {...this.props}>%</CalcButton>
          <OperatorBtn {...this.props}>/</OperatorBtn>
        </ButtonRow>
        <ButtonRow>
          <CalcButton {...this.props}>7</CalcButton>
          <CalcButton {...this.props}>8</CalcButton>
          <CalcButton {...this.props}>9</CalcButton>
          <OperatorBtn {...this.props}>X</OperatorBtn>
        </ButtonRow>
        <ButtonRow>
          <CalcButton {...this.props}>4</CalcButton>
          <CalcButton {...this.props}>5</CalcButton>
          <CalcButton {...this.props}>6</CalcButton>
          <OperatorBtn {...this.props}>-</OperatorBtn>
        </ButtonRow>
        <ButtonRow>
          <CalcButton {...this.props}>1</CalcButton>
          <CalcButton {...this.props}>2</CalcButton>
          <CalcButton {...this.props}>3</CalcButton>
          <OperatorBtn {...this.props}>+</OperatorBtn>
        </ButtonRow>
        <ButtonRow>
          <CalcButton {...this.props} className="zero">0</CalcButton>
          <CalcButton {...this.props}>.</CalcButton>
          <OperatorBtn {...this.props}>=</OperatorBtn>
        </ButtonRow>
      </div>
    );
  }
});

export default React.createClass({
  updateScreen(value = 0) {
    const {store} = this.props;
    store.dispatch({type: 'UPDATE_VALUE', value: value});
  },
  clearScreen() {
    const {store} = this.props;
    store.dispatch({type: 'CLEAR_VALUE'});
  },
  render() {
    const {store} = this.props;

    return (
      <div className="calculator">
        <Screen value={store.getState()}/>
        <ButtonContainer clearScreen= {this.clearScreen}
                         updateScreen={this.updateScreen} />
      </div>
    );
  }
});
