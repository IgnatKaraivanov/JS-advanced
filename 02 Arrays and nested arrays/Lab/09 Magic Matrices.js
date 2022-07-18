function solve(input) {
    let sum = input[0].reduce((a, b) => a + b)

    for (let i = 0; i < input[0].length; i++) {
        let currentColSum = 0;
        for (let j = 0; j < input.length; j++) {
            currentColSum += input[j][i];
        }
        if (currentColSum !== sum) {
            return false;
        }
    }
    return true;
}

solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]])