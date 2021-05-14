const keyElement = document.querySelector('.keys--key');
const keyCodeElement = document.querySelector('.keys--keycode');
const codeElement = document.querySelector('.keys--code');

const container = document.querySelector('.container');
const keys = document.querySelector('.keys');

document.addEventListener('keypress', (e) => {
  container.classList.add('active');
  keys.classList.add('active');

  keyElement.innerHTML = e.keyCode;
  keyCodeElement.innerHTML = e.key;
  codeElement.innerHTML = e.code;
});
