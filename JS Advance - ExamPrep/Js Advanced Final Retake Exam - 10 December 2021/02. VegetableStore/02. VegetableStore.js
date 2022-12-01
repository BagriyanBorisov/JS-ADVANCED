class VegetableStore{
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables){
        let types = [];
        for(let i = 0; i < vegetables.length; i++){
            let [type, quantity, price] = vegetables[i].split(" ");
            let checkType = this.availableProducts.find(a => a.type === type);

            if(!checkType){
                types.push(type);
                this.availableProducts.push({type: type, quantity: Number(quantity), price: Number(price)});
            }
            else{
                checkType.quantity += Number(quantity);
                if(checkType.price < Number(price)) {
                    checkType.price = Number(price);
                }
            }
        }

        return `Successfully added ${types.join(", ")}`
    }

    buyingVegetables(selectedProducts){
        let totalPrice = 0;
        for(let i = 0; i < selectedProducts.length; i++){
            let [type, quantity] = selectedProducts[i].split(" ");

            let currType = this.availableProducts.find(a=> a.type === type);
            if(!currType){
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            if(currType.quantity < quantity){
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            totalPrice += currType.price * quantity;
            currType.quantity -= Number(quantity);
            debugger;
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`

    }

    rottingVegetable(type, quantity){
        let currType = this.availableProducts.find(a=> a.type === type);
        if(!currType){
            throw new Error(`${type} is not available in the store.`);
        }

        if(currType.quantity <= Number(quantity)){
            currType.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        currType.quantity -= Number(quantity);
        return `Some quantity of the ${type} has been removed.`;
    }

    revision(){
        let buff = `Available vegetables:`;
        for(let veg of Object.values(this.availableProducts).sort((a,b) => a.price - b.price)){
            buff += `\n${veg.type}-${veg.quantity}-$${veg.price}`;
        }
        buff += `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;

        return buff;
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());



