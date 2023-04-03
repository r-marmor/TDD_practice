import capitalize, { caesarCipher } from "./script";
import { reverseString } from "./script";
import { calculator } from "./script";

test('"random string" should become "Random string"', () => {
        expect(capitalize("random string")).toBe("Random string");
});

test('"RANDOM STRING" shoud become "Random string', () => {
        expect(capitalize("RANDOM STRING")).toBe("Random string");
});

test('"@123random string" should become "Random string', () => {
        expect(capitalize("@123random string")).toBe("Random string");
});

test("The function should reverse the string", () => {
        expect(reverseString("reverse string")).toBe("gnirts esrever");
});

test('The method add should sum the two numbers put as parameters', () => {
        expect(calculator.add(1, 2)).toBe(3);
});

test('The method substract should substract the two numbers put as parameters', () => {
        expect(calculator.substract(2, 1)).toBe(1);
        expect(calculator.substract(1, 4)).toBe(-3);
});

test('The method divide should divide the two numbers put as parameters', () => {
        expect(calculator.divide(4, 2)).toBe(2);
        expect(calculator.divide(2, 4)).toBe(0.5);
});

test('The method multitply should multiply the two numbers put as parameters', () => {
        expect(calculator.multiply(4, 2)).toBe(8);
        expect(calculator.multiply(100, 0)).toBe(0);
});

describe('caesarCipher', () => {
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