function solve() {
  let textArea = document.getElementsByTagName('textarea')[0];
  let divShoppingCart = document.getElementsByClassName('shopping-cart')[0];


  let totalPrice = 0;
  let shoppinglist = [];
  let checkout = false;
  divShoppingCart.addEventListener('click', function(event)
  {
      if(event.target.nodeName !== 'BUTTON')
      {
          return;
      }
      if(checkout)
      {
          return;
      }
     let btn = event.target;
         if(Array.from(btn.classList).indexOf('add-product') >= 0)
      {
          let product = event.target.parentElement.parentElement;
          let name = product.querySelectorAll(".product-title")[0];
          let price = product.querySelectorAll(".product-line-price")[0];

          //"Added {name} for {money} to the cart.\n".
          textArea.textContent += `Added ${name.textContent} for ${price.textContent} to the cart.\n`;

          if(shoppinglist.indexOf(name.textContent) < 0)
          {
              shoppinglist.push(name.textContent);
          }
          totalPrice += Number(price.textContent);
      }
         else if(Array.from(btn.classList).indexOf('checkout') >= 0)
      {
          textArea.textContent += `You bought ${shoppinglist.join(", ")} for ${totalPrice.toFixed(2)}.`
          checkout = true
      }

  });

}