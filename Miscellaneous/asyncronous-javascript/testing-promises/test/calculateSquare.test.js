const calculateSquare = require("../src/calculateSquare");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

describe("Calculate Square using Promises",
    //do not use arrow syntax here, mocha is frail
    function () {
        //by default mocha tests will fail after 2s
        this.timeout(3000);
        it("Should resolve with 4 when passed 2", () => {
            return expect(calculateSquare(2)).to.eventually.be.equal(4);
        });

        it("Should become fulfilled when passed 2", () => {
            return expect(calculateSquare(2)).to.be.fulfilled;
        });

        it("Should be rejected when passed a string", () => {
            return expect(calculateSquare("string")).to.be.rejected;
        });
    }
);

//If you do not notify(done) or return the expect statement the tests will always pass. Be careful
// mocha does not like arrow functions, be weary

describe("Multiple Assertions",
    //do not use arrow syntax here, mocha is frail
    function () {
        //by default mocha tests will fail after 2s
        this.timeout(3000);

        it("Should resolve with 4 when passed 2", () => {
            return calculateSquare(2).then(res => {
                expect(res).to.be.above(3);
                expect(res).to.be.equal(4);
            })
        });

        it("Should be rejected when passed a string", () => {
            return calculateSquare("string").catch(err => {
                expect(err).to.not.equal(null);
                expect(err.message).to.equal("Argument of type number is expected");
            })
        });
    }
);
