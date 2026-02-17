# Лабораторна робота №1: Управління кодом в Git

## Мета роботи
Опанувати професійні навички роботи з розподіленою системою контролю версій Git. 
Навчитися організовувати структуру проєкту, застосовувати стратегії розгалуження, 
працювати з віддаленими репозиторіями та впроваджувати процеси спільної розробки.

## Статус релізу
Це стабільна версія (main)

## Опис проєкту
Цей проєкт створено для виконання лабораторної роботи №1 з дисципліни "Управління ІТ-проєктами". 
Проєкт демонструє базову структуру React-додатку та роботу з Git.

## Стек технологій
- React 18
- Vite
- JavaScript
- HTML5/CSS3

## Інструкція з запуску

### 1. Клонування репозиторію
```bash
git clone https://github.com/OleksandrDembitskyi/lab1-git.git
cd lab1-git
```

### 2. Встановлення залежностей
```bash
npm install
```

### 3. Запуск в режимі розробки
```bash
npm run dev
```

### 4. Відкриття в браузері
Після запуску перейдіть за адресою:
```
http://localhost:5173
```

### 5. Збірка для продакшену
```bash
npm run build
```

### 6. Попередній перегляд збірки
```bash
npm run preview
```

## Структура проєкту
```
lab1-git/
├── public/              # Статичні файли
├── src/                  # Вихідний код
│   ├── assets/           # Зображення та ресурси
│   ├── components/       # React-компоненти
│   ├── App.css           # Стилі головного компонента
│   ├── App.jsx           # Головний компонент
│   ├── index.css         # Глобальні стилі
│   └── main.jsx          # Точка входу
├── .gitignore            # Файли, що ігноруються Git
├── index.html            # Головний HTML-файл
├── package.json          # Залежності та скрипти
├── vite.config.js        # Конфігурація Vite
└── README.md             # Документація
```

## Використані Git-команди

### Ініціалізація
```bash
git init
git branch -M main
git config --global user.name "Дембіцький Олександр"
git config --global user.email "oleksandr.dembitskyi.pp.2023@lpnu.ua"
```

### Робота з віддаленим репозиторієм
```bash
git remote add origin https://github.com/OleksandrDembitskyi/lab1-git.git
git push -u origin main
```

### Робота з гілками
```bash
git branch develop
git checkout -b feature/initial-layout
```

## Автор
**Дембіцький Олександр**  
Група: ПП-32-1  
Пошта: oleksandr.dembitskyi.pp.2023@lpnu.ua
