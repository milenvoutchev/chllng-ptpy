import RomanNumerals from "./RomanNumerals";

test('fromRoman', () => {
    expect(RomanNumerals.fromRoman("I")).toBe(1);
    expect(RomanNumerals.fromRoman("V")).toBe(5);
    expect(RomanNumerals.fromRoman("X")).toBe(10);
    expect(RomanNumerals.fromRoman("MCMXC")).toBe(1990);
    expect(RomanNumerals.fromRoman("MMVIII")).toBe(2008);

    expect(() => RomanNumerals.fromRoman("")).toThrowError("Method was called with an invalid argument.");
    expect(() => RomanNumerals.fromRoman(100)).toThrowError("Method was called with an invalid argument.");
    expect(() => RomanNumerals.fromRoman(true)).toThrowError("Method was called with an invalid argument.");
    expect(() => RomanNumerals.fromRoman("FFFFFF")).toThrowError("Invalid character found: F");
});

test('toRoman', () => {
    expect(RomanNumerals.toRoman(1)).toBe("I");
    expect(RomanNumerals.toRoman(5)).toBe("V");
    expect(RomanNumerals.toRoman(10)).toBe("X");
    expect(RomanNumerals.toRoman(1990)).toBe("MCMXC");
    expect(RomanNumerals.toRoman(2008)).toBe("MMVIII");

    expect(() => RomanNumerals.toRoman(0)).toThrowError("Method was called with an invalid argument.");
    expect(() => RomanNumerals.toRoman(-1)).toThrowError("Method was called with an invalid argument.");
    expect(() => RomanNumerals.toRoman("SOME STRING")).toThrowError("Method was called with an invalid argument.");
    expect(() => RomanNumerals.toRoman(true)).toThrowError("Method was called with an invalid argument.");
});
