let {assert} = require('chai');
let companyAdministration = require('../companyAdministration')

describe("Tests CompanyAdministration", ()=> {
    describe("Test hiringEmployee", ()=>{

        it('should throw error on position', ()=> {
            assert.throws(()=>companyAdministration.hiringEmployee("Gosho", "gei", 15),Error,
                `We are not looking for workers for this position.`);
        });

        it('should throw error on yearExperience', ()=> {
            assert.equal(companyAdministration.hiringEmployee("Gosho", "Programmer", 2),
                `Gosho is not approved for this position.`);
        });

        it('should hire employee', ()=> {
            assert.equal(companyAdministration.hiringEmployee("Gosho", "Programmer", 3),
                `Gosho was successfully hired for the position Programmer.`);
        });

        it('should hire employee', ()=> {
            assert.equal(companyAdministration.hiringEmployee("Gosho", "Programmer", 4),
                `Gosho was successfully hired for the position Programmer.`);
        });
    });

    describe("Test calculateSalary",()=>{
        it('should throw error on param', ()=> {
            assert.throws(()=>companyAdministration.calculateSalary("sheise"), Error, `Invalid hours`);
        });

        it('should throw error on param2', ()=> {
            assert.throws(()=>companyAdministration.calculateSalary({qty: "sheise"}), Error, `Invalid hours`);
        });

        it('should throw error on param1', ()=> {
            assert.throws(()=>companyAdministration.calculateSalary(-20), Error, `Invalid hours`);
        });

        it('should be correct with small hours', ()=> {
            assert.equal(companyAdministration.calculateSalary(2), 30);
        });

        it('should be correct with small hours1', ()=> {
            assert.equal(companyAdministration.calculateSalary(1), 15);
        });

        it('should be correct with small hours1', ()=> {
            assert.equal(companyAdministration.calculateSalary(0), 0);
        });

        it('should be correct with big hours', ()=> {
            assert.equal(companyAdministration.calculateSalary(161), 3415);
        });
        it('should be correct with big hours1', ()=> {
            assert.equal(companyAdministration.calculateSalary(100), 1500);
        });


    });

    describe("Test firedEmployee",()=>{
        it('should throws on invalid paramArray', ()=> {
            assert.throws(()=>companyAdministration.firedEmployee(1, []), Error, `Invalid input`);
        });

          it('should throws on invalid paramArray2', ()=> {
              assert.throws(()=>companyAdministration.firedEmployee("[]", 1), Error, `Invalid input`);
          });


          it('should throws on invalid paramArray1', ()=> {
              assert.throws(()=>companyAdministration.firedEmployee("pesho", 0), Error, `Invalid input`);
          });

        it('should throws on invalid paramIndex', ()=> {
            assert.throws(()=>companyAdministration.firedEmployee(["Peio", "Qvkata"], 2), Error, `Invalid input`);
        });

          it('should throws on invalid paramIndex5', ()=> {
              assert.throws(()=>companyAdministration.firedEmployee(["Peio", "Qvkata"], "30minGoTyrsqTwa"), Error, `Invalid input`);
          });

        it('should throws on invalid paramIndex1', ()=> {
            assert.throws(()=>companyAdministration.firedEmployee(["Peio", "Qvkata"], -1), Error, `Invalid input`);
        });

        it('should throws on invalid paramIndex2', ()=> {
            assert.throws(()=>companyAdministration.firedEmployee(["Peio", "Qvkata"], 3), Error, `Invalid input`);
        });


        it('should return correctArray', ()=>{
            assert.equal(companyAdministration.firedEmployee(["Dimcho", "Leshnik", "Kesten"], 0), "Leshnik, Kesten");
        });

        it('should return correctArray1', ()=>{
            assert.equal(companyAdministration.firedEmployee(["Dimcho", "Leshnik", "Kesten"], 2), "Dimcho, Leshnik");
        });

          it('should return correctArray2', ()=>{
              assert.equal(companyAdministration.firedEmployee(["Dimcho", "Leshnik", "Kesten"], 1), "Dimcho, Kesten");
          });

          it('should return correctArray4', ()=>{
              assert.equal(companyAdministration.firedEmployee(["Dimcho", "Leshnik"], 0), "Leshnik");
          });


          it('should return correctArray3', ()=>{
              assert.equal(companyAdministration.firedEmployee(["Dimcho"], 0), "");
          });

    });

});
