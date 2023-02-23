import { iAddNumbers } from '../iAddNumbers.js';

describe("tests works for hex numbers", function() {

    it('20+0x9D2=2534', function() {
        const sum = iAddNumbers('20','0x9D2');
        expect(sum).toEqual(2534);
    });
});