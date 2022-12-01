function solve() {
    const name = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const email = document.getElementById("email");
    const birth = document.getElementById("birth");
    const position = document.getElementById("position");
    const salary = document.getElementById("salary");
    const tbody = document.getElementById("tbody");
    const totalMsg = document.getElementById("sum");
    let totalBudget = 0;

    document.getElementById("add-worker").addEventListener("click", hireWorker);


    function hireWorker(ev){
        ev.preventDefault();
        let nameValue = name.value;
        let lastNameValue = lastName.value;
        let emailValue = email.value;
        let birthValue = birth.value;
        let posValue = position.value;
        let salaryValue = salary.value;
        if(!nameValue || !lastNameValue || !emailValue || !birthValue || !posValue || !salaryValue){
            return;
        }

        totalBudget += Number(salaryValue);
        totalMsg.textContent = totalBudget.toFixed(2);

        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdLastName = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdBirth = document.createElement("td");
        let tdPos = document.createElement("td");
        let tdSalary = document.createElement("td");
        let tdBtn = document.createElement("td");
        let btnFired = document.createElement("button");
        let btnEdit = document.createElement("button");

        tdName.textContent = nameValue;
        tdLastName.textContent = lastNameValue;
        tdEmail.textContent = emailValue;
        tdBirth.textContent = birthValue;
        tdPos.textContent = posValue
        tdSalary.textContent = salaryValue;

        btnFired.setAttribute("class", "fired");
        btnFired.textContent = "Fired";
        btnFired.addEventListener("click", (ev)=>{
            ev.preventDefault();
            deleteWorker(ev, tr, salaryValue);
        });

        btnEdit.setAttribute("class", "edit");
        btnEdit.textContent = "Edit";
        btnEdit.addEventListener("click", (ev)=>{
            ev.preventDefault();
            editWorker(ev, tr, salaryValue);
        })

        tr.appendChild(tdName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdBirth);
        tr.appendChild(tdPos);
        tr.appendChild(tdSalary);
        tdBtn.appendChild(btnFired);
        tdBtn.appendChild(btnEdit);
        tr.appendChild(tdBtn);
        tbody.appendChild(tr);
        clearValues();
    }


    function editWorker(ev, tr, salaryValue){
        totalBudget -= Number(salaryValue);
        totalMsg.textContent = totalBudget.toFixed(2);

        name.value = tr.children[0].textContent;
        lastName.value = tr.children[1].textContent;
        email.value = tr.children[2].textContent;
        birth.value = tr.children[3].textContent;
        position.value = tr.children[4].textContent;
        salary.value = tr.children[5].textContent;

        tbody.removeChild(tr);

    }

    function deleteWorker(ev, tr, salaryValue){
        totalBudget -= Number(salaryValue);
        totalMsg.textContent = totalBudget.toFixed(2);

        tbody.removeChild(tr);
    }




    function clearValues(){
        name.value = "";
        lastName.value = "";
        email.value = "";
        birth.value ="";
        position.value = "";
        salary.value = "";
    }

}
solve()