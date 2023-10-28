import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Erro');
    }
  };

  return (
    <div>
      <div>
        <input type="text" value={input} readOnly />
      </div>
      <div>
        <Button onClick={() => handleButtonClick('1')}>1</Button>
        <Button onClick={() => handleButtonClick('2')}>2</Button>
        <Button onClick={() => handleButtonClick('+')}>+</Button>
      </div>
      <div>
        <Button onClick={() => handleButtonClick('3')}>3</Button>
        <Button onClick={() => handleButtonClick('4')}>4</Button>
        <Button onClick={() => handleButtonClick('-')}>-</Button>
      </div>
      <div>
        <Button onClick={() => handleButtonClick('5')}>5</Button>
        <Button onClick={() => handleButtonClick('6')}>6</Button>
        <Button onClick={() => handleButtonClick('*')}>*</Button>
      </div>
      <div>
        <Button onClick={() => handleButtonClick('7')}>7</Button>
        <Button onClick={() => handleButtonClick('8')}>8</Button>
        <Button onClick={() => handleButtonClick('/')}>/</Button>
      </div>
      <div>
        <Button onClick={() => handleButtonClick('9')}>9</Button>
        <Button onClick={() => handleButtonClick('0')}>0</Button>
        <Button onClick={calculate}>=</Button>
      </div>
      <div>
        <Button onClick={() => setInput('')}>C</Button>
      </div>
    </div>
  );
};

export default Calculator;