import React, { useState } from "react";
import RomanNumerals from "../service/RomanNumerals";
import ConverterInput from "../components/ConverterInput";

export default function RomanNumeralsConverter() {
    const [romanNumber, setRomanNumber] = useState();
    const [decimalNumber, setDecimalNumber] = useState();

    const onChangeRoman = (roman) => {
        if (!roman) {
            setDecimalNumber("");
            setRomanNumber("");

            return;
        }
        setDecimalNumber(RomanNumerals.fromRoman(roman));
        setRomanNumber(roman);
    }

    const onChangeDecimal = (decimal) => {
        if (!decimal) {
            setDecimalNumber("");
            setRomanNumber("");

            return;
        }
        setRomanNumber(RomanNumerals.toRoman(Number.parseInt(decimal)));
        setDecimalNumber(decimal);
    }

    return (
        <React.Fragment>
            <ConverterInput label="Roman number" value={romanNumber} onChange={onChangeRoman} />
            <ConverterInput label="Decimal number" value={decimalNumber} onChange={onChangeDecimal} isNumber={true} />
        </React.Fragment>
    )
}
