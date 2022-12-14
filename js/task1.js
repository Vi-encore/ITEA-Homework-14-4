// 1.	Створити функцію calculate(a, b, sign), де a та b — два числа, sign — знак арифметичної операції.
//		Функція повинна розраховувати результат операції, з переданого їй знака.
//		Функція повинна перевіряти коректність введених чисел та знаку операції (+, -, /, *).
//		Усі аргументи для функції прийняти від користувача.

function calculate(a, b, sign) {
  alert("Let's do a simple arithmetic operation!");
  a = +prompt("Enter the first number:");
  b = +prompt("Enter the second number:");
  sign = prompt("Enter the sign of the arithmetic operation:");
  let operators = "+-*/";
  let result;

  if (isNaN(a) || isNaN(b)) {
    result = "You have entered incorrect data!";
  } else if (!operators.includes(sign)) {
    result = "You entered an incorrect arithmetic operation sign!";
  } else if (a === "" || b === "" || sign === "") {
    result = "You have not entered the required data!";
  } else {
    if (sign === "+") {
      result = a + b;
    } else if (sign === "-") {
      result = a - b;
    } else if (sign === "*") {
      result = a * b;
    } else {
      result = a / b;
    }
  }
  alert(result);
}

calculate();
