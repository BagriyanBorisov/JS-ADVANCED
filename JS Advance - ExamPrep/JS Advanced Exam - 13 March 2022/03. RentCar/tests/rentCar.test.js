let {assert} = require('chai');
let rentCar = require('../rentCar');

describe("Tests RentCar", () =>{
    describe("Test searchCar", ()=> {
        it("should throw invalid input", ()=> {
            assert.throws(()=>rentCar.searchCar("asd", "model"),Error, `Invalid input!`);
        });
        it("should throw invalid input with both wrong params", ()=> {
            assert.throws(()=>rentCar.searchCar("asd", []),Error, `Invalid input!`);
        });

        it("returning the right value of matching elems", ()=>{
            assert.equal(rentCar.searchCar(["BMW", "Audi"], "Audi"), `There is 1 car of model Audi in the catalog!`)
        });

        it("returning the right value of matching elems2", ()=>{
            assert.equal(rentCar.searchCar(["BMW", "Audi", "Audi"], "Audi"), `There is 2 car of model Audi in the catalog!`)
        });

        it("no match Error", ()=>{
            assert.throws(()=>rentCar.searchCar(["BMW", "Audi", "Audi"], "Mercedes"),Error, 'There are no such models in the catalog!');
        });
    });

    describe("Test calculatePriceOfCar", ()=>{
        it('should throw on invalid params', ()=> {
            assert.throws(()=>rentCar.calculatePriceOfCar("asd", 12.5), Error, "Invalid input!");
        });
        it('should throw on invalid params2', ()=> {
            assert.throws(()=>rentCar.calculatePriceOfCar(12, [12.5]), Error, "Invalid input!");
        });

        it('should throw on invalid params3', ()=> {
            assert.throws(()=>rentCar.calculatePriceOfCar([], 12), Error, "Invalid input!");
        });

        it('should throw on invalid model', ()=> {
            assert.throws(()=>rentCar.calculatePriceOfCar("Nissan", 12), Error, 'No such model in the catalog!');
        });

        it('returning string', ()=> {
            assert.equal(rentCar.calculatePriceOfCar("Mercedes", 3), `You choose Mercedes and it will cost $150!`);
        });

        it('returning string2', ()=> {
            assert.equal(rentCar.calculatePriceOfCar("BMW", 2), `You choose BMW and it will cost $90!`);
        });




    });

    describe("Test checkBudget", ()=>{
        it('should throw on invalid input', ()=> {
            assert.throws(()=> rentCar.checkBudget(100,10.5,10), Error, 'Invalid input!');
        });
        it('should throw on invalid input2', ()=> {
            assert.throws(()=> rentCar.checkBudget("100",10.5,10), Error, 'Invalid input!');
        });
        it('should throw on invalid input3', ()=> {
            assert.throws(()=> rentCar.checkBudget(100,10,[10]), Error, 'Invalid input!');
        });

        it('should throw on invalid input4', ()=> {
            assert.throws(()=> rentCar.checkBudget({name: 100},"gosho",[10]), Error, 'Invalid input!');
        });

        it('should return rent a car', ()=> {
            assert.equal(rentCar.checkBudget(100,10,1000), 'You rent a car!');
        });

        it('should return rent a car2', ()=> {
            assert.equal(rentCar.checkBudget(10,10,1000), 'You rent a car!');
        });

        it('should return rent a car3', ()=> {
            assert.equal(rentCar.checkBudget(10,5,51), 'You rent a car!');
        });


        it('should return need bigger budget', ()=> {
            assert.equal(rentCar.checkBudget(101,10,1000), 'You need a bigger budget!');
        });

        it('should return need bigger budget2', ()=> {
            assert.equal(rentCar.checkBudget(101,3,302), 'You need a bigger budget!');
        });
    });
});
