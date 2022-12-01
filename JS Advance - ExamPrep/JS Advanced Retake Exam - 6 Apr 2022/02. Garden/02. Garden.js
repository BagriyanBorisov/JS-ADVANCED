class Garden{
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired){
        if(this.spaceAvailable < spaceRequired){
            throw Error("Not enough space in the garden.");
        }
        this.plants.push({plantName: plantName, spaceRequired: spaceRequired, ripe: false, quantity: 0});
        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity){
        let currPlant = this.plants.find(el => el.plantName === plantName);
        if(!currPlant){
            throw Error(`There is no ${plantName} in the garden.`);
        }
        if(currPlant.ripe){
            throw Error(`The ${plantName} is already ripe.`);
        }
        if(Number(quantity) <= 0 ){
            throw Error("The quantity cannot be zero or negative.");
        }
        currPlant.ripe = true;
        currPlant.quantity += Number(quantity);

        return Number(quantity) === 1 ? `${quantity} ${plantName} has successfully ripened.` :
            `${quantity} ${plantName}s have successfully ripened.` ;

    }

    harvestPlant(plantName){
        let currPlant = this.plants.find(el => el.plantName === plantName );
        if(!currPlant){
            throw Error(`There is no ${plantName} in the garden.`);
        }
        if(!currPlant.ripe){
            throw Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.spaceAvailable += Number(currPlant.spaceRequired);
        let storedQty = Number(currPlant.quantity);
        this.storage.push({plantName: plantName, quantity: storedQty});
        this.plants.splice(this.plants.indexOf(currPlant), 1);


        return `The ${plantName} has been successfully harvested.`

    }

    generateReport(){
        let string = `The garden has ${this.spaceAvailable} free space left.\n`

        let plantNames = "";
        for(let plant of this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName)))
        {
            plantNames += `${plant.plantName}, `;
        }
        let plants = `Plants in the garden: ${plantNames.slice(0,-2)}\n`

        let storagePlantNames = "";
        for(let plant of this.storage){
            storagePlantNames += `${plant.plantName} (${plant.quantity}), `
        }
        let storage = storagePlantNames === "" ? "Plants in storage: The storage is empty.":
            `Plants in storage: ${storagePlantNames.slice(0,-2)}`;

        return string + plants + storage;

    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());



