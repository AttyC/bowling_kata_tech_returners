import { convertNumberToRomanNumeral } from "../challenges/roman_numerals";

describe("converts numbers under 10 to string of Roman Numerals", () => {
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
});
describe("converts numbers divisible by 10 to string of Roman Numerals", () => {
  test("prints X if number is 10", () => {
    expect(convertNumberToRomanNumeral(10)).toBe("X");
  });
  test("prints XX if number is 20", () => {
    expect(convertNumberToRomanNumeral(20)).toBe("XX");
  });
});
describe("converts numbers over 10 and under 100 to string of Roman Numerals", () => {
  test("prints XIV if number is 16", () => {
    expect(convertNumberToRomanNumeral(16)).toBe("XVI");
  });
  test("prints II if number is 27", () => {
    expect(convertNumberToRomanNumeral(2)).toBe("II");
  });
  test("prints XX if number is 98", () => {
    expect(convertNumberToRomanNumeral(20)).toBe("XX");
  });
  test("prints XIV if number is 16", () => {
    expect(convertNumberToRomanNumeral(16)).toBe("XVI");
  });
});
