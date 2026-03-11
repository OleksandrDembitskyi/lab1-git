import './Footer.css';

// Компонент Footer відповідає за нижню частину сторінки
// Відображає інформацію про авторські права
function Footer() {
  return (
    <footer className="footer">
      {/* Текст копірайту з поточним роком та назвою роботи */}
      <p>© 2026 Простий калькулятор. Навчальний проєкт.</p>
    </footer>
  );
}

export default Footer;