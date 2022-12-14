//2. Створити функцію, що зводить число до ступеня, число і сам ступінь вводиться користувачем
//		Перевірити числа на коректність

function calcExponent(a, b) {
  alert("Let's do the exponentiation!");
  a = +prompt("Enter the number to be raised to the power:");
  b = +prompt("Enter the number that will be the degree of reduction:");
  let result;

  if (isNaN(a) || isNaN(b)) {
    result = "You have entered incorrect data!";
  } else {
    result = Math.pow(a, b);
  }

  alert(result);
}

calcExponent();
