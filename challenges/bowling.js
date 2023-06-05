export function getScore(frame1) {
  if (frame1[0] === 10) {
    return "X";
  }
  if (frame1[0] + frame1[1] === 10) return "/";
}
