let {assert} = require('chai');
let carService = require('../03. Car Service_Resources');

describe("Tests CarService", ()=> {
    describe("Test isItExpensive", ()=> {
        it(`should return the right string`, ()=> {
            assert.equal(carService.isItExpensive("Engine"),
                `The issue with the car is more severe and it will cost more money`);
        });

        it(`should return the right string`, ()=> {
            assert.equal(carService.isItExpensive("Transmission"),
                `The issue with the car is more severe and it will cost more money`);
        });

        it(`should return the right string`, ()=> {
            assert.equal(carService.isItExpensive("Whatever"),
                `The overall price will be a bit cheaper`);
        });
    });

    describe(`Test discount`,()=>{

        it('should throw on invalid input', ()=> {
            assert.throws(()=>carService.discount("asd", 5), `Invalid input`);
        });
        it('should throw on invalid input2', ()=> {
            assert.throws(()=>carService.discount(6, "asd"), `Invalid input`);
        });
        it('should throw on invalid input3', ()=> {
            assert.throws(()=>carService.discount("asd", []), `Invalid input`);
        });

        it('should return on invalid parts', ()=> {
            assert.equal(carService.discount(2, 5), "You cannot apply a discount");
        });

        it('should return on invalid parts2', ()=> {
            assert.equal(carService.discount(1, 5), "You cannot apply a discount");
        });

        it('should return discount', ()=> {
            assert.equal(carService.discount(3, 5), `Discount applied! You saved ${(15/ 100) * 5}$`);
        });

        it('should return discount2', ()=> {
            assert.equal(carService.discount(7, 5), `Discount applied! You saved ${(15/ 100) * 5}$`);
        });

        it('should return discount3', ()=> {
            assert.equal(carService.discount(8, 5), `Discount applied! You saved ${(30/ 100) * 5}$`);
        });



    });

    describe(`Test partsToBuy`,()=>{
        it('should throw error on invalid input1 ', ()=> {
                assert.throws(()=>carService.partsToBuy("asda", ["pesho"]), "Invalid input")
                assert.throws(()=>carService.partsToBuy(["asda"], {}), "Invalid input")
                assert.throws(()=>carService.partsToBuy(123, 123), "Invalid input")
        });

        it('should return totalSum', ()=>{
                assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }] , ["coil springs"]), 230);
                assert.equal(carService.partsToBuy([{part: "idk", price: 10}], ["part"]), 0);
                assert.equal(carService.partsToBuy([{part: "idk", price: 10}, {part:"kola", price: 170}], ["idk", "kola"]), 180);
                assert.equal(carService.partsToBuy([], ["part"]), 0);
        });

    });

});
