function solve() {
   let inputText =  document.getElementById("input").value;
   let outputText = document.getElementById("output");
   outputText.innerHTML = "";
   let inputArray = inputText.split('.').filter(x => x.length > 0);

   for(let i = 0; i < inputArray.length; i += 3)
   {
       let res = [];
       for (let j = 0; j < 3; j++)
       {
           if (inputArray[i + j])
           {
               res.push(inputArray[i + j]);
           }
       }
       let resText = res.join(". ") + ".".trim();
       outputText.innerHTML += `<p>${resText}</p>`;
   }
}