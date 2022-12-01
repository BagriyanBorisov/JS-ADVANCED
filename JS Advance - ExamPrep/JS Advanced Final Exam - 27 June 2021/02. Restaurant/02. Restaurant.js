class Restaurant{
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];

    }

    loadProducts(products){
        for(let product of products){
            let [name, quantity, totalPrice] = product.split(" ");
            if(Number(totalPrice) > this.budgetMoney){
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }
            else{
                if(this.stockProducts.hasOwnProperty(name)){
                    this.stockProducts[name] += Number(quantity);
                }
                else{
                    this.stockProducts[name] = Number(quantity);
                }
                this.budgetMoney -= Number(totalPrice);
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            }
        }
        return this.history.join(`\n`);
    }
    addToMenu(meal, neededProducts, price){
        if(this.menu.hasOwnProperty(meal)){
           return `The ${meal} is already in the our menu, try something different.`
        }
        this.menu[meal] =  {products: neededProducts, price: Number(price)};
        if(Object.keys(this.menu).length === 1){
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        }
        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`

    }

    showTheMenu(){
        if(Object.keys(this.menu).length === 0){
            return `Our menu is not ready yet, please come later...`;
        }
        let buff = [];
        for(let meal of Object.keys(this.menu)){
            buff.push(`${meal} - $ ${this.menu[meal].price}`);
        }
        return buff.join('\n');
    }

    makeTheOrder(meal){
        if(!this.menu.hasOwnProperty(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        for(let product of this.menu[meal].products){
            let [name, quantity] = product.split(' ');
            if(this.stockProducts[name] === undefined){
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
            if(this.stockProducts[name] < Number(quantity)){
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }

        }

        for(let product of this.menu[meal].products){
            let [name, quantity] = product.split(' ');
            this.stockProducts[name] -= Number(quantity);
        }
        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }
}




