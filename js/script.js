// Task #1
const a = +prompt("Введите число '0':");
a === 0 ? alert("Верно") : alert("Неверно");

//Task#2
const a = +prompt("Введите число, которое больше нуля:");
a > 0 ? alert("Верно") : alert("Неверно");

// Task#3
const a = +prompt("Введите число, которое меньше нуля:");
a < 0 ? alert("Верно") : alert("Неверно");

// Task#4
const a = +prompt("Введите число, которое больше или равно нулю:");
a >= 0 ? alert("Верно") : alert("Неверно");

// Task#5
const a = +prompt("Введите число, которое меньше или равно нулю:");
a <= 0 ? alert("Верно") : alert("Неверно");

// Task#6
const a = +prompt("Введите число, которое не равно нулю:");
a !== 0 ? alert("Верно") : alert("Неверно");

// Task#7
const a = prompt("Введите слово 'test':");
a === "test" ? alert("Верно") : alert("Неверно");

// Task#8
const a = +prompt("Введите число '1':");
a === 1 && typeof a === "number" ? alert("Верно") : alert("Неверно");

// Task#9
const a = +prompt("Введите число больше нуля и меньше 5-ти:");
a > 0 && a < 5 ? alert("Верно") : alert("Неверно");

// Task#10
const a = +prompt("Введите число:");
//   (a === 0 || a === 2) ? alert(a + 7) : alert(a / 10); // с помощью тернарного оператора
switch (a) {
  case 0:
  case 2:
    alert(a + 7);
    break;
  default:
    alert(a / 10);
}

// Task#11
const a = +prompt("Введите число 'a':");
const b = +prompt("Введите число 'b':");
// if (a <= 1 && b >= 3) {
//   alert(a + b);
// } else {
//   alert(a - b);
// } // c помощью if ... else
a <= 1 && b >= 3 ? alert(a + b) : alert(a - b);

// Task#12
const a = +prompt("Введите число 'a':");
const b = +prompt("Введите число 'b':");
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   alert("Верно");
// } else {
//   alert("Неверно");
// } // c помощью if ... else
(a > 2 && a < 11) || (b >= 6 && b < 14) ? alert("Верно") : alert("Неверно");

// Task#13
const num = +prompt("Введите число от 1-го до 4-х включительно:");
let result;
switch (num) {
  case 1:
    alert((result = "зима"));
    break;
  case 2:
    alert((result = "весна"));
    break;
  case 3:
    alert((result = "лето"));
    break;
  case 4:
    alert((result = "осень"));
    break;
  default:
    alert("Вы ввели число вне указанного диапазона чисел. Попробуйте снова.");
}
