function create(words) {

   for(let word of words)
   {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.textContent = word;
      p.style.display = "none";
      div.appendChild(p);
      div.addEventListener('click', showText);
      document.getElementById("content").appendChild(div);
   }

   function showText(event)
   {
      event.target.children[0].style.display = "block";
   }

}