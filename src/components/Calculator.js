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

    this.state = { inputValue: '', outputValue: '0' };
  }

addValue = (value)=>{
  const { inputValue } = this.state

  return ()=>{
    this.setState({ inputValue : `${inputValue}${value}` })
  }
}

clean = ()=>{
  return this.setState({ inputValue : '' , outputValue:'0'})
}

delete = ()=>{
  const { inputValue } = this.state
  return this.setState({ inputValue : `${inputValue}`.slice(0,-1) })
}

result = ()=>{
  const { inputValue } = this.state
  try{
    return this.setState({ outputValue : eval(`${inputValue}`).toString().slice(0,8) })
  }
  catch(err){
    return this.setState({ inputValue : 'Error' })
  }
}


render(){
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
          <Button  clic={this.addValue("+")}  typeButton="primary" name="+" />
          <Button  clic={this.addValue("-")}  typeButton="primary" name="-" />
          <Button  clic={this.addValue("*")}  typeButton="primary" name="x" />
          <Button  clic={this.addValue("7")}  typeButton="primary" name="7" />
          <Button  clic={this.addValue("8")}  typeButton="primary" name="8" />
          <Button  clic={this.addValue("9")}  typeButton="primary" name="9" />
          <Button  clic={this.addValue("4")}  typeButton="primary" name="4" />
          <Button  clic={this.addValue("5")}  typeButton="primary" name="5" />
          <Button  clic={this.addValue("6")}  typeButton="primary" name="6" />
          <Button  clic={this.addValue("1")}  typeButton="primary" name="1" />
          <Button  clic={this.addValue("2")}  typeButton="primary" name="2" />
          <Button  clic={this.addValue("3")}  typeButton="primary" name="3" />
          <Button  clic={this.addValue("0")}  typeButton="primary" name="0" />
          <Button  clic={this.addValue(".")}  typeButton="primary" name="." />
          <Button  clic={this.delete}  typeButton="secondary" name="DEL" />
        </div>
        <div className="buttons__right">
          <Button  clic={this.addValue("/")}  typeButton="primary" name="/" />
          <Button  clic={this.clean}  typeButton="secondary" name="C" />
          <Button  clic={this.result}  typeButton="equal" name="=" />
        </div>
      </div>
    </div>
  );
}

}

export default Calculator;
