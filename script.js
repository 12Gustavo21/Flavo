const money = document.querySelector(".money")
let priceOne = 15
let priceTwo = 30
let num = 1

function firstPrice(){
  firstValue()
}

function firstValue(){
  money.innerText = priceOne
}

function secondPrice(){
    secondValue()
}

function secondValue(){
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

function cart() {
    if (counter < 20 || counter > 0) {
        counter = 1
        window.navigator.vibrate(300);
        screen()
    }
}

function screen () {
    quantity.innerText = counter
}