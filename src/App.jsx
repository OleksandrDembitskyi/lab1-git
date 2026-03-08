import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { add, subtract, multiply, divide } from './utils/calculator';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  // Вставляю змінні оточення
  const appTitle = import.meta.env.VITE_APP_TITLE;
  const appEnv = import.meta.env.VITE_APP_ENV;

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
        {/* Вставляю відображення змінних */}
        <div style={{ 
          position: 'fixed', 
          top: 10, 
          right: 10, 
          padding: '5px 10px', 
          background: appEnv === 'development' ? '#ff6b6b' : '#4caf50', 
          color: 'white', 
          borderRadius: '4px',
          fontSize: '12px',
          zIndex: 1000
        }}>
          {appEnv} mode
        </div>

        <h1>Лабораторна робота №3</h1>
        <p>Тестування: простий калькулятор</p>
        
        {/* Додаю заголовок */}
        <h2>{appTitle}</h2>
        
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