import { useState } from 'react';
import '../App.css'; // ✅ Import CSS file

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch {
      setExpression('Error');
    }
  };

  const clear = () => setExpression('');

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{expression || '0'}</div>
        <div className="buttons">
          {['7','8','9','/',
            '4','5','6','*',
            '1','2','3','-',
            '0','.','=','+'].map((btn) => (
            <button
              key={btn}
              className="button"
              onClick={() => btn === '=' ? calculate() : handleClick(btn)}
            >
              {btn}
            </button>
          ))}
          <button className="button clear" onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;