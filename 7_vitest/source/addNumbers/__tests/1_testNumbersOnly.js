import { iAddNumbers } from '../iAddNumbers.js';
import { describe, it, expect } from 'vitest';

describe("tests all number sums", function() {
    it('2+3=5', function() {
        const sum = iAddNumbers(2,3);
        expect(sum).toEqual(5);
    });

    it('large number test 1000000000+1000000000=2000000000', function() {
        const sum = iAddNumbers(1000000000,1000000000);
        expect(sum).toEqual(2000000000);
    });

    it('max safe integer 9007199254740991+1=9007199254740992', function() {
        const sum = iAddNumbers(9007199254740991,1);
        expect(sum).toEqual(9007199254740992);
    });

    it('max 32 bit integer 2,147,483,647+1=2,147,483,648', function() {
        const sum = iAddNumbers(2147483647,1);
        expect(sum).toEqual(2147483648);
    });

    it('bigInt 91942213363574161572522430563301811072406154908250+1=91942213363574161572522430563301811072406154908251', function() {
        const sum = iAddNumbers(91942213363574161572522430563301811072406154908250,1);
        expect(sum).toEqual(91942213363574161572522430563301811072406154908251);
    });

});