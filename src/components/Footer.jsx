import './Footer.css';

// Компонент Footer відповідає за нижню частину сторінки
// Відображає інформацію про авторські права
function Footer() {
  return (
    <footer className="footer">
      {/* Текст копірайту з поточним роком та назвою роботи */}
      <p>© 2026 Лабораторна робота №1. Всі права захищені.</p>
    </footer>
  );
}

export default Footer;