import * as Utils from '../iFetchName.js';
import sinon from 'sinon';
import assert from 'assert';

describe("test Fetches Name", function() {
    it('id+name to be returned', async function() {
        sinon.stub(Utils, "getName").yields(10)
        // spyOn(Utils, "getName").and.returnValue("242 Ira");
        const name  = await Utils.iFetchName(242);
        assert.equal(name,"20");
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

//test case can be written for getName as well
