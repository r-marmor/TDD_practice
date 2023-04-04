import calculator from "../modules/calculator";

describe('calculator()', () => {
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
});