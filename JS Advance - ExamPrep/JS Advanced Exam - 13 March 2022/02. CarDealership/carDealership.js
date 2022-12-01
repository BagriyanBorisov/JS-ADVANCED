class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage){
        if(!model || horsepower < 0  ||  price < 0 || mileage < 0){
            throw new Error("Invalid input!");
        }
        let carToAdd = {model: model, horsepower: horsepower, price: price, mileage: mileage}
        this.availableCars.push(carToAdd);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage){
        let currCar = this.availableCars.find(car => car.model === model);
        if(!currCar){
            throw new Error(`${model} was not found!`)
        }
        let difference = Number(currCar.mileage) - Number(desiredMileage);
        let horsepower = Number(currCar.horsepower);
        let price = 0;

        if(difference <= 0)
        {
            price = currCar.price;
        }
        else if(difference <= 40000){
            price = currCar.price * 0.95;
        }
        else{
            price = currCar.price * 0.90
        }
        let soldCar = {model:model ,horsepower: horsepower, price: price}
        this.soldCars.push(soldCar);
        this.totalIncome += price;
        this.availableCars.splice(currCar.index, 1);


        return `${model} was sold for ${price.toFixed(2)}$`
    }

    currentCar(){
        if(this.availableCars.length === 0){
            return `There are no available cars`;
        }

        let str = "-Available cars:";
        for(let car of Object.values(this.availableCars))
        {
            str += `\n---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`
        }

        return str;
    }

    salesReport(criteria){
        if(criteria !== "horsepower" && criteria !== "model"){
            throw new Error("Invalid criteria!")
        }
        let sorted;
        if(criteria === "horsepower"){
            sorted = this.soldCars.sort((a,b) => b.horsepower - a.horsepower);
        }
        else{
            sorted = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        let buff = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`;
        buff += `\n-${this.soldCars.length} cars sold:`;

        for(let car of Object.values(sorted)){
            buff += `\n---${car.model} - ${car.horsepower} HP - ${car.price.toFixed(2)}$`
        }

        return buff;
    }


}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.currentCar());
console.log(dealership.sellCar("asd", 150000))
console.log(dealership.salesReport("horsepower"));
