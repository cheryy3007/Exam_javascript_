// Создаем контейнер для калькулятора
const calculator = document.createElement('div');
calculator.style.width = "300px";
calculator.style.margin = "50px auto";
calculator.style.padding = "20px";
calculator.style.borderRadius = "10px";
calculator.style.textAlign = "center";
calculator.style.backgroundColor = "#f9f9f9";
calculator.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";


// Запрашиваем числа и оператор через prompt
const num1 = parseFloat(prompt('Введите 1-е число:'));
const operator = prompt('Введите оператор (+, -, *, /):');
const num2 = parseFloat(prompt('Введите 2-е число:'));

// Переменная для хранения результата
let result;

// Выполняем вычисления в зависимости от оператора
if (operator === '+') {
  result = num1 + num2;
} else if (operator === '-') {
  result = num1 - num2;
} else if (operator === '*') {
  result = num1 * num2;
} else if (operator === '/') {
  if (num2 !== 0) {
    result = num1 / num2;
  } else {
    result = 'Ошибка: деление на ноль!';
  }
} else {
  result = 'Неизвестный оператор!';
}

// Создаем div для примера с увеличенным размером
const exampleDiv = document.createElement('div');
exampleDiv.style.marginBottom = "20px";
exampleDiv.style.backgroundColor = '#FFEB3B'; // Желтый фон для примера
exampleDiv.style.padding =  "39px"; // Увеличим отступы
exampleDiv.style.borderRadius =  "px";
exampleDiv.style.fontSize =  "8px"; // Увеличим размер шрифта
exampleDiv.style.fontWeight =  "old"; // Сделаем шрифт жирным
exampleDiv.style.boxShadow =  " 4px 8px rgba(0, 0, 0, 0.1)"; // Добавим тень

const exampleText = document.createElement('p');
exampleText.textContent = ` ${num1} ${operator}  ${num2}`;
exampleText.style.fontSize = "32px";
exampleText.style.color = 
exampleDiv.appendChild(exampleText);

// Создаем кнопку Check
const checkButton = document.createElement('button');
checkButton.textContent = "Проверить";
checkButton.style.marginTop =  "0px";
checkButton.style.padding = "15px";
checkButton.style.backgroundColor = "#4CAF50";
checkButton.style.color = "white";
checkButton.style.border = "none";
checkButton.style.borderRadius = "5px";
checkButton.style.cursor = "pointer";
checkButton.style.transition = "all 0.3s"; // Плавное изменение

// При нажатии на кнопку, увеличиваем её и показываем результат внутри
checkButton.addEventListener('click', () => {
  checkButton.style.transform = 'scale(1.2)'; // Увеличиваем кнопку
  checkButton.textContent = `Ответ: ${result}`; // Показываем результат на кнопке
});

// Добавляем блоки и кнопку в калькулятор
calculator.appendChild(exampleDiv);
calculator.appendChild(checkButton);

// Добавляем калькулятор на страницу
document.body.appendChild(calculator);













