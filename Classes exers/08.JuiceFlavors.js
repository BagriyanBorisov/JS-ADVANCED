function solve(array){
    let result = {};
    let arrayPush = [];

    for(let i = 0; i < array.length; i++){
        let [name, quantity] = array[i].split(" => ");

        if(result[name] === undefined){
            result[name] = {quantity: 0}
        }

        result[name].quantity += Number(quantity);
        if(result[name].quantity >= 1000)
        {
            let currLength = (result[name].quantity - (result[name].quantity % 1000)) / 1000;
            if(result[name].bottle === undefined)
            {
                result[name].bottle = 0;
            }
            for (let i = 0; i < currLength; i++)
            {
                result[name].bottle++;
                result[name].quantity -= 1000;
            }
             if(arrayPush[name] === undefined)
             {
                 arrayPush[name] = 0;
             }
                 arrayPush[name] = result[name].bottle;
        }
    }

   for(let [k,v] of Object.entries(arrayPush))
   {
       console.log(`${k} => ${v}`)
   }
}


solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);