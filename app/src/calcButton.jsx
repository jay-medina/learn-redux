import React from 'react';

export const CalcButton = React.createClass({
  onClick(e) {
    e.preventDefault();
    e.stopPropagation();

    const value = this.props.children;

    if(this.props.onClick) {
      return this.props.onClick(value);
    }

    this.props.updateScreen(value);
  },
  getClassName() {
    const {className = ''} = this.props;

    return `calc-btn ${className}`;
  },
  render() {
    return (
      <button className={this.getClassName()}
              onClick={this.onClick}>{this.props.children}</button>
    );
  }
});

export const ACButton = React.createClass({
  onClick() {
    this.props.clearScreen();
  },
  render() {
    return (
      <CalcButton onClick={this.onClick} {...this.props}>AC</CalcButton>
    );
  }
});

export const OperatorBtn = React.createClass({
  render() {
    return (
      <CalcButton {...this.props} className='operator'>{this.props.children}</CalcButton>
    );
  }
});
