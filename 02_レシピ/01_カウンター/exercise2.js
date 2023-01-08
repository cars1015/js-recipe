const countNum7 = document.getElementById("countNum7")
const countNum8 = document.getElementById("countNum8")
const countNum9 = document.getElementById("countNum9")
//IDは固有でないといけない
const display = document.getElementById("display")

countNum7.onclick = function () {
  //数字の値をディスプレイに表示
  display.textContent += 7
}

countNum8.onclick = function () {
  //数字の値をディスプレイに表示
  display.textContent += 8
}

countNum9.onclick = function () {
  //数字の値をディスプレイに表示
  display.textContent += 9
}
