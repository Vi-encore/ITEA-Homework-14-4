//5. Напишіть функцію яка б перевертала наданий рядок
//        Можливо, вам доведеться перетворити рядок на масив, перш ніж ви можете звернути його.
//        Ваш результат має бути рядком.
//        "something"
//
//		"test" => "tset"
//

function reverseWord(word) {
  word = prompt("Enter the word to reverse:");
  let result;

  if (word === "" || Number(word)) {
    result = "You have entered incorrect data!";
  } else {
    result = word.split("").reverse().join("").toString();
  }
  console.log(typeof result);
  alert(result);
}

reverseWord();
