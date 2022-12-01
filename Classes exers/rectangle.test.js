const rect = require('./01.rectangle');
const assert = require('chai').assert
const currRect = new rect(5,4,"red");
console.log(currRect.calcArea());
describe("Rect", ()=>
{
    it("Actual area",()=>
    {
        let rectangle = new rect(4,5,'Red');

        assert.equal(rectangle.calcArea(), 20);
    })
})