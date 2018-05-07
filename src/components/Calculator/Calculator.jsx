import React from 'react';

import './_Calculator.scss';

const INIT_STATE = {
  integerStr: '',
  decimalStr: '',
  hasDecimal: false,
  storedValue: 0,
  currentOperation: null
};

const CALCULATOR_OPERATIONS = {
  '/': (prevValue, nextValue) => {
    // todo if nextValue is zero, `Infinity` will be returned
    return prevValue / nextValue;
  },

  '*': (prevValue, nextValue) => {
    // todo format return value
    return prevValue * nextValue;
  },

  '+': (prevValue, nextValue) => {
    return prevValue + nextValue
  },

  '-': (prevValue, nextValue) => {
    // todo format return value
    return prevValue - nextValue;
  },

  '=': (prevValue, nextValue) => {
    return nextValue;
  }
};

class Calculator extends React.Component {

  constructor(props) {
    super(props);

    this.state = INIT_STATE;
  }

  eval() {
    if (!this.state.storedValue)
      return;
    console.log(this.state);
    switch (this.state.currentOperation) {
      case "add":
        this.setState({
          value: this.state.value + this.state.storedValue
        });
        break;
      case "subtract":
        this.setState({
          value: this.state.storedValue - this.state.value
        });
        break;
      case "multiply":
        this.setState({
          value: this.state.value * this.state.storedValue
        });
        break;
      case "divide":
        this.setState({
          value: this.state.storedValue / this.state.value
        });
        break;
      default:
        console.log('no operation');
    }
  }

  clearAll() {
    this.setState(INIT_STATE);
  }

  clearCurrent() {
    this.setState({value: null})
  }

  decimal(e) {
    this.setState({hasDecimal: true})
  }

  getCurrentValue() {
    const { integerStr, decimalStr, hasDecimal } = this.state;

    if (hasDecimal) {
      return Number(parseFloat(`${integerStr}.${decimalStr}`));
    }

    return Number(integerStr);
  }

  operate(operation) {
    const { storedValue, currentOperation } = this.state;

    const currentValue = this.getCurrentValue();
    const newStoredValue = !storedValue ? currentValue :
      CALCULATOR_OPERATIONS[currentOperation](storedValue, currentValue);

    this.setState({
      currentOperation: operation,
      storedValue: newStoredValue,
      integerStr: '',
      decimalStr: '',
      hasDecimal: false,
    });
  }

  handleOperation(e) {
    const { operation } = e.target.dataset;
    this.operate(operation);
  }

  appendNumber(number) {
    const { hasDecimal, decimalStr, integerStr } = this.state;

    hasDecimal ? this.setState({
      decimalStr: decimalStr + number
    }) : this.setState({
      integerStr: integerStr === '0' || integerStr === '' ? number : integerStr + number
    });
  }

  handleNumberClicked(e) {
    const { number } = e.target.dataset;
    this.appendNumber(number);
  }

  render() {
    return (
      <div className='calculator'>
        <div className='value'>
          {this.state.value? this.state.value.toString(): ''}
          {
            this.state.hasDecimal ? '.' + (this.state.decimal ? this.state.decimal.toString(): '') : ''
          }
        </div>
        <div className='cells'>
          {/* TOP ROW  */}
          <div className='cell' onClick={::this.clearAll}>AC</div>
          <div className='cell span-two' onClick={::this.clearCurrent}>C</div>
          <div className='cell' data-operation="/" onClick={::this.handleOperation}>/</div>
          {/* SECOND TOP ROW  */}
          <div className='cell' data-number="7" onClick={::this.handleNumberClicked}>7</div>
          <div className='cell' data-number="8" onClick={::this.handleNumberClicked}>8</div>
          <div className='cell' data-number="9" onClick={::this.handleNumberClicked}>9</div>
          <div className='cell' data-operation="*" onClick={::this.handleOperation}>x</div>
          {/* TOP ROW  */}
          <div className='cell' data-number="4" onClick={::this.handleNumberClicked}>4</div>
          <div className='cell' data-number="5" onClick={::this.handleNumberClicked}>5</div>
          <div className='cell' data-number="6" onClick={::this.handleNumberClicked}>6</div>
          <div className='cell' data-operation="-" onClick={::this.handleOperation}>-</div>
          {/* TOP ROW  */}
          <div className='cell' data-number="1" onClick={::this.handleNumberClicked}>1</div>
          <div className='cell' data-number="2" onClick={::this.handleNumberClicked}>2</div>
          <div className='cell' data-number="3" onClick={::this.handleNumberClicked}>3</div>
          <div className='cell' data-operation="+" onClick={::this.handleOperation}>+</div>
          {/* BOTTOM ROW  */}
          <div className='cell bottom-left' data-number="0" onClick={::this.handleNumberClicked}>0</div>
          <div className='cell decimal' onClick={::this.decimal}>.</div>
          <div className='cell equals' data-operation="=" onClick={::this.handleOperation}>=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
