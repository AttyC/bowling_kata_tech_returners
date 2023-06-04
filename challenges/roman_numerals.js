const romanNumerals = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  10: "X",
};

export function convertNumberToRomanNumeral(number) {
  if (number === undefined) throw new Error("number is required");
  return romanNumerals[number];
}
