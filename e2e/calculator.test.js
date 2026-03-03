import { test, expect } from '@playwright/test';

test.describe('Калькулятор E2E тести', () => {
  
  test('повинен правильно додавати два числа', async ({ page }) => {
    // Відкриваємо головну сторінку
    await page.goto('http://localhost:5173');
    
    // Вводимо перше число
    await page.fill('input[placeholder="Число 1"]', '5');
    
    // Вибираємо операцію додавання (за замовчуванням уже вибрано '+')
    
    // Вводимо друге число
    await page.fill('input[placeholder="Число 2"]', '3');
    
    // Натискаємо кнопку "="
    await page.click('button:has-text("=")');
    
    // Перевіряємо результат
    await expect(page.locator('.result')).toContainText('8');
  });

  test('повинен правильно віднімати числа', async ({ page }) => {
    await page.goto('http://localhost:5173');
    
    await page.fill('input[placeholder="Число 1"]', '10');
    
    // Вибираємо операцію віднімання
    await page.selectOption('select', 'subtract');
    
    await page.fill('input[placeholder="Число 2"]', '4');
    await page.click('button:has-text("=")');
    
    await expect(page.locator('.result')).toContainText('6');
  });

  test('повинен правильно множити числа', async ({ page }) => {
    await page.goto('http://localhost:5173');
    
    await page.fill('input[placeholder="Число 1"]', '6');
    await page.selectOption('select', 'multiply');
    await page.fill('input[placeholder="Число 2"]', '7');
    await page.click('button:has-text("=")');
    
    await expect(page.locator('.result')).toContainText('42');
  });

  test('повинен правильно ділити числа', async ({ page }) => {
    await page.goto('http://localhost:5173');
    
    await page.fill('input[placeholder="Число 1"]', '15');
    await page.selectOption('select', 'divide');
    await page.fill('input[placeholder="Число 2"]', '3');
    await page.click('button:has-text("=")');
    
    await expect(page.locator('.result')).toContainText('5');
  });

  test('повинен показувати помилку при діленні на нуль', async ({ page }) => {
    await page.goto('http://localhost:5173');
    
    await page.fill('input[placeholder="Число 1"]', '10');
    await page.selectOption('select', 'divide');
    await page.fill('input[placeholder="Число 2"]', '0');
    await page.click('button:has-text("=")');
    
    await expect(page.locator('.result')).toContainText('Ділення на нуль неможливе');
  });
});