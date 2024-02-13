// /* Это объявление переменной кнопки по тегу */
// var button = document.querySelector('button');

// /* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
// button.addEventListener('click', function() {
// 	console.log('log: Выведи этот текст в консоль если кнопка нажмётся');
// 	alert('Cause when we descend together, we begin to move as one in perfect unison just like the moon and sun')
// })
let Mask = false;

function MaskOn() {
  if (Mask) {
    document.getElementById("name").innerHTML = "Maksim Bauer";
    document.getElementById("ava").src = "imgs/ava_me.jpg";
  } else {
    document.getElementById("name").innerHTML = "Booga Booga";
    document.getElementById("ava").src = "imgs/ava2_bart.jpg";
    MaskOn2();
  }
  Mask = !Mask;
}
// ???Пока что не знаю как добавить 3 действие на одну кнопку. Решить что делать
let Mask2 = false;

function MaskOn2() {
  if (Mask2) {
    document.getElementById("name").innerHTML = "Booga Booga";
    document.getElementById("ava").src = "imgs/ava2_bart.jpg";
  } else {
    document.getElementById("name").innerHTML = "Ugol'ok";
    document.getElementById("ava").src = "imgs/ava3_son.jpg";
  }
  Mask2 = !Mask2;
}

let isRotated = false;

function rotation() {
  if (isRotated) {
    document.body.style.transform = "rotate(0deg)";
    document.body.style.direction = "ltr";
  } else {
    document.body.style.transform = "rotate(180deg)";
    document.body.style.direction = "rtl";
  }
  isRotated = !isRotated;
}
