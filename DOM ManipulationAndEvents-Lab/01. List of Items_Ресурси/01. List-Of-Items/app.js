function addItem() {
   let textArea = document.getElementById("newItemText");
   let ul = document.getElementById("items");
   let li = document.createElement("li");
   li.textContent = textArea.value;
   ul.appendChild(li);
}