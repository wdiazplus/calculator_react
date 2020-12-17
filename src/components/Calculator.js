import React, { Component } from 'react';
import './css/Calculator.css';
import './css/Button.css';
import './css/Input.css';
import './css/Output.css';
import './css/Title.css';
import Title from './Title';
import Button from './Button';
import Input from './Input';
import Output from './Output';


// Create principal component Calculator
class Calculator extends Component {
  constructor(props) {
    super(props);
    // Initial States
    this.state = { inputValue: '', outputValue: '0' };
  }

  // Function that add value into input component
  addValue = (value) => {
    const { inputValue } = this.state;
    return () => {
      this.setState({
        inputValue: `${inputValue}${value}`,
        outputValue: this.verifiedOperationLive(`${inputValue}${value}`),
      });
    };
  };

  clean = () => this.setState({ inputValue: '', outputValue: '0' });

  delete = () => {
    const { inputValue } = this.state;
    return this.setState({ inputValue: `${inputValue}`.slice(0, -1) });
  };
  // function that return result of the actual expression in the input
  result = () => {
    const { inputValue } = this.state;
    // Conditional when divide by 0
    if (/.\/0$/.test(inputValue) === true) {
      return this.setState({outputValue: 'Error' });
    } 
    try {
      return this.setState({ inputValue:'',
        outputValue: eval(`${inputValue}`).toString().slice(0, 8),
      });
    } catch (err) {
      return this.setState({inputValue:'Return with C',  outputValue:'Error' });
    }
  };

  // function that verified input expression and return value in real time in the output component 
  verifiedOperationLive = (expression) => {
    if (/.*\D$/.test(expression) === true) {
      let newExpression= expression.slice(0,-1)
      return eval(newExpression).toString().slice(0, 8);
    } else if (/.*\d$/.test(expression) === true) {
      return eval(expression).toString().slice(0, 8)
    }else if (/^\d?/.test(expression) === true){
      return expression
    }
    console.log('Only number case');
  };
  // Structure calculator based in components
  render() {
    return (
      <div className="container">
        <div className="container__title">
          <Title NameTitle="Enconta Calculator" />
        </div>
        <div className="screen">
          <div className="screen__input">
            <Input text={this.state.inputValue} />
          </div>
          <div className="screen__output">
            <h2 className="screen__result--equal">=</h2>
            <Output text={this.state.outputValue} />
          </div>
        </div>
        <div className="buttons">
          <div className="buttons__left">
            <Button clic={this.addValue('+')} typeButton="primary" name="+" />
            <Button clic={this.addValue('-')} typeButton="primary" name="-" />
            <Button clic={this.addValue('*')} typeButton="primary" name="x" />
            <Button clic={this.addValue('7')} typeButton="primary" name="7" />
            <Button clic={this.addValue('8')} typeButton="primary" name="8" />
            <Button clic={this.addValue('9')} typeButton="primary" name="9" />
            <Button clic={this.addValue('4')} typeButton="primary" name="4" />
            <Button clic={this.addValue('5')} typeButton="primary" name="5" />
            <Button clic={this.addValue('6')} typeButton="primary" name="6" />
            <Button clic={this.addValue('1')} typeButton="primary" name="1" />
            <Button clic={this.addValue('2')} typeButton="primary" name="2" />
            <Button clic={this.addValue('3')} typeButton="primary" name="3" />
            <Button clic={this.addValue('0')} typeButton="primary" name="0" />
            <Button clic={this.addValue('.')} typeButton="primary" name="." />
            <Button clic={this.delete} typeButton="secondary" name="DEL" />
          </div>
          <div className="buttons__right">
            <Button clic={this.addValue('/')} typeButton="primary" name="/" />
            <Button clic={this.clean} typeButton="secondary" name="C" />
            <Button clic={this.result} typeButton="equal" name="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
