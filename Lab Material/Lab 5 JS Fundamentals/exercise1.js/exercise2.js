const matrix = [[2, 3], [34, 89], [55, 101, 34], [34, 89, 34, 99]]

//we write infinity to 
const flatten = matrix.flat(Infinity)
console.log(flatten);

//max
const max = flatten.reduce((a,b) => a> b ? a : b );
console.log(max)
//three points is nessecry to separate the numbers 
console.log(Math.max(...flatten))

//sorting if I put b-a then it will be decendiing
console.log(flatten.sort( (a,b ) => a-b));

//square

console.log(flatten.map(ele => ele ** 2));

const howManyElements = flatten.length
const avg = flatten.reduce((acc,b) => acc + b )/ flatten.length

console.log(avg);

console.log([...new set (flatten)]);

//end
flatten.push(44)
flatten.pop()

//begining
flatten.shift()
flatten.unshift(44)

//splice 
console.log(flatten.splice(0,3));