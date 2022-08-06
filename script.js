const money = document.querySelector(".money")
let priceOne = "$15"
let priceTwo = "$30"

function firstPrice() {
  money.innerText = priceOne
}

function secondPrice() {
  money.innerText = priceTwo
}

const quantity = document.querySelector(".quantity")
let counter = 0

function add() {
  if (counter < 20) {
    counter = counter + 1
    screen()
  }
}

function remove() {
  if (counter > 1) {
    counter = counter - 1
    screen()
  }
}

function show() {
  let window = document.querySelector(".Window")
  window.style.display = 'block';
}

function Cart() {
  let window = document.querySelector(".Window")
  window.style.display = 'none';
}

function Ok() {
  if (counter < 20 || counter > 0) {
    location.reload()
    screen()
  }
}

function screen() {
  quantity.innerText = counter
}