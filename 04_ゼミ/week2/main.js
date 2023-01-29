const AddButton = document.getElementById("add-button")
const MemoContents = document.getElementById("memo-container")
const MemoInput = document.getElementById("memo-input")

AddButton.onclick = function () {
  // タグ名を指定して要素をつくる
  const card = document.createElement("div") // <div></div>
  card.className = "card" // <div class="card></div>
  card.textContent = MemoInput.value // <div class="card>こんばんは</div>
  MemoContents.append(card)
  const DelBtn = document.createElement("button")
  DelBtn.className = "DelBtn"
  DelBtn.textContent = "削除"
  MemoContents.append(DelBtn)
  DelBtn.onclick = function () {
    card.remove()
    DelBtn.remove()
  }

  MemoInput.value = ""
}
