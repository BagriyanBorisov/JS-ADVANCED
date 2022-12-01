let {assert} = require("chai");
let {lookupChar} = require("../03.CharLookup");

describe("Test func", ()=>
{
    
    describe("Testing with wrong params should return undefined", ()=>{
        it('should return undefined with null params',  ()=> {
            assert.equal(lookupChar(), undefined);
        });
        it('should return undefined with one wrong param', ()=> {
            assert.equal(lookupChar(Number(5),5), undefined);
        });

        it('should return undefined with one wrong param', ()=> {
            assert.equal(lookupChar(5,[5]), undefined);
        });

        it('should return undefined with one wrong param', ()=> {
            assert.equal(lookupChar("Number(5)",1.6), undefined);
        });
    });
    
    
    it('should return value with right params', ()=>{
        assert.equal(lookupChar("Bagie", 4), "e");
    });

    it('should  return invalid index message', ()=> {

        assert.equal(lookupChar("Bagie", 5), "Incorrect index");
    });

    it('should  return invalid index message', ()=> {

        assert.equal(lookupChar("Bagie", -120), "Incorrect index");
    });
    
    
});
