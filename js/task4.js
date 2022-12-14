//4. Напишіть функцію, яка повертає n число Фібоначчі.
//		Число, яке має повернути функція, вводить користувач.
//		Для вирішення використовуйте цикл.
//
//		Користувач ввів: 6
//		Ряд Фібоначчі: 1, 1, 2, 3, 5, 8, 13, ...
//		Функція має повернути: 8

function calcFib(n) {
  let a = 1;
  let b = 1;
  let result;
  n = +prompt("Enter a number that will return the Fibonacci number");
  if (!Number(n)) {
    result = "You have entered incorrect data. Enter a NUMBER!";
  } else {
    for (let i = 3; i <= n; i++) {
      let sumFib = a + b;
      a = b;
      b = sumFib;
    }
    result = b;
  }

  alert(result);
}

calcFib();
