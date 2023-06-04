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
describe("converts numbers over 100 to string of Roman Numerals", () => {
  test("prints CCC if number is 300", () => {
    expect(convertNumberToRomanNumeral(300)).toBe("CCC");
  });
  test("prints CMXXI if number is 921", () => {
    expect(convertNumberToRomanNumeral(921)).toBe("CMXXI");
  });
});

describe("converts numbers over 1000 to string of Roman Numerals", () => {
  test("prints CCC if number is 3000", () => {
    expect(convertNumberToRomanNumeral(3000)).toBe("MMM");
  });
  test("prints MCDLXXVIII if number is 1478", () => {
    expect(convertNumberToRomanNumeral(1478)).toBe("MCDLXXVIII");
  });
});

describe("will not convert invalid numbers", () => {
  test("throws error if number is over 3000", () => {
    expect(() => convertNumberToRomanNumeral(4000)).toThrow(
      "number must be between 1 and 3000"
    );
  });
  test("throws error if number is less than 1", () => {
    expect(() => convertNumberToRomanNumeral(0)).toThrow(
      "number must be between 1 and 3000"
    );
    expect(() => convertNumberToRomanNumeral(-40)).toThrow(
      "number must be between 1 and 3000"
    );
  });
  test("throws error if is not a number", () => {
    expect(() => convertNumberToRomanNumeral("cat")).toThrow(
      "number is required"
    );
  });
});
