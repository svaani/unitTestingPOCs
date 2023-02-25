import { iAddNumbers } from '../iAddNumbers.js';
import { describe, it, expect } from 'vitest';

describe("tests throws error for strings", function() {
    
    it('hello+world=error', function() {
        expect(()=>iAddNumbers('hello','world')).toThrow("Error: I add only numbers");
    });

    it('hello+20=error', function() {
        expect(()=>iAddNumbers('hello',20)).toThrow("Error: I add only numbers");
    });

    it('20+hello=error', function() {
        expect(()=>iAddNumbers(20, 'hello')).toThrow("Error: I add only numbers");
    });

    it('20+1a=error', function() {
        expect(()=>iAddNumbers(20, '1a')).toThrow("Error: I add only numbers");
    });
});