import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <h1>Лабораторна робота №1</h1>
        <p>Управління кодом та організація робочого простору в Git</p>
        <p>Студент: Дембіцький Олександр</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
