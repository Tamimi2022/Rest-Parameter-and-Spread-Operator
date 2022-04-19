/* Function 1
Write a simple function that adds multiple numbers together

The function accepts multiple arguments

Use the rest parameter to make sure your function uses all arguments as an array.
*/
const add = function(...numbers) {
    return numbers.reduce((x, y) => {
        return x + y;
    })
}
console.log(add(2, 4, 8, 9, 0, 50));

/* Function 2
Write a simple function that adds multiple numbers together

The function takes 1 argument, which is an array of numbers

Use the spread operator to make sure your function
sums up all items in the array.
*/
const sum = function(number1, number2, number3, number4) {
    return number1 + number2 + number3 + number4;
}
const calcu = [4, 5, 6, 8];

console.log(sum(...calcu));