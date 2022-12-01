window.addEventListener('load', solve);

function solve() {
    const model = document.getElementById('model');
    const year = document.getElementById('year');
    const description = document.getElementById('description');
    const price = document.getElementById('price');
    const tbody = document.getElementById('furniture-list');
    const totalPrice = document.getElementsByClassName("total-price")[0];
    let total = 0;

    document.getElementById('add').addEventListener('click',addArticle);

    function addArticle(ev){
        ev.preventDefault();
        let modelValue = model.value;
        let yearValue = year.value;
        let descriptionValue = description.value;
        let priceValue = price.value;

        if(!modelValue || !yearValue || !descriptionValue || !priceValue || yearValue < 0 || priceValue < 0){
            return;
        }
        let trInfo = document.createElement("tr");
        let trHidden = document.createElement("tr");
        let tdModel = document.createElement("td");
        let tdPrice = document.createElement("td");
        let tdBtn = document.createElement("td");
        let moreBtn = document.createElement("button");
        let buyBtn = document.createElement("button");
        let tdYear = document.createElement("td");
        let tdDescript = document.createElement("td");

        trInfo.setAttribute("class", "info");
        trHidden.setAttribute("class", "hide");
        tdModel.textContent = modelValue;
        tdPrice.textContent = `${Number(priceValue).toFixed(2)}`;
        moreBtn.textContent = "More Info";
        moreBtn.setAttribute("class", "moreBtn");
        moreBtn.addEventListener('click', (ev)=>{
            ev.preventDefault();
            moreInfo(ev, trHidden);
        })
        buyBtn.textContent = "Buy it";
        buyBtn.setAttribute("class", "buyBtn");
        buyBtn.addEventListener("click", (ev)=>{
            ev.preventDefault();
            buyArticle(ev,trInfo, trHidden, priceValue);
        });
        tdYear.textContent = `Year: ${yearValue}`;
        tdDescript.setAttribute("colspan","3");
        tdDescript.textContent = `Description: ${descriptionValue}`;

        trInfo.appendChild(tdModel);
        trInfo.appendChild(tdPrice);
        tdBtn.appendChild(moreBtn);
        tdBtn.appendChild(buyBtn);
        trInfo.appendChild(tdBtn);
        trHidden.appendChild(tdYear);
        trHidden.appendChild(tdDescript);
        tbody.appendChild(trInfo);
        tbody.appendChild(trHidden);

        clearFields();


    }

    function moreInfo(ev, trHidden){
        if (ev.target.textContent === "More Info"){
            trHidden.setAttribute("style", "display: contents;");
            ev.target.textContent = "Less Info";
        }
        else{
            trHidden.removeAttribute("style");
            ev.target.textContent = "More Info";
        }
    }

    function buyArticle(ev,trInfo, trHidden, priceValue){
        total += Number(priceValue);
        totalPrice.textContent = `${total.toFixed(2)}`;
        tbody.removeChild(trInfo);
        tbody.removeChild(trHidden);
    }

    function clearFields(){
        model.value = "";
        year.value = "";
        description.value = "";
        price.value = "";
    }

}
