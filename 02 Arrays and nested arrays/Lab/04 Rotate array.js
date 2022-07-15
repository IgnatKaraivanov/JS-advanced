function solve(arr, rotations) {
    for (let index = 0; index < rotations; index++) {
        let last = arr.pop()
        arr.unshift(last)
    }
    console.log(arr.join(' '));
}
solve(['1', '2', '3', '4'], 2)

solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15)
