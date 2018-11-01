
import "jasmine";

describe("connect", () => {

    const doneFn = jasmine.createSpy("success");

    beforeEach(() => {
        return new Promise((resolve, reject) => {

                doneFn(true);
                resolve();

        });
    });

    it("should connect", (done) => {
        expect(doneFn).toHaveBeenCalledWith(true);
        done();
    });

    afterAll(() => {

            return;

    });

});
