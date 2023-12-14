/* Это объявление переменной кнопки по тегу */
var button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	console.log('log: Выведи этот текст в консоль если кнопка нажмётся');
	alert('Cause when we descend together, we begin to move as one in perfect unison just like the moon and sun')
})
