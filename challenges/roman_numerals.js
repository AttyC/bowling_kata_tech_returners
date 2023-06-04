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
export function convertNumberToRomanNumeral(number) {
  if (number === undefined) throw new Error("number is required");

  let numArr = Array.from(number.toString());

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
