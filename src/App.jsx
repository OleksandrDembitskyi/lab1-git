import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { add, subtract, multiply, divide } from './utils/calculator';
import './App.css';
import posthog from 'posthog-js';
import { useFeatureFlagEnabled } from '@posthog/react';
import * as Sentry from '@sentry/react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  // Вставляю змінні оточення
  const appTitle = import.meta.env.VITE_APP_TITLE;
  const appEnv = import.meta.env.VITE_APP_ENV;
  
  // Feature flag для кнопки очищення
  const showClearButton = useFeatureFlagEnabled('show-clear-button');

  // Встановлення контексту користувача для Sentry
  useEffect(() => {
    Sentry.setUser({
      id: "12345",
      email: "oleksandr.dembitskyi.pp.2023@lpnu.ua",
      segment: "student_user"
    });
  }, []);

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
      
      // Подія успішного обчислення
      posthog.capture('calculation_performed', {
        operation: operation,
        num1: num1,
        num2: num2,
        result: res
      });
      
    } catch (error) {
      setResult(error.message);
      
      // Подія помилки (ділення на нуль)
      posthog.capture('error_occurred', {
        error_type: 'division_by_zero',
        operation: operation,
        num1: num1,
        num2: num2
      });
    }
  };

  const handleOperationChange = (e) => {
    const selectedOp = e.target.value;
    setOperation(selectedOp);
    
    // Подія вибору операції
    posthog.capture('operation_selected', {
      operation: selectedOp
    });
  };

  const handleClear = () => {
    setNum1(0);
    setNum2(0);
    setOperation('add');
    setResult(null);
    posthog.capture('clear_button_clicked');
  };

  // Функція для генерації тестової помилки (Sentry) — кожен клік створює нову унікальну помилку
  const breakTheWorld = () => {
    const timestamp = new Date().toLocaleTimeString();
    const errorId = Math.random().toString(36).substring(2, 10);
    throw new Error(`[${timestamp}] Test error from Sentry! ID: ${errorId}`);
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

        <h1>Простий калькулятор</h1>
        
        {/* Додаю заголовок */}
        <h2>{appTitle}</h2>
        
        <div className="calculator">
          <input 
            type="number" 
            value={num1} 
            onChange={(e) => setNum1(Number(e.target.value))}
            placeholder="Число 1"
          />
          <select value={operation} onChange={handleOperationChange}>
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
          
          {/* Feature flag: кнопка "Очистити" показується тільки якщо прапорець увімкнений */}
          {showClearButton && (
            <button onClick={handleClear} className="clear-btn">
              Очистити
            </button>
          )}
          
          {/* Кнопка для тесту Sentry — кожен клік створює нову унікальну помилку */}
          <button 
            onClick={breakTheWorld}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#ff6b6b',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '10px'
            }}
          >
            Break the world
          </button>
          
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