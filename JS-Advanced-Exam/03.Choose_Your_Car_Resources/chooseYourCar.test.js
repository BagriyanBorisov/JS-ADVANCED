let {assert} = require(`chai`);
let chooseYourCar = require(`./chooseYourCar`);


describe(`Test chooseYourCar`, ()=>{
    describe(`Test choosingType`, ()=>{
        it('should throw invalidInput', function () {
            assert.throws(()=> chooseYourCar.choosingType(`Sedan`, `Red`, 1899), "Invalid Year!");
            assert.throws(()=> chooseYourCar.choosingType(`Sedan`, `Red`, 2023), "Invalid Year!");
            assert.throws(()=> chooseYourCar.choosingType(`asd`, `Red`, 2002), "This type of car is not what you are looking for.");
        });
        it('should return the rightStr', function () {
            assert.equal(chooseYourCar.choosingType(`Sedan`, `Red`, 2004), "This Sedan is too old for you, especially with that Red color.");
            assert.equal(chooseYourCar.choosingType(`Sedan`, `Red`, 2010), "This Red Sedan meets the requirements, that you have.");
            assert.equal(chooseYourCar.choosingType(`Sedan`, `Red`, 2012), "This Red Sedan meets the requirements, that you have.");
        });
    });
    describe(`Test brandName`,()=>{
        it('should throw Invalid', function () {
            assert.throws(()=> chooseYourCar.brandName(['Merc', 'BMW'], 2), `Invalid Information!`);
            assert.throws(()=> chooseYourCar.brandName(['Merc', 'BMW'], -2), `Invalid Information!`);
            assert.throws(()=> chooseYourCar.brandName(['Merc', 'BMW'], 1.5), `Invalid Information!`);
            assert.throws(()=> chooseYourCar.brandName(['Merc', 'BMW'], 3), `Invalid Information!`);
            assert.throws(()=> chooseYourCar.brandName(['Merc', 'BMW'], -1.5), `Invalid Information!`);
            assert.throws(()=> chooseYourCar.brandName(['Merc', 'BMW'], "-1.5"), `Invalid Information!`);
            assert.throws(()=> chooseYourCar.brandName(`asd`, 1), `Invalid Information!`);
        });

        it('should returnStr', function () {
            assert.equal(chooseYourCar.brandName(['Merc'], 0), "");
            assert.equal(chooseYourCar.brandName(['Merc',`Bmw`, `Audi`], 0), "Bmw, Audi");
            assert.equal(chooseYourCar.brandName(['Merc',`Bmw`, `Audi`], 1), "Merc, Audi");
            assert.equal(chooseYourCar.brandName(['Merc',`Bmw`, `Audi`], 2), "Merc, Bmw");
        });
    });
    describe(`Test carFuel`, ()=>{
        it('should throw on inputs', function () {
            assert.throws(()=> chooseYourCar.carFuelConsumption(`asd`, 5), "Invalid Information!");
            assert.throws(()=> chooseYourCar.carFuelConsumption(5, `asd`), "Invalid Information!");
            assert.throws(()=> chooseYourCar.carFuelConsumption(-5, 15), "Invalid Information!");
            assert.throws(()=> chooseYourCar.carFuelConsumption(`asd`, "asd"), "Invalid Information!");
            assert.throws(()=> chooseYourCar.carFuelConsumption(15, -5), "Invalid Information!");
            assert.throws(()=> chooseYourCar.carFuelConsumption(0, 15), "Invalid Information!");
            assert.throws(()=> chooseYourCar.carFuelConsumption(15, 0), "Invalid Information!");
            assert.throws(()=> chooseYourCar.carFuelConsumption(0, 0), "Invalid Information!");
            assert.throws(()=> chooseYourCar.carFuelConsumption(-5, -5), "Invalid Information!");
        });
        it('should return the consumpt', function () {
            assert.equal(chooseYourCar.carFuelConsumption(100, 10), `The car burns too much fuel - 10.00 liters!`);
            assert.equal(chooseYourCar.carFuelConsumption(100, 7), `The car is efficient enough, it burns 7.00 liters/100 km.`);
            assert.equal(chooseYourCar.carFuelConsumption(100, 6), `The car is efficient enough, it burns 6.00 liters/100 km.`);
        });
    });

});