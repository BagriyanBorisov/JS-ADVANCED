function solution() {
    let stock = { protein: 0,carbohydrate: 0,fat: 0,flavour: 0 }
    let recipes =
        {
            apple: {flavour: 2, carbohydrate: 1},
            lemonade: {carbohydrate: 10, flavour: 20},
            burger: {carbohydrate: 5, fat: 7, flavour: 3},
            eggs: {protein: 5, fat: 1, flavour: 1},
            turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
        }

    function restock(arg, count) {
        stock[arg] += Number(count);
    }

    function prepare(arg, count) {
        let neededStocks = {};
        for (let [k, v] of Object.entries(recipes[arg])) {
            neededStocks[k] = v * Number(count);
        }

        let isEnough = true;
        let notEnough = "";
        for (let [k, v] of Object.entries(neededStocks)) {
            if (stock[k] < neededStocks[k]) {
                notEnough = `${k}`;
                isEnough = false;
                break;
            }
        }

        if(isEnough)
        {
            for (let [k, v] of Object.entries(neededStocks)) {
                stock[k] -= neededStocks[k];
            }
        }
        return isEnough ? `Success` : `Error: not enough ${notEnough} in stock`;
    }

    function report(){
        let strReturn = '';
        //  protein={qty} carbohydrate={qty} fat={qty} flavour={qty}
        for(let [k,v] of Object.entries(stock)) {
            strReturn += `${k}=${v} `
        }
        return strReturn.trim();
    }


    return function manager(params) {
        let [cmd, arg, count] = params.split(' ');
        let strReturn = `Success`;
        switch (cmd) {
            case "restock":
                restock(arg, count);
                return strReturn;
            case "prepare":
               strReturn = prepare(arg, count);
                break;
            case "report":
               strReturn = report();
                break;
        }
        return strReturn;
    }


}

let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

