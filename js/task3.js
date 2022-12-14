//3. Допишіть функцію, яка визначить, чи парне число (рішення має бути в один рядок).
//		Функція має повернути "Even" або "Odd";
//
//		function isEven(num) {
//			// your code here
//		}
//

let isEven = (num) => {
  num = +prompt("Enter a number to determine whether it is even:");

  let result;
  if (!Number(num)) {
    result = "Incorrect data was output! Enter a NUMBER!";
  } else {
    num % 2 === 0
      ? (result = `The number ${num} is even`)
      : (result = `The number ${num} is odd`);
  }

  alert(result);
};

isEven();
