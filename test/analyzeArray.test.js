import analyzeArray from "../modules/analyzeArray";

describe('analyzeArray()', () => {
    test('throws an error if the input is not a non-empty array', () => {
            expect(() => analyzeArray([])).toThrow("Invalid input");
            expect(() => analyzeArray('not an array')).toThrow('Invalid input');
    });
    test('takes an array of numbers and returns an object with average, min, max, and length', () => {
            const arr = [1,8,3,4,2,6];
            expect(analyzeArray(arr)).toStrictEqual({ average: 4, min: 1, max: 8, length: 6 });
            
    });
    test('returns the correct values for an array with negative numbers', () => {
            const arr = [-2, 0, 3, -5, 1];
            expect(analyzeArray(arr)).toStrictEqual({ average: -0.6, min: -5, max: 3, length: 5 });
          });
});