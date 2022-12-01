function search() {
  let cityArr = Array.from(document.querySelectorAll("ul li"));
  let textSearch = document.getElementById("searchText").value;


  let count = 0;
  for (let city of cityArr)
  {
      if(city.textContent.includes(textSearch))
      {
          city.style.textDecoration = "underline";
          city.style.fontWeight = "bold";
          count++;
      }
      else
      {
          city.style.textDecoration = "none";
          city.style.fontWeight = "normal";
      }
  }
  document.getElementById("result").textContent = `${count} matches found`;
}
