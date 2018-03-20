import React from 'react';
import './_Calculator.scss';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasValue: false,
            value: null,
            storedValue: null,
            hasDecimal: false,
            decimal: null,
            currentOperation: null
        };

        this.numberClicked.bind(this);
        this.divide = this.divide.bind(this);
        this.multiply = this.multiply.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.clearCurrent = this.clearCurrent.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.decimal = this.decimal.bind(this);
    }

    eval = () => {
        if (!this.state.storedValue)
            return;
        var num;
        
        switch (this.state.currentOperation) {
            case "add":
                
                if(this.state.hasDecimal){
                    num = parseFloat(this.state.value+"."+this.state.decimal);
                }
                else{
                    num = this.state.value;
                }
                
                this.setState({
                    value: [(num*10000) + (this.state.storedValue*10000)]/10000,
                    hasDecimal: false,
                    decimal: null,
                    hasValue: false,
                    currentOperation: null
                });
                break;
            case "subtract":
                if(this.state.hasDecimal){
                    num = parseFloat(this.state.value+"."+this.state.decimal);
                }
                else{
                    num = this.state.value;
                }
                this.setState({
                    value: [(this.state.storedValue*10000) - (num*10000)]/10000,
                    hasDecimal: false,
                    decimal: null,
                    hasValue: false,
                    currentOperation: null
                });
                break;
            case "multiply":
                
                if(this.state.hasDecimal){
                    num = parseFloat(this.state.value+"."+this.state.decimal);
                    
                }
                else{
                    num = this.state.value;
                }
               
                this.setState({
                    value: (num*10000) * (this.state.storedValue*10000)/100000000,
                    hasDecimal: false,
                    decimal: null,
                    hasValue: false,
                    currentOperation: null
                });
                
                break;
            case "divide":
                if(this.state.hasDecimal){
                    num = parseFloat(this.state.value+"."+this.state.decimal);
                }
                else{
                    num = this.state.value;
                }
                this.setState({
                    value: (this.state.storedValue/10000) / (num/10000),
                    hasDecimal: false,
                    decimal: null,
                    hasValue: false,
                    currentOperation: null
                });
                break;
            default:
                
        }
    }

    multiply() {
        this.eval();
        var num;
        if(this.state.hasDecimal){
            num = parseFloat(this.state.value+"."+this.state.decimal);
            
        }
        else{
            num = this.state.value;
        }
        if(this.state.currentOperation==null){
            this.setState({
                currentOperation: "multiply",
                storedValue: num,
                value: null,
                decimal: null,
                hasDecimal: false
            });
        }
        else{
            this.setState({
                currentOperation: "multiply"
            });
        }
    }

    divide() {
        this.eval();
        var num;
        if(this.state.hasDecimal){
            num = parseFloat(this.state.value+"."+this.state.decimal);
        }
        else{
            num = this.state.value;
        }
        if(this.state.currentOperation==null){
            this.setState({
                currentOperation: "divide",
                storedValue: num,
                value: null,
                decimal: null,
                hasDecimal: false
            });
        }
        else{
            this.setState({
                currentOperation: "divide"
            });
        }
    }

    subtract() {
        this.eval();
        var num;
        if(this.state.hasDecimal){
            num = parseFloat(this.state.value+"."+this.state.decimal);
        }
        else{
            num = this.state.value;
        }
        if(this.state.currentOperation==null){
            this.setState({
                currentOperation: "subtract",
                storedValue: num,
                value: null,
                decimal: null,
                hasDecimal: false
            });
        }
        else{
            this.setState({
                currentOperation: "subtract"
            });
        }
        
    }

    add() {
        
        
        var num;
        if(this.state.hasDecimal){
            num = parseFloat(this.state.value+"."+this.state.decimal);
        }
        else{
            num = this.state.value;
        }
        if(this.state.currentOperation==null){
            this.eval();
            this.setState({
                currentOperation: "add",
                storedValue: num,
                value: null,
                decimal: null,
                hasDecimal: false
            });
        }
        else{
            this.setState({
                currentOperation: "add"
            });
        }
        
    }

    equals = () => {
       
        this.eval();
    };

    number(num) {
        
        if(!this.state.hasValue){
            this.state.hasDecimal
            ? this.setState({
                decimal: num,
                hasValue: true
            })
            : this.setState({
                value: num,
                hasValue: true
            })
            
        }
        else{
            this.state.hasDecimal
            ? this.setState({
                decimal: this.state.decimal * 10 + num
            })
            : this.setState({
                value: this.state.value * 10 + num
            })
        }
        
        

    }

    numberClicked(num) {
        return () => {
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
            <div className='Calculator'>
                <div className='value'>
                {
                    this.state.value != null
                        ? 
                            this.state.value.toString()
                        : 
                            ''
                }
                    
                {
                    this.state.hasDecimal
                    ? 
                        '.' + 
                        (
                            this.state.decimal
                                ? 
                                    this.state.decimal.toString()
                                : 
                                    ''
                            )
                    : 
                        ''
                }
                </div>
                <div className='Wrapper'>
                    {/* TOP ROW  */}
                    <div className='cell clear' onClick={this.clearAll}>AC</div>
                    <div className='cell clear span-two' onClick={this.clearCurrent}>C</div>
                    <div className='cell divide operation' onClick={this.divide}>/</div>
                    {/* SECOND TOP ROW  */}
                    <div className='cell number' onClick={this.numberClicked(7)}>7</div>
                    <div className='cell number' onClick={this.numberClicked(8)}>8</div>
                    <div className='cell number' onClick={this.numberClicked(9)}>9</div>
                    <div className='cell multiply operation' onClick={this.multiply}>x</div>
                    {/* TOP ROW  */}
                    <div className='cell number' onClick={this.numberClicked(4)}>4</div>
                    <div className='cell number' onClick={this.numberClicked(5)}>5</div>
                    <div className='cell number' onClick={this.numberClicked(6)}>6</div>
                    <div className='cell subtract operation' onClick={this.subtract}>-</div>
                    {/* TOP ROW  */}
                    <div className='cell number' onClick={this.numberClicked(1)}>1</div>
                    <div className='cell number' onClick={this.numberClicked(2)}>2</div>
                    <div className='cell number' onClick={this.numberClicked(3)}>3</div>
                    <div className='cell add operation' onClick={this.add}>+</div>
                    {/* BOTTOM ROW  */}
                    <div className='cell number bottom-left' onClick={this.numberClicked(0)}>0</div>
                    <div className='cell decimal' onClick={this.decimal}>.</div>
                    <div className='cell equals operation' onClick={this.eval}>=</div>
                </div>
            </div>
        );
    }
}

export default Calculator;
