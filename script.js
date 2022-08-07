const money = document.querySelector(".money")
let priceOne = 15
let priceTwo = 30

function firstPrice() {
  money.innerText = ("$") + (priceOne * counter)
}

function secondPrice() {
  money.innerText = ("$") + (priceTwo * counter)
}

function subtraction1() {
  money.innerText = ("$") + (counter * priceOne)
}

function subtraction2() {
  money.innerText = ("$") + (counter * priceTwo)
}

const quantity = document.querySelector(".quantity")
let counter = 1

function add() {
  if (counter < 20) {
    counter = counter + 1
    quantity.innerText = counter
  firstPrice();
  secondPrice();
  }
}

function remove() {
  if (counter > 1) {
    counter = counter - 1
    quantity.innerText = counter
    subtraction1();
    subtraction2();
  }
}

function show() {
  let window = document.querySelector(".Window")
  let Bag = document.querySelector(".Bag")
  Bag.style.background = '#ff2828';
  Bag.style.borderRadius = '10px';
  window.style.display = 'block';
}

function Cart() {
  let window = document.querySelector(".Window")
  window.style.display = 'none';
}

function Ok() {
  if (counter < 20 || counter > 0) {
    location.reload()
    window.navigator.vibrate(300);
  }
}