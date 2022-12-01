function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;

  let textArr = text.split(" ");
  let res = "";
  textArr.forEach((el, i) => {
          switch (convention) {
              case "Camel Case":
                  if(i === 0)
                  {
                      res += el[0].toLowerCase() + el.substring(1).toLowerCase();
                  }
                  else
                  {
                      res += el[0].toUpperCase() + el.substring(1).toLowerCase();
                  }
                  break;
              case "Pascal Case":
                  res += el[0].toUpperCase() + el.substring(1).toLowerCase();
                  break;
              default: res = "Error!";
                  break;
          }
      }
  );

document.getElementById("result").textContent = res;

}