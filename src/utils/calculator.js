// Функції калькулятора для тестування

/**
 * Додає два числа
 * @param {number} a - перше число
 * @param {number} b - друге число
 * @returns {number} сума чисел
 */
export const add = (a, b) => {
  return a + b;
};

/**
 * Віднімає друге число від першого
 * @param {number} a - перше число
 * @param {number} b - друге число
 * @returns {number} різниця чисел
 */
export const subtract = (a, b) => {
  return a - b;
};

/**
 * Множить два числа
 * @param {number} a - перше число
 * @param {number} b - друге число
 * @returns {number} добуток чисел
 */
export const multiply = (a, b) => {
  return a * b;
};

/**
 * Ділить перше число на друге
 * @param {number} a - перше число
 * @param {number} b - друге число
 * @returns {number} частка чисел
 * @throws {Error} якщо b дорівнює 0
 */
export const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Ділення на нуль неможливе");
  }
  return a / b;
};