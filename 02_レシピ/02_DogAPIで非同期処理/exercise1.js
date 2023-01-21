const imageElement = document.getElementById("dog-image")
const hound = document.getElementById("hound")
let dog_name = ""
hound.onclick = function () {
  dog_name = "hound"
  fetch(`https://dog.ceo/api/breed/${dog_name}/images/random`)
    .then((res) => {
      return res.json() // 結果を json として読み込んで、次の then に渡す
    })
    .then((data) => {
      imageElement.src = data.message // 画像を表示する
    })
}
// 指定したサーバーにデータを取りに行く
