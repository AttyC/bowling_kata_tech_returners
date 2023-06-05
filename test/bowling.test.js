import { getScore } from "../challenges/bowling";
describe("strike scoring", () => {
  test("return X if I bowl a strike", () => {
    const frame1 = [10, 0];
    expect(getScore(frame1)).toBe("X");
  });
  test("return / if I bowl a spare", () => {
    const frame1 = [3, 7];
    expect(getScore(frame1)).toBe("/");
  });
});

// Arrange, Act, Assert

// 1 game = 10 frames
// 1 frame = 2 turns
// strike = 10 points - all skittles down in first go of a frame - 10 points or X
// spare - all skittles down using both turns in a frame - 10 points or /
// extra points to be added in both above scenarios
