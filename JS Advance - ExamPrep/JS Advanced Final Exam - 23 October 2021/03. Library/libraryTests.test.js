let {assert} = require(`chai`);
let library = require(`./library`);

describe("Test library",()=>{
    describe("Test calcBookPrice",()=>{
        it('should throw on invalid input', ()=> {
            assert.throws(()=>library.calcPriceOfBook(12, 2000), "Invalid input");
            assert.throws(()=>library.calcPriceOfBook("book", 12.5), "Invalid input");
            assert.throws(()=>library.calcPriceOfBook([], "asd"), "Invalid input");
        });
        it('should return string', function () {
            assert.equal(library.calcPriceOfBook("pesho", 1979), `Price of pesho is 10.00`)
            assert.equal(library.calcPriceOfBook("pesho", 1980), `Price of pesho is 10.00`)
            assert.equal(library.calcPriceOfBook("pesho", 2000), `Price of pesho is 20.00`)
        });

    });

    describe("Test findBook",()=>{
        it('should throw error', function () {
            assert.throws(()=>library.findBook([],"asd"), "No books currently available");
        });

        it('should return string', function () {
            assert.equal(library.findBook(["asd","pesho"], "asd"), "We found the book you want.");
            assert.equal(library.findBook(["asd","pesho"], "pesho"), "We found the book you want.");
            assert.equal(library.findBook(["asd","pesho"], "gosho"), "The book you are looking for is not here!");
        });
    });

    describe("Test arrangeBooks",()=>{
        it('should throw on invalid input', function () {
            assert.throws(()=> library.arrangeTheBooks(1.5), "Invalid input");
            assert.throws(()=> library.arrangeTheBooks("bate"), "Invalid input");
            assert.throws(()=> library.arrangeTheBooks(-5), "Invalid input");
            assert.throws(()=> library.arrangeTheBooks(-1.5), "Invalid input");
        });

        it('should return string', function () {
            assert.equal(library.arrangeTheBooks(40),"Great job, the books are arranged.");
            assert.equal(library.arrangeTheBooks(30),"Great job, the books are arranged.");
            assert.equal(library.arrangeTheBooks(50),"Insufficient space, more shelves need to be purchased.");
            assert.equal(library.arrangeTheBooks(41),"Insufficient space, more shelves need to be purchased.");
        });
    });

});
