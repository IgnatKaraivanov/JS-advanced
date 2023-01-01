function solve(numbers, startIndex, endIndex) {
  if (!Array.isArray(numbers)) {
    return NaN;
  }
  let start = Math.max(startIndex, 0);
  let end = Math.min(endIndex, numbers.length - 1);
  let subNumbers = numbers.slice(start, end + 1);
  let sum = subNumbers.reduce((a, x) => a + Number(x), 0);
  return sum;
}
solve([10, 20, 30, 40, 50, 60], 3, 300);
