function storeCatalogue(inputArr)
{
    let result = {items: []};
    for (let i = 0; i < inputArr.length; i++)
    {
        let [itemName , value] = inputArr[i].split(' : ')
        let currItem = {name: itemName, price: Number(value)};
        result['items'].push(currItem);
    }

    let charSorted = undefined;
    for(let item of result['items'].sort((a,b) => a.name.localeCompare(b.name)))
    {
        if(charSorted !== item.name[0])
        {
            charSorted = item.name[0];
            console.log(charSorted);
        }
        console.log(`  ${item.name}: ${item.price}`)

    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);