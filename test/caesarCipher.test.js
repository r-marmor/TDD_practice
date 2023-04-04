import caesarCipher from "../modules/caesarCipher";

describe('caesarCipher()', () => {
    test('should shift letters by the given amount', () => {
        expect(caesarCipher('abc', 1)).toBe('bcd');
        expect(caesarCipher('xyz', 3)).toBe('abc');
        expect(caesarCipher('hello world', 5)).toBe('mjqqt btwqi');
        expect(caesarCipher('HELLO WORLD', 5)).toBe('MJQQT BTWQI');
        expect(caesarCipher('hello, world!', 5)).toBe('mjqqt, btwqi!');
    });

    test('should handle shifts greater than 26', () => {
        expect(caesarCipher('abc', 27)).toBe('bcd');
        expect(caesarCipher('xyz', 30)).toBe('bcd');
        expect(caesarCipher('hello world', 31)).toBe('mjqqt btwqi');
    });

    test('should handle shifts less than 0', () => {
        expect(caesarCipher('abc', -1)).toBe('zab');
        expect(caesarCipher('xyz', -3)).toBe('uvw');
        expect(caesarCipher('hello world', -5)).toBe('czggj rjmgy');
    });

    test('should handle non-alphabetic characters', () => {
        expect(caesarCipher('hello, world!', 5)).toBe('mjqqt, btwqi!');
        expect(caesarCipher('123', 1)).toBe('123');
        expect(caesarCipher('$#%&', 2)).toBe('$#%&');
        expect(caesarCipher(' ', 1)).toBe(' ');
        expect(caesarCipher('  ', 1)).toBe('  ');
    });
});