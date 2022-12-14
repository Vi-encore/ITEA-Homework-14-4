//6. Створити гру "Камінь-Ножиці-Папір".
//		Вибір комп'ютера визначається рядком:
//
//		var computerChoice = Math.random();
//		alert(computerChoice);
//
//		let comp = getComputerChoice();
//		let user = getUserChoice();
//		function game(comp, user) {
//
//		}
//
//		Math.random() видає довільне число у проміжку від 0 до 1, виходячи з цього можна побудувати принцип вибору рішення комп'ютера.
//		Запросити у користувача один із трьох варіантів "Камінь-Ножиці-Папір"
//		Порівняти відповідь користувача та комп'ютера, визначити хто виграв (або нічия)
//		Запитати користувача, чи хоче він повторити, якщо "так", запустити гру заново

function game(comp, user) {
  alert("Let's play Rock-Paper-Scissors!");
  alert("Rock = 1, Scissors = 2, Paper = 3");
  do {
    let comp = Math.round(Math.random() * (3 - 1) + 1);
    // alert(comp);
    let user = +prompt("Enter your number:");
    let result;

    if (!Number(user)) {
      result = "Enter a NUMBER!";
    } else if (user < 1 || user > 3) {
      result = "Enter a number that is less than 3 and greater than 1!";
    } else {
      if (user === 1) {
        if (comp === 1) {
          result = `You chose the Stone, the computer chose the Stone. You have a DRAW!`;
        } else if (comp === 2) {
          result = `You chose Rock, the computer chose Scissors. You WON!`;
        } else {
          result = `You chose Rock, the computer chose Paper. You LOST!`;
        }
      } else if (user === 2) {
        if (comp === 1) {
          result = `You chose Scissors, the computer chose Rock. You LOST!`;
        } else if (comp === 2) {
          result = `You chose Scissors, the computer chose Scissors. You have a DRAW!`;
        } else {
          result = `You chose Scissors, the computer chose Paper. You WON!`;
        }
      } else {
        if (comp === 1) {
          result = `You chose Paper, the computer chose Stone. You WON!`;
        } else if (comp === 2) {
          result = `You chose Paper, the computer chose Scissors. You LOST!`;
        } else {
          result = `You chose Paper, the computer chose Paper. You have a DRAW!`;
        }
      }
    }

    alert(result);

    answer = prompt("Want to play again? Yes/No").toLowerCase();
  } while (answer === "yes");
}

game();
