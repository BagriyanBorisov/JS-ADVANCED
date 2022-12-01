function addItem() {
    let textArea = document.getElementById("newItemText");
    let ul = document.getElementById("items");
    let li = document.createElement("li");
    let a = document.createElement("a");
    li.textContent = textArea.value;
    a.textContent = `[Delete]`;
    a.href = '#';

    li.appendChild(a);
    ul.appendChild(li);

    a.addEventListener('click', function(event)
    {
        event.target.parentElement.remove();
    })
}