import { iAddNumbers } from '../iAddNumbers.js';
import jasmine from 'jasmine';

describe("tests all number sums", function() {
    it('2+3=5', function() {
        const sum = iAddNumbers(2,3);
        expect(sum).toEqual(5);
    });

    it('large number test 1000000000+1000000000=2000000000', function() {
        const sum = iAddNumbers(1000000000,1000000000);
        expect(sum).toEqual(2000000000);
    });

});