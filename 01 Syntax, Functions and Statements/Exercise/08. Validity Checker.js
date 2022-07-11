function solve(x1, y1, x2, y2) {

    function result(x1, y1, x2, y2) {
        const distance = Math.sqrt(((x2-x1)**2) + ((y2-y1)**2));
        return Number.isInteger(distance) ? 'valid' : 'invalid';
    }

    return `{${x1}, ${y1}} to {0, 0} is ${result(x1, y1, 0, 0)}\n` +
           `{${x2}, ${y2}} to {0, 0} is ${result(x2, y2, 0, 0)}\n` +
           `{${x1}, ${y1}} to {${x2}, ${y2}} is ${result(x1, y1, x2, y2)}\n`;
}