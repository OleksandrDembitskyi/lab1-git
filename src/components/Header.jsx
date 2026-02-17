import './Header.css';

// Компонент Header відповідає за верхню частину сторінки
// Містить назву проєкту та навігаційне меню
function Header() {
  return (
    <header className="header">
      {/* Заголовок сайту */}
      <h1>Git Lab Work</h1>
      
      {/* Навігаційне меню з трьома посиланнями */}
      <nav>
        <a href="/">Home</a>      {/* Головна сторінка */}
        <a href="/about">About</a> {/* Сторінка "Про нас" */}
        <a href="/contact">Contact</a> {/* Сторінка контактів */}
      </nav>
    </header>
  );
}

export default Header;