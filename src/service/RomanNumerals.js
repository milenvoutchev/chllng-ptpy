const ROMAN_NUMBERS = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
];
const DECIMAL_NUMBERS = [
    1000,
    900,
    500,
    400,
    100,
    90,
    50,
    40,
    10,
    9,
    5,
    4,
    1
];

class RomanNumerals {
    static toRoman(decimal) {
        if (typeof decimal !== "number" || decimal <= 0) {
            throw new Error("Method was called with an invalid argument.");
        }

        let romanResult = [];

        while (decimal !== 0) {
            const index = DECIMAL_NUMBERS.findIndex(number => {
                return decimal >= number;
            });
            romanResult.push(ROMAN_NUMBERS[index]);
            decimal -= DECIMAL_NUMBERS[index];
        }

        return romanResult.join("");
    }

    static fromRoman(roman) {
        if (typeof roman !== "string" || roman.length === 0) {
            throw new Error("Method was called with an invalid argument.");
        }

        const matches = roman.toUpperCase().match(/(CM|CD|XC|XL|IX|IV|[A-Z])/gi);
        const validNumber = [];
        matches.forEach((elem) => {
            if (!ROMAN_NUMBERS.includes(elem)) {
                throw new Error(`Invalid character found: ${elem}`);
            }

            const romanIndex = ROMAN_NUMBERS.indexOf(elem);
            validNumber.push(DECIMAL_NUMBERS[romanIndex]);
        });

        return validNumber.reduce((accumulated, currentNumber) => {
            return accumulated + currentNumber;
        }, 0);
    }
}

export default RomanNumerals;
