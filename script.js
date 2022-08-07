const Body = document.querySelector("body");
const money = document.querySelector(".money");
const quantity = document.querySelector(".quantity");
let Shopping = document.querySelector(".Shopping");
let BagInput = document.querySelector("#Bag");
let JarInput = document.querySelector("#Jar");
let priceOne = 15;
let priceTwo = 30;
let counter = 1;

function firstPrice() {
  money.innerText = "$" + priceOne * counter;
}

function secondPrice() {
  money.innerText = "$" + priceTwo * counter;
}

function subtraction1() {
  money.innerText = "$" + counter * priceOne;
}

function subtraction2() {
  money.innerText = "$" + counter * priceTwo;
}

function add() {
  if (counter < 20) {
    counter = counter + 1
    quantity.innerText = counter
    if (BagInput.checked == true) {
      firstPrice();
    } else if (JarInput.checked == true) {
      secondPrice();
    }
  }
}

function remove() {
  if (counter > 1) {
    counter = counter - 1
    quantity.innerText = counter
    if (BagInput.checked == true) {
      subtraction1();
    } else if (JarInput.checked == true) {
      subtraction2();
    }
  }
}

function show() {
  let window = document.querySelector(".Window");
  Shopping.style.background = '#ff2828';
  Shopping.style.borderRadius = '10px';
  window.style.display = 'block';
}

function Cart() {
  let window = document.querySelector(".Window");
  window.style.display = 'none';
}

function Ok() {
  if (counter < 20 || counter > 0) {
    location.reload()
    window.navigator.vibrate(300);
  }
}