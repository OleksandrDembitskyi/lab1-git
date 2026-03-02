import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { add, subtract, multiply, divide } from './utils/calculator';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const calculate = () => {
    try {
      let res;
      switch (operation) {
        case 'add':
          res = add(num1, num2);
          break;
        case 'subtract':
          res = subtract(num1, num2);
          break;
        case 'multiply':
          res = multiply(num1, num2);
          break;
        case 'divide':
          res = divide(num1, num2);
          break;
        default:
          res = 0;
      }
      setResult(res);
    } catch (error) {
      setResult(error.message);
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <h1>Лабораторна робота №2</h1>
        <p>Тестування: простий калькулятор</p>
        
        <div className="calculator">
          <input 
            type="number" 
            value={num1} 
            onChange={(e) => setNum1(Number(e.target.value))}
            placeholder="Число 1"
          />
          <select value={operation} onChange={(e) => setOperation(e.target.value)}>
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">*</option>
            <option value="divide">/</option>
          </select>
          <input 
            type="number" 
            value={num2} 
            onChange={(e) => setNum2(Number(e.target.value))}
            placeholder="Число 2"
          />
          <button onClick={calculate}>=</button>
          {result !== null && (
            <div className="result">
              Результат: <strong>{result}</strong>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
