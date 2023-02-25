/* comment "type": "module" in package.json, to run this as sinon doesn't support es6 modules*/
const sinon = require('sinon');
const { Utils } =  require('../iFetchName.js');
const assert = require('assert');

describe("test Fetches Name", function() {
    it('id+name to be returned', async function() {
        // sinon.stub(Utils, "getName").callsFake(id=>id+" Ira");
        // assert.equal(Utils.getName(20),"20 Ira");

        const getNameStub = sinon.stub(Utils, "getName");
        getNameStub.callsFake(()=>Promise.resolve('242 Ira'));
        const name  = await Utils.iFetchName(242);
        assert.equal(name,"242 Ira");

        getNameStub.restore();
    });

    it('blank arg test', async function() {
        // incomplete
        const getNameStub = sinon.stub(Utils, "getName");
        getNameStub.callsFake(()=>Promise.resolve("Name can't be found"));
        try {

        const name  = await Utils.iFetchName();
        } catch(err){
            assert.equal(err,"Name can't be found");
        }
    
        getNameStub.restore();
    });

    
});
//test case can be written for getName as well
