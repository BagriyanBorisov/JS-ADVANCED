let {assert} = require("chai");
let {addFive, subtractTen, sum} = require("../04.MathEnforcer");
let mathEnforcer = {
    addFive,subtractTen,sum
}

describe("Test Functionality", ()=>{
    describe("Test addFiveFunc", ()=>{
        it('should return undefined on NaN paramAdd', ()=> {
            assert.equal(mathEnforcer.addFive("asd"), undefined);
            assert.equal(mathEnforcer.addFive([]), undefined);
            assert.equal(mathEnforcer.addFive({name: 5}), undefined);
        });

        it('should  return the right num1', ()=> {
            assert.equal(mathEnforcer.addFive(10), 15)
        });
        it('should  return the right num2', ()=> {
            assert.equal(mathEnforcer.addFive(0), 5 )
        });

        it('should  return the right num', ()=> {
            assert.equal(mathEnforcer.addFive(-5), 0)
        });
        it('should  return the right num', ()=> {
            assert.equal(mathEnforcer.addFive(-5.5), -0.5)
        });
        it('should  return the right num', ()=> {
            assert.equal(mathEnforcer.addFive(5.5), 10.5)
        });


    });

    describe("Test subtractTen",()=>{
       it("should return undefined on NaN paramSubs", ()=>{
           assert.equal(mathEnforcer.subtractTen("asd"), undefined);
           assert.equal(mathEnforcer.subtractTen([]), undefined);
           assert.equal(mathEnforcer.subtractTen({name: 5}), undefined);
       });

        it('should return the right value on correct params1', ()=> {
            assert.equal(mathEnforcer.subtractTen(10), 0);

        });

        it('should return the right value on correct params2', ()=> {
            assert.equal(mathEnforcer.subtractTen(-10), -20);
        });

        it('should return the right value on correct params3', ()=> {
            assert.equal(mathEnforcer.subtractTen(-1.5), -11.5);
        });
    });

    describe("Test sum", ()=>{
        it('should return undefined on NaN if one of the params is', ()=> {
                assert.equal(mathEnforcer.sum("alo da", 15), undefined);
        });


        it('should return undefined on NaN if one of the params is2', ()=> {
            assert.equal(mathEnforcer.sum(200, []), undefined);
        });


        it('should return undefined on NaN if both params r', ()=> {
            assert.equal(mathEnforcer.sum({}, []), undefined)
        });

        it('should return expected sum value1', ()=> {
            assert.equal(mathEnforcer.sum(15,15), 30);
        });

        it('should return expected sum value2', ()=> {
            assert.equal(mathEnforcer.sum(-15,15), 0);
        });
        it('should return expected sum value9', ()=> {
            assert.equal(mathEnforcer.sum(15,-15), 0);
        });

        it('should return expected sum value3', ()=> {
            assert.equal(mathEnforcer.sum(30,-15), 15);
        });

        it('should return expected sum value4', ()=> {
            assert.equal(mathEnforcer.sum(-15,-15), -30);
        });

        it('should return expected sum value5', ()=> {
            assert.equal(mathEnforcer.sum(5.5,4.5), 10);
        });

        it('should return expected sum value6', ()=> {
            assert.equal(mathEnforcer.sum(5.5,-4.5), 1);
        });

        it('should return expected sum value7', ()=> {
            assert.equal(mathEnforcer.sum(-5.5,-4.5), -10);
        });


        it('should return expected sum value8', ()=> {
            assert.equal(mathEnforcer.sum(-5,4.5), -0.5);
        });
    });
});