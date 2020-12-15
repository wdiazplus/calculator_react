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
  render() {
    return (
      <div className="container">
        <div className="container__title">
          <Title NameTitle="Enconta Calculator" />
        </div>
        <div className="screen">
          <div className="screen__input">
            <Input />
          </div>  
          <div className="screen__output">
            <h2 className="screen__result--equal">=</h2>
            <Output />
          </div>
        </div>
        <div className="buttons">
          <div className="buttons__left">
            <Button  name="+" />  
            <Button  name="-" />  
            <Button  name="x" />  
            <Button  name="7" />  
            <Button  name="8" />  
            <Button  name="9" />  
            <Button  name="4" />  
            <Button  name="5" />  
            <Button  name="6" />  
            <Button  name="1" />  
            <Button  name="2" />  
            <Button  name="3" />  
            <Button  name="0" />  
            <Button  name="." />  
            <Button  name="DEL" />  
          </div>
          <div className="buttons__right">
            <Button  name="/" />  
            <Button  name="AC" />  
            <Button  name="=" /> 
          </div>
        </div>  
      </div>
    );
  }
}

export default Calculator;
