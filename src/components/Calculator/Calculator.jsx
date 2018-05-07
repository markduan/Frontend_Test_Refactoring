import React from 'react';

import './_Calculator.scss';

class Calculator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: null,
      storedValue: null,
      hasDecimal: false,
      decimal: null,
      currentOperation: null
    };
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

  multiply() {
    this.eval();
    this.setState({
      currentOperation: "multiply",
      storedValue: this.state.value,
      value: null,
      decimal: null,
      hasDecimal: false
    });
  }

  divide() {
    this.eval();
    this.setState({
      currentOperation: "divide",
      storedValue: this.state.value,
      value: null,
      decimal: null,
      hasDecimal: false
    });
  }

  subtract() {
    this.eval();
    this.setState({
      currentOperation: "subtract",
      storedValue: this.state.value,
      value: null,
      decimal: null,
      hasDecimal: false
    });
  }

  add() {
    console.log(this);
    this.eval();
    this.setState({
      currentOperation: "add",
      storedValue: this.state.value,
      value: null,
      decimal: null,
      hasDecimal: false
    });
  }

  equals() {
    this.eval();
  };

  number(num) {
    this.state.hasDecimal ? this.setState({
      decimal: this.state.decimal * 10 + num
    }) : this.setState({
      value: this.state.value * 10 + num
    });
  }

  numberClicked(num) {
    return (event) => {
      this.number(num);
    }
  };

  clearAll() {
    this.setState({currentOperation: null, value: null, storedValue: null});
  }

  clearCurrent() {
    this.setState({value: null})
  }

  decimal(e) {
    this.setState({hasDecimal: true})
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
          <div className='cell' onClick={::this.divide}>/</div>
          {/* SECOND TOP ROW  */}
          <div className='cell' onClick={::this.numberClicked(7)}>7</div>
          <div className='cell' onClick={::this.numberClicked(8)}>8</div>
          <div className='cell' onClick={::this.numberClicked(9)}>9</div>
          <div className='cell' onClick={::this.multiply}>x</div>
          {/* TOP ROW  */}
          <div className='cell' onClick={::this.numberClicked(4)}>4</div>
          <div className='cell' onClick={::this.numberClicked(5)}>5</div>
          <div className='cell' onClick={::this.numberClicked(6)}>6</div>
          <div className='cell' onClick={::this.subtract}>-</div>
          {/* TOP ROW  */}
          <div className='cell' onClick={::this.numberClicked(1)}>1</div>
          <div className='cell' onClick={::this.numberClicked(2)}>2</div>
          <div className='cell' onClick={::this.numberClicked(3)}>3</div>
          <div className='cell' onClick={::this.add}>+</div>
          {/* BOTTOM ROW  */}
          <div className='cell bottom-left' onClick={::this.numberClicked(0)}>0</div>
          <div className='cell decimal' onClick={::this.decimal}>.</div>
          <div className='cell equals' onClick={::this.eval}>=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
