let input = document.querySelector(".field__form__input");
let btn = document.querySelector(".field__form__btn");
let check = document.querySelector(".result__check__out");
let help = document.querySelector(".result__help__out");
let count = document.querySelector(".result__count__out");

let item = 0;
let randNum = 1 + Math.floor(Math.random() * 10);
let userNum;

btn.onclick = function (evt) {
  evt.preventDefault();
  userNum = input.value;
  console.log(userNum, randNum);
  // Проверка ввода на числа
  if (isNaN(userNum)) {
    check.textContent = "Введите корректные числа!";
    help.textContent = "Если хотите начать заново, нажмите Новая игра!";
    count.textContent = "";
    
    return;
  }


  if (userNum > randNum) {
    check.textContent = "Не верно!";
    help.textContent = "Слишком много!";
    item++;
    count.textContent = item;
    if (item>5) {
        count.textContent = "Попытки закончились... ВЫ ПРОИГРАЛИ!!! Если хотите начать заново, нажмите Новая игра!";
        return;
    }
  } else if (userNum < randNum) {
    check.textContent = "Не верно!";
    help.textContent = "Слишком мало!";
    item++;
    count.textContent = item;
    if (item>5) {
        count.textContent = "Попытки закончились... ВЫ ПРОИГРАЛИ!!! Если хотите начать заново, нажмите Новая игра!";
        return;
    }
  } else {
    check.textContent = "ПОБЕДА!";
    help.textContent = "Загадано именно это число!!!";
    item++;
    count.textContent = item;
    if (item>5) {
        count.textContent = "Попытки закончились... ВЫ ПРОИГРАЛИ!!! Если хотите начать заново, нажмите Новая игра!";
        return;
        
    }
  }
};