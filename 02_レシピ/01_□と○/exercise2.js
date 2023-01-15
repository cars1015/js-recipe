const figure = document.getElementById("figure")
const circleButton = document.getElementById("circle-button")
const squareButton = document.getElementById("square-button")
const triangleButton = document.getElementById("triangle-button")

circleButton.onclick = function () {
  figure.classList.toggle("rounded")
}

squareButton.onclick = function () {
  figure.classList.toggle()
}
