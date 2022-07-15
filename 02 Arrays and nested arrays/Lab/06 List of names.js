function solve(lines) {
  lines = lines.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < lines.length; i++) {
    console.log(`${i + 1}.${lines[i]}`);
  }
}

solve(["John", "Bob", "Christina", "Ema"]);
