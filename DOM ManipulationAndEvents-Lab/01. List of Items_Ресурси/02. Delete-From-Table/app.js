function deleteByEmail() {
   let tds = Array.from(document.querySelectorAll("tbody tr td"));
   let emailToFind = document.getElementsByName("email")[0];
   let result = document.getElementById("result");

   console.log(emailToFind.value);

  tds =  tds.filter(a => a.textContent.includes("@"));

  let found = false;
  for(let td of tds)
  {
      if(td.textContent === emailToFind.value)
      {
          td.parentElement.remove();
          found = true;
          break;
      }
  }
  result.textContent = found ? `Deleted.` : `Not found.`;
}