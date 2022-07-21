function solve(input) {
    let obj={}
for (let index = 0; index < input.length; index+=2) {
    let productName = input[index]
    let calories = Number(input[index+1])
    obj[productName]=calories    
}
console.log(obj);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])