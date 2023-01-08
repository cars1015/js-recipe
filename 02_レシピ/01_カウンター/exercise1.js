const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const doubleButton = document.getElementById("double-button")

const display = document.getElementById("display")
let count = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function () {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}
minusButton.onclick = function () {
  count -= 1
  display.textContent = count
}
doubleButton.onclick = function () {
  count = count * 2
  display.textContent = count
}
