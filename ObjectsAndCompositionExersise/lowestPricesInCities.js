function lowestPricesInCities(inputData)
{
    let products = {};
    for(let i = 0; i < inputData.length; i++)
    {
        let split =  inputData[i].split(' | ');
        let productName = split[1];
        let productPrice = Number(split[2]);
        let productTown = split[0];
        let currProduct = {};
        if (!products.hasOwnProperty(productName))
        {
            currProduct = {price: productPrice, town: productTown};
            products[productName] = currProduct;
        }
        else if(products[productName].price > productPrice)
        {
            products[productName].price = productPrice;
            products[productName].town = productTown;
        }
    }
//{productName} -> {productLowestPrice} ({townName})
 for (let [product,value] of Object.entries(products))
 {
     console.log(`${product} -> ${value.price} (${value.town}) `)
 }

}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);