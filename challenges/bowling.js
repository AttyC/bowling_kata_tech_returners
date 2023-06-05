export function getScore(frame1) {
  let frameScore = 0;
  if (frame1[0] === 10) {
    return "X";
  }
  frameScore = frame1[0] + frame1[1];
  return frameScore === 10 ? "/" : frameScore;
}
