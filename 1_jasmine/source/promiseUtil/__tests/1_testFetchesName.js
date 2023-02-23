import * as Utils from '../iFetchName.js';

describe("test Fetches Name", function() {
    it('id+name to be returned', async function() {
        spyOn(Utils, "getName").and.returnValue("242 Ira");
        const name  = await Utils.iFetchName(242);
        expect(name).toEqual("242 Ira");
    });

    it('blank arg test', async function() {
        spyOn(Utils, "getName").and.returnValue("Name can't be found");
        const name  = await Utils.iFetchName();
        expect(name).toEqual("Name can't be found");
    });

    it('gives error', async function() {
        spyOn(Utils, "getName").and.callFake(() => "Name can't be found");
        const name  = await Utils.iFetchName(243);
        expect(name).toEqual("Name can't be found");
    });
});