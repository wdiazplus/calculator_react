import React,{ Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="title">Enconta Calculator</h3>
        <h1 className="display">5+5+</h1>
        <div className="result">
          <h2 className="result__equal">=</h2>
          <h1 className="result__answer">10</h1>
        </div>
        <div className="buttons">
          <input type="button" onClick="state" value="+" />
          <input type="button" onClick="state" value="-" />
          <input type="button" onClick="state" value="X" />
          <input type="button" onClick="state" value="/" />
          <input type="button" onClick="state" value="7" />
          <input type="button" onClick="state" value="8" />
          <input type="button" onClick="state" value="9" />
          <input type="button" onClick="state" value="AC" />
          <input type="button" onClick="state" value="4" />
          <input type="button" onClick="state" value="5" />
          <input type="button" onClick="state" value="6" />
          <input type="button" onClick="state" value="=" />
          <input type="button" onClick="state" value="1" />
          <input type="button" onClick="state" value="2" />
          <input type="button" onClick="state" value="3" />
          <input type="button" onClick="state" value="0" />
          <input type="button" onClick="state" value="." />
          <input type="button" onClick="state" value="DEL" />
        </div>
      </div>
    );
  }
}

export default Calculator;
