import { convertNumberToRomanNumeral } from "../challenges/roman_numerals";

describe("prints individual digits as string of Roman Numerals", () => {
  test("prints I if number is 1", () => {
    expect(convertNumberToRomanNumeral(1)).toBe("I");
  });
  test("prints II if number is 2", () => {
    expect(convertNumberToRomanNumeral(2)).toBe("II");
  });
});
