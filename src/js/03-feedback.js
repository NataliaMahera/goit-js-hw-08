// Завдання 3 - форма зворотного зв'язку
// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';

const CURRENT_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

const { email, message } = form.elements;
dataOutput();

function onInput() {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(CURRENT_KEY, JSON.stringify(dataForm));
}

function onSubmit(evt) {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });
  evt.currentTarget.reset();
  localStorage.removeItem(CURRENT_KEY);
}

function dataOutput() {
  const savedData = localStorage.getItem(CURRENT_KEY);

  if (savedData) {
    dataForm = JSON.parse(savedData);
    input.value = dataForm.email ?? '';
    textarea.value = dataForm.message ?? '';
    // console.log(savedData);
  }
}
