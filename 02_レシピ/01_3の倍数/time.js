const time = function (n) {
  if (/3/.test(n)) {
    console.log(n + "!!!!!!!!")
  } else {
    console.log(n)
  }
}
const number = 10000
let n = 1

while (n <= number) {
  setInterval(time(n), n * 1000)
  n++
}
