function solve() {

    document.getElementById("add").addEventListener("click", addMail);

    document.getElementById("reset").addEventListener("click", (ev)=>{
        ev.preventDefault();
        clearInputs();
    });

    const recipient = document.getElementById("recipientName");
    const title = document.getElementById("title");
    const message = document.getElementById("message");
    const mailsList = document.getElementById("list");
    const sentMails = document.getElementsByClassName("sent-list")[0];
    const deletedMails = document.getElementsByClassName("delete-list")[0];



    function addMail(ev){
        ev.preventDefault();
        let recipientValue = recipient.value;
        let titleValue = title.value;
        let messageValue = message.value;
        if(!recipientValue || !titleValue || !messageValue){
            return;
        }
        if(recipientValue.trim() === "" || titleValue.trim() === "" || messageValue.trim() === ""){
            return;
        }
        let li = document.createElement("li");
        let hTitle = document.createElement("h4");
        let hRecipientName = document.createElement("h4");
        let spanMsg = document.createElement("span");
        let divButtons = document.createElement("div")
        let sendBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");

        hTitle.textContent = `Title: ${titleValue}`;
        hRecipientName.textContent = `Recipient Name: ${recipientValue}`;
        spanMsg.textContent = messageValue;

        divButtons.setAttribute("id", "list-action");

        sendBtn.setAttribute("type", "submit");
        sendBtn.setAttribute("id", "send");
        sendBtn.textContent = "Send";
        sendBtn.addEventListener("click", sendMail);

        deleteBtn.setAttribute("type", "submit");
        deleteBtn.setAttribute("id", "delete");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", deleteMail);


        li.appendChild(hTitle);
        li.appendChild(hRecipientName);
        li.appendChild(spanMsg);
        divButtons.appendChild(sendBtn);
        divButtons.appendChild(deleteBtn);
        li.appendChild(divButtons);
        mailsList.appendChild(li);
        clearInputs();
    }

    function sendMail(ev){
        ev.preventDefault();
        let li = ev.target.parentElement.parentElement;

      let liSent = document.createElement("li");
      let spanTo = document.createElement("span");
      let spanTitle = document.createElement("span");
      let divBtn = document.createElement("div");
      let deleteBtn = document.createElement("button");

      spanTo.textContent = `To: ${li.children[1].textContent.split(": ")[1]}`;
      spanTitle.textContent = `Title: ${li.children[0].textContent.split(": ")[1]}`;
      divBtn.setAttribute("class", "btn");
      deleteBtn.setAttribute("type", "submit");
      deleteBtn.setAttribute("class", "delete");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", deleteMail);

      liSent.appendChild(spanTo);
      liSent.appendChild(spanTitle);
      divBtn.appendChild(deleteBtn);
      liSent.appendChild(divBtn);

      sentMails.appendChild(liSent);
      mailsList.removeChild(li);
    }

    function deleteMail(ev){
        ev.preventDefault()
        debugger;
        let li = ev.target.parentElement.parentElement;
        let deletedLi = document.createElement("li");
        let spanTo = document.createElement("span");
        let spanTitle = document.createElement("span");

        if(li.parentElement === mailsList){
            spanTo.textContent = `To: ${li.children[1].textContent.split(": ")[1]} `;
            spanTitle.textContent = `Title: ${li.children[0].textContent.split(": ")[1]}`;
            mailsList.removeChild(li);
        }
        else{
            spanTo.textContent = `To: ${li.children[0].textContent.split(": ")[1]} `;
            spanTitle.textContent = `Title: ${li.children[1].textContent.split(": ")[1]}`;
            sentMails.removeChild(li);
        }
        deletedLi.appendChild(spanTo);
        deletedLi.appendChild(spanTitle);
        deletedMails.appendChild(deletedLi);
    }

    function clearInputs(){
        title.value = "";
        recipient.value = "";
        message.value = "";
    }
}
solve()