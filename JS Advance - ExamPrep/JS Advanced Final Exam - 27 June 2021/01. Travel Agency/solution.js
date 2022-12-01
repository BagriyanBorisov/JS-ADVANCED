window.addEventListener('load', solution);

function solution() {
  const fullName = document.getElementById("fname");
  const email = document.getElementById("email");
  const phoneNum = document.getElementById("phone");
  const address = document.getElementById("address");
  const postalCode = document.getElementById("code");
  const editBtn = document.getElementById("editBTN");
  const continueBtn = document.getElementById("continueBTN");
  const infoList = document.getElementById("infoPreview");
  const submitBtn = document.getElementById("submitBTN");
  const divBlock = document.getElementById('block');


  submitBtn.addEventListener("click", submitForm);
  editBtn.addEventListener("click", editForm);
  continueBtn.addEventListener("click", continueForm);



  function submitForm(ev){
    ev.preventDefault();
    let fnameValue = fullName.value;
    let emailValue = email.value;
    let phoneNumValue = phoneNum.value;
    let addressValue = address.value;
    let postalCodeValue = postalCode.value;

    if(!fnameValue || !emailValue){
      return;
    }

    let liName = document.createElement("li");
    let liEmail = document.createElement("li");
    let liPhone = document.createElement("li");
    let liAddress = document.createElement("li");
    let liPostal = document.createElement("li");

    liName.textContent = `Full Name: ${fnameValue}`;
    liEmail.textContent = `Email: ${emailValue}`;
    liPhone.textContent = `Phone Number: ${phoneNumValue}`;
    liAddress.textContent = `Address: ${addressValue}`;
    liPostal.textContent = `Postal Code: ${postalCodeValue}`;

    infoList.appendChild(liName);
    infoList.appendChild(liEmail);
    infoList.appendChild(liPhone);
    infoList.appendChild(liAddress);
    infoList.appendChild(liPostal);
    clearFields();
    toggleButtons();



  }

  function editForm(ev){
    ev.preventDefault();
     fullName.value = infoList.children[0].textContent.split(": ")[1];
     email.value = infoList.children[1].textContent.split(": ")[1];
     phoneNum.value = infoList.children[2].textContent.split(": ")[1];
     address.value = infoList.children[3].textContent.split(": ")[1];
     postalCode.value = infoList.children[4].textContent.split(": ")[1];
     infoList.textContent = "";
     toggleButtons();
  }

  function continueForm(ev){
      ev.preventDefault();
      divBlock.textContent = "";
      let h3 = document.createElement("h3");
      h3.textContent = "Thank you for your reservation!";
      divBlock.appendChild(h3);
  }




function clearFields(){
    fullName.value = "";
    email.value = "";
    phoneNum.value = "";
    address.value = "";
    postalCode.value = "";
}
function toggleButtons(){
    if(submitBtn.disabled === false){
      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;
    }
    else {
      editBtn.disabled = true;
      continueBtn.disabled = true;
      submitBtn.disabled = false;
    }
}

}
