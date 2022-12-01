let {assert} = require('chai');
let flowerShop = require('./flowerShop.js');

describe(`Test FlowerShop`, ()=>{
   describe(`Test calcPriceOfFlowers`, ()=>{
       it('should throw error on input', ()=> {
           assert.throws(()=>flowerShop.calcPriceOfFlowers(1, 5,5),'Invalid input!');
           assert.throws(()=>flowerShop.calcPriceOfFlowers("Cvete", "asd",5),'Invalid input!');
           assert.throws(()=>flowerShop.calcPriceOfFlowers("Cvete", 5,"asd"),'Invalid input!');
           assert.throws(()=>flowerShop.calcPriceOfFlowers(5, "123",[]),'Invalid input!');
       });

       it('should return message',  ()=> {
           assert.equal(flowerShop.calcPriceOfFlowers("Cvete", 5,5),`You need $25.00 to buy Cvete!` )
       });
   });

   describe(`Test checkFlowersAvailable`,()=>{
       it('should return message', ()=> {
           assert.equal(flowerShop.checkFlowersAvailable("lale",["lale", "roza"]), "The lale are available!");
           assert.equal(flowerShop.checkFlowersAvailable("roza",["lale", "roza"]), "The roza are available!");
           assert.equal(flowerShop.checkFlowersAvailable("asd",["lale", "roza"]), `The asd are sold! You need to purchase more!`);
       });
   });

   describe(`Test sellFlowers`,()=>{
       it('should throw on input', function () {
           assert.throws(()=>flowerShop.sellFlowers(12, 5), `Invalid input!`);
           assert.throws(()=>flowerShop.sellFlowers(["Lale"], "asd"), `Invalid input!`);
           assert.throws(()=>flowerShop.sellFlowers(["Lale"], -1), `Invalid input!`);
           assert.throws(()=>flowerShop.sellFlowers(["Lale"], 1), `Invalid input!`);
           assert.throws(()=>flowerShop.sellFlowers(["Lale"], 2), `Invalid input!`);
           assert.throws(()=>flowerShop.sellFlowers({}, 1.5), `Invalid input!`);
       });

       it('should return message', function () {
           assert.equal(flowerShop.sellFlowers(["pesho","gosho","vankata"], 1), "pesho / vankata");
           assert.equal(flowerShop.sellFlowers(["pesho","gosho","vankata"], 0), "gosho / vankata");
           assert.equal(flowerShop.sellFlowers(["pesho","gosho","vankata"], 2), "pesho / gosho");
           assert.equal(flowerShop.sellFlowers(["pesho","gosho","vankata"], 1), "pesho / vankata");
           assert.equal(flowerShop.sellFlowers(["pesho"], 0), "");
       });
   });
});