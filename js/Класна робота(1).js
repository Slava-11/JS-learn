let numbers = [1,2,3,4,5];
const names = ['Misha', 'Slava'];

numbers.push(5);
const five = numbers.pop(); //5
numbers.shift(0);
const zero =numbers.unshift(); //0

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

for (element of numbers) {
    console.log(element)
}

numbers.forEach((number) => {
    console.log(number)
})

numbers.concat(7,8) //[1,2,3,4,5,7,8]
numbers.concat([9]) //[1,2,3,4,5,7,8,9]

numbers.join('|') // "1|2|3|4|5" - string

// method map, filter