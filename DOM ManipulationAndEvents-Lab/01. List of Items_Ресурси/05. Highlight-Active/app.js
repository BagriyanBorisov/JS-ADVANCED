function focused() {
   let inputs = document.getElementsByTagName('input');

   for( let input of inputs)
   {
       input.addEventListener("focus", function ()
       {
           input.parentElement.className = "focused";
       })

       input.addEventListener("blur", function ()
       {
           input.parentElement.className = "";
       })
   }
}