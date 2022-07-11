function solve(num, p1, p2, p3, p4, p5) {
    let inputAsNumber = Number(num);
    let arrOfCommands = [p1, p2, p3, p4, p5];
    // for (const command of arrOfCommands) {
    //     if (command === 'chop') {
    //         inputAsNumber /= 2;
    //     }
    //     if (command === 'dice') {
    //         inputAsNumber = Math.sqrt(inputAsNumber);
    //     }
    //     if (command === 'spice') {
    //         inputAsNumber += 1
    //     }
    //     if (command === 'bake') {
    //         inputAsNumber *= 3
    //     }
    //     if (command === 'fillet') {
    //         inputAsNumber *= 0.8
    //     }
    //     console.log(inputAsNumber);
    // }
    let chop = function () {
        return inputAsNumber / 2;
    };
    let dice = function () {
        return Math.sqrt(inputAsNumber);
    };
    let spice = function () {
        return inputAsNumber + 1;
    };
    let bake = function () {
        return inputAsNumber * 3;
    };
    let fillet = function () {
        return inputAsNumber * 0.8;
    };
    for (let index = 0; index < arrOfCommands.length; index++) {
        let currentCommand = arrOfCommands[index];
        switch (currentCommand) {
            case 'chop':
                inputAsNumber = chop(inputAsNumber);
                console.log(inputAsNumber);
                break;
            case 'dice':
                inputAsNumber = dice(inputAsNumber);
                console.log(inputAsNumber);
                break;
            case 'spice':
                inputAsNumber = spice(inputAsNumber);
                console.log(inputAsNumber);
                break;
            case 'bake':
                inputAsNumber = bake(inputAsNumber);
                console.log(inputAsNumber);
                break;
            case 'fillet':
                inputAsNumber = fillet(inputAsNumber);
                console.log(inputAsNumber);
                break;
        }

    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')