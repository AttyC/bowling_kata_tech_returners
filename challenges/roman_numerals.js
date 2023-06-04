const romanNumeralUnits = {
  0: "",
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
};

const romanNumeralTens = {
  0: "",
  1: "X",
  2: "XX",
  3: "XXX",
  4: "XL",
  5: "L",
  6: "LX",
  7: "LXX",
  8: "LXXX",
  9: "LIX",
};

const romanNumeralHundreds = {
  1: "C",
  2: "CC",
  3: "CCC",
  4: "CD",
  5: "D",
  6: "DC",
  7: "DCC",
  8: "DCCC",
  9: "CM",
};

export function convertNumberToRomanNumeral(number) {
  if (number === undefined) throw new Error("number is required");

  let numArr = Array.from(number.toString());

  // hundreds
  if (numArr.length === 3) {
    const hundreds = numArr[0];
    const tens = numArr[1];
    const units = numArr[2];

    const romanNum =
      romanNumeralHundreds[hundreds] +
      romanNumeralTens[tens] +
      romanNumeralUnits[units];
    return romanNum;
  }
  // tens
  if (numArr.length === 2) {
    const tens = numArr[0];
    const units = numArr[1];

    const romanNum = romanNumeralTens[tens] + romanNumeralUnits[units];
    return romanNum;
  }

  // units
  if (numArr.length <= 1) return romanNumeralUnits[number];
}
