function solve(arrayInput)
{
    let brands = [];
    //input
    for (let i = 0; i < arrayInput.length; i++) {
        let [brand, modelName, qty] = arrayInput[i].split(" | ");

        if (brands[brand] === undefined) {
            brands[brand] = {models: []}
            brands[brand]['models'].push({name: modelName, quantity: Number(qty)});
        }
        else
        {
                let hasModel = false;
                for(let currModel of Object.values(brands[brand]['models']))
                {
                    if (currModel.name === modelName)
                    {
                        hasModel = true;
                        currModel.quantity += Number(qty);
                    }
                }
                if(hasModel === false)
                {
                    brands[brand]['models'].push({name: modelName, quantity: Number(qty)});
                }
        }

    }

    //output
    for(let [brandName, value] of Object.entries(brands))
    {
        console.log(brandName);
       for(let currModels of Object.values(value))
       {
           for(let model of currModels)
           {
                console.log(`###${model.name} -> ${model.quantity}`)
           }
       }
    }
}

solve(['Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
   'Mercedes-Benz | W163 | 200']);