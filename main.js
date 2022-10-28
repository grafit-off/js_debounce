'use strict';

const input = document.querySelector('.input');
const debouncedValueOutput = document.querySelector('.debounced-value');
const debouncedThisValueOutput = document.querySelector('.debounced-this-value');

function debounce(f, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(f.bind(this), delay, ...args);
  }
}

function onChange(event) {
  debouncedValueOutput.textContent = event.target.value;
  debouncedThisValueOutput.textContent = this.value;

  console.log(event.target.value);
  console.log(this.value);
}

let wrapperFoo = debounce(onChange, 1000);

input.addEventListener('input', wrapperFoo);