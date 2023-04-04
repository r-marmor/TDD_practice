import reverseString from "../modules/reverseString.js";

describe('reverseString()', () => {
    test("The function should reverse the string", () => {
            expect(reverseString("reverse string")).toBe("gnirts esrever");
    });
});