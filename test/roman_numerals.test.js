import { convertNumberToRomanNumeral } from "../challenges/roman_numerals";

describe("prints individual digits as string of Roman Numerals", () => {
  test("prints I if number is 1", () => {
    expect(convertNumberToRomanNumeral(1)).toBe("I");
  });
  test("prints II if number is 2", () => {
    expect(convertNumberToRomanNumeral(2)).toBe("II");
  });
  test("prints X if number is 10", () => {
    expect(convertNumberToRomanNumeral(10)).toBe("X");
  });
  test("prints XX if number is 20", () => {
    expect(convertNumberToRomanNumeral(20)).toBe("XX");
  });
  test("prints XIV if number is 16", () => {
    expect(convertNumberToRomanNumeral(16)).toBe("XVI");
  });
});
