const price = document.querySelector(".money")
let priceOne = "$15"
let priceTwo = "$30"

function firstPrice(){
    firstValue()
}

function firstValue(){
    price.innerText = priceOne
}

function secondPrice(){
    secondValue()
}

function secondValue(){
    price.innerText = priceTwo
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
  if (counter > 0) {
    counter = counter - 1
    screen()
  }
}

function cart() {
    if (counter < 20 || counter > 0) {
        counter = 0
        screen()
    }
}

function screen () {
    quantity.innerText = counter
}