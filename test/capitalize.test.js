import capitalize from "../modules/capitalize.js";

describe('capitalize()', () => {
        test('"random string" should become "Random string"', () => {
                expect(capitalize("random string")).toBe("Random string");
        });

        test('"RANDOM STRING" shoud become "Random string', () => {
                expect(capitalize("RANDOM STRING")).toBe("Random string");
        });

        test('"@123random string" should become "Random string', () => {
                expect(capitalize("@123random string")).toBe("Random string");
        });
});