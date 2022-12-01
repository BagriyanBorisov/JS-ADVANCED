let {assert} = require("chai");
let {isOddOrEven} = require("../02.EvenOrOdd");


describe("Test evenOrOdd", ()=>
{
    describe("Should return undefined", ()=>
    {
        it("undefined with array", ()=>{
            assert.equal(isOddOrEven([]), undefined);
        })
        it("undefined with obj", ()=>{
            assert.equal(isOddOrEven({}), undefined);
        })
        it("undefined with number", ()=>{
            assert.equal(isOddOrEven(Number(15)), undefined);
        })
    })

    describe("Should return even", ()=>{
        it("even", ()=>
        {
            assert.equal(isOddOrEven("Bagi"), "even")
        })
    })

        describe("Should return odd", ()=>{
            it("odd", ()=>
            {
                assert.equal(isOddOrEven("Bagie"), "odd")
            })
    })
})
