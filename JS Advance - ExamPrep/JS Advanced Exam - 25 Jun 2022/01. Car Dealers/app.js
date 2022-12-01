window.addEventListener("load", solve);

function solve() {
  let make = document.getElementById("make");
  let model = document.getElementById("model");
  let year = document.getElementById("year");
  let fuel = document.getElementById("fuel");
  let originalCost = document.getElementById("original-cost");
  let sellingCost = document.getElementById("selling-price");
  let publishBtn = document.getElementById("publish");
  let tbody = document.getElementById("table-body");
  let carsList = document.getElementById("cars-list");
  let profit = document.getElementById("profit");
  let totalSum = 0;

  publishBtn.addEventListener("click", (event)=>{
      event.preventDefault();
      let values = [make.value, model.value, year.value, fuel.value, originalCost.value, sellingCost.value];

      let canContinue = true;
      for(let value of values)
      {
          if(value === String.empty || value.trim() === ""){
              canContinue = false;
          }
      }
      if(Number(originalCost.value) >= Number(sellingCost.value))
      {
         canContinue = false;
      }

      if(canContinue) {
          let tr = document.createElement('tr');
          tr.ClassName = "row";

          for (let value of values) {
              let td = document.createElement('td');
              td.textContent = value;
              tr.appendChild(td);
          }
          let tdButton = document.createElement('td')
          let buttonEdit = document.createElement('button');
          let buttonSell = document.createElement('button');
          buttonEdit.textContent = "Edit";
          buttonSell.textContent = "Sell";
          buttonEdit.className = "action-btn edit";
          buttonSell.className = "action-btn sell";
          tdButton.appendChild(buttonEdit);
          tdButton.appendChild(buttonSell);
          tr.appendChild(tdButton);
          tbody.appendChild(tr);
          clearFields();
          buttonEdit.addEventListener("click", (event) => {
              event.preventDefault();
              let Tds = event.target.parentNode.parentNode.children;
              make.value = Tds[0].textContent;
              model.value = Tds[1].textContent;
              year.value = Tds[2].textContent;
              fuel.value = Tds[3].textContent;
              originalCost.value = Tds[4].textContent;
              sellingCost.value = Tds[5].textContent;
              let tbody = event.target.parentNode.parentNode.parentNode;
              tbody.removeChild(event.target.parentNode.parentNode)


          });
          buttonSell.addEventListener("click",(event)=>{
                event.preventDefault();
              let Tds = event.target.parentNode.parentNode.children;

              let li = document.createElement("li");
              li.setAttribute("class", "each-list")
              let spanMakeModel = document.createElement("span");
              let spanYear= document.createElement("span");
              let spanProfit = document.createElement("span");
              spanMakeModel.textContent = `${Tds[0].textContent} ${Tds[1].textContent}`
              spanYear.textContent = Tds[2].textContent;
              let currProfit = Number(Tds[5].textContent) - Number(Tds[4].textContent);
              spanProfit.textContent = currProfit.toString();
              li.appendChild(spanMakeModel);
              li.appendChild(spanYear);
              li.appendChild(spanProfit);
              totalSum += currProfit;
              profit.textContent = totalSum.toFixed(2);
              carsList.appendChild(li);
              let tbody = event.target.parentNode.parentNode.parentNode;
              tbody.removeChild(event.target.parentNode.parentNode)

          });

      }

  });

  function clearFields(){
      make.value = "";
      model.value = "";
      year.value = "";
      fuel.value = "";
      originalCost.value = "";
      sellingCost.value = "";
  }
}


