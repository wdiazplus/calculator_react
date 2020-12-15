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

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: '' , outputValue: '0' };
  }

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
            <Button typeButton="primary" name="+" />
            <Button typeButton="primary" name="-" />
            <Button typeButton="primary" name="x" />
            <Button typeButton="primary" name="7" />
            <Button typeButton="primary" name="8" />
            <Button typeButton="primary" name="9" />
            <Button typeButton="primary" name="4" />
            <Button typeButton="primary" name="5" />
            <Button typeButton="primary" name="6" />
            <Button typeButton="primary" name="1" />
            <Button typeButton="primary" name="2" />
            <Button typeButton="primary" name="3" />
            <Button typeButton="primary" name="0" />
            <Button typeButton="primary" name="." />
            <Button typeButton="secondary" ame="DEL" />
          </div>
          <div className="buttons__right">
            <Button typeButton="primary" name="/" />
            <Button typeButton="secondary"  name="AC" />
            <Button typeButton="equal" name="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
