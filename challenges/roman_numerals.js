const romanNumerals = {
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

export function convertNumberToRomanNumeral(number) {
  if (number === undefined) throw new Error("number is required");

  let numArr = Array.from(number);

  if (number % 10 === 0) {
    return "X".repeat(number.toString().charAt(0));
  }
  if (numArr.length <= 1) return romanNumerals[number];
}
