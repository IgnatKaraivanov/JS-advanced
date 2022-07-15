function solve(arr) {
    let output = [];
    for (let index = 0; index < arr.length; index++) {
        let currentCommand = arr[index];
        if (currentCommand === 'add') {
            output.push(index + 1);
        } else if (currentCommand === 'remove') {
            output.pop();
        }
    }
    if (output.length === 0) {
        console.log('Empty');
    } else {
        console.log(output.join('\n'));
    }
}


solve(['add',
    'add',
    'add',
    'add']
)

solve(['remove',
    'remove',
    'remove']

)
solve(['add', 'add', 'remove', 'add', 'add']
)