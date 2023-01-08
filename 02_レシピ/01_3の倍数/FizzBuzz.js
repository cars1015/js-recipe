const number = 30
for (let n = 1; n < number; n++) {
  if (n % 15 == 0) {
    console.log("FizzBuzz")
  } else if (n % 3 == 0) {
    console.log("Fizz")
  } else if (n % 5 == 0) {
    console.group("Buzz")
  } else {
    console.log(n)
  }
}
