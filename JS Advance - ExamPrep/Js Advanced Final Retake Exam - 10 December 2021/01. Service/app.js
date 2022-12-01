window.addEventListener('load', solve);

function solve() {
    document.getElementsByTagName('button')[0].addEventListener("click", sendForm);
    document.getElementsByClassName("clear-btn")[0].addEventListener("click", clearForms);

    const productType = document.getElementById("type-product");
    const clientName = document.getElementById("client-name");
    const clientPhone = document.getElementById("client-phone");
    const description = document.getElementById("description");
    const sectionOrders = document.getElementById("received-orders");
    const completedSection = document.getElementById("completed-orders");

    function sendForm(ev){
        ev.preventDefault();

        let productTypeValue = productType.options[productType.selectedIndex].value;
        let clientValue = [clientName.value, clientPhone.value];
        let descriptionValue = description.value;

        if(!clientValue[0] || !descriptionValue || !clientValue[1]){
            return;
        }

        let div = document.createElement("div");
        div.setAttribute("class", "container");

        let hProductType = document.createElement("h2");
        hProductType.textContent = `Product type for repair: ${productTypeValue}`;

        let hClientInfo = document.createElement("h3");
        hClientInfo.textContent = `Client information: ${clientValue[0]}, ${clientValue[1]}`

        let hDescription = document.createElement("h4");
        hDescription.textContent = `Description of the problem: ${descriptionValue}`;

        let startBtn = document.createElement("button");
        startBtn.setAttribute("class", "start-btn")
        startBtn.textContent = "Start repair";
        startBtn.addEventListener("click", (ev)=>{
            ev.preventDefault();
            startOrder(ev, startBtn, finishBtn);
        })

        let finishBtn = document.createElement("button");
        finishBtn.setAttribute("class", "finish-btn");
        finishBtn.disabled = true;
        finishBtn.textContent = "Finish repair";

        div.appendChild(hProductType);
        div.appendChild(hClientInfo);
        div.appendChild(hDescription);
        div.appendChild(startBtn);
        div.appendChild(finishBtn);
        sectionOrders.appendChild(div);
        clearInputs();
    }

    function startOrder(ev, startBtn, finishBtn){
        startBtn.disabled = true;
        finishBtn.disabled = false;
        finishBtn.addEventListener("click", finishOrder);
    }

    function finishOrder(ev){
        ev.preventDefault();
        let div = ev.target.parentElement;
        div.lastChild.remove();
        div.lastChild.remove();

        completedSection.appendChild(div);
    }

    function clearForms(ev){
     ev.preventDefault();
    let array = Array.from(completedSection.children).filter(a => a.className !== "container");
    completedSection.textContent = "";
    for(let el of array)
    {
        completedSection.appendChild(el);
    }
    }

    function clearInputs(){
        description.value = "";
        clientPhone.value = "";
        clientName.value = "";
    }
}