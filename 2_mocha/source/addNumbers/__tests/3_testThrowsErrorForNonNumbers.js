import { iAddNumbers } from '../iAddNumbers.js';
import assert from 'assert';

describe("tests throws error for strings", function() {
    
    it('hello+world=error', function() {
        try {
            iAddNumbers('hello','world');
        } catch(e) {
            assert.equal(e,  "Error: I add only numbers");
        }
        // assert.throws(() => iAddNumbers('hello','world'), Error, "Error: I add only numbers");
    });

    it('hello+20=error', function() {
        try {
            iAddNumbers('hello','20');
        } catch(e) {
            assert.equal(e,  "Error: I add only numbers");
        }
       
    });

    it('20+hello=error', function() {
        try {
            iAddNumbers('20','world');
        } catch(e) {
            assert.equal(e,  "Error: I add only numbers");
        }
    });

    it('20+1a=error', function() {
        try {
            iAddNumbers('20','1a');
        } catch(e) {
            assert.equal(e,  "Error: I add only numbers");
        }
    });
});