
function solve(input) {
    input.sort((a, b) => a.localeCompare(b) );
    input.sort((a, b) => a.length - b.length)
    for (const iterator of input) {
        console.log(iterator);
    }
}

solve(['alpha', 'beta', 'gamma'])
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])