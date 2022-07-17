function solve(arr) {
  arr.sort((a, b) => b - a);
  let result = [];
  while (arr.length !== 0) {
    result.push(arr.pop());
    result.push(arr.shift());
  }

  return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
