const calcSquareErrorFirst = require("../calculateSquare");
const expect = require("chai").expect;

describe(
    "Calculate Square",
    () => {
        it("Should return 4 when passed 2", (done) => {
            calcSquareErrorFirst(2, (err, result) => {
                expect(result).to.equal(4);
                done();
            })
        });
        it("Should return an error when passed a string", (done) => {
            calcSquareErrorFirst("string", (err, result) => {
                expect(err).to.not.equal(null);
                expect(err.message).to.equal("Argument of type number is expected")
                done();
            })
        });
    }
);

// must test as async function!!! "done" function
