
//console.log("hi");

//console.time("Time V") //use the same name of the starting time to end it 

//console.log(["One way to display",12, 5, 67])
//console.table("One way to display",12, 5, 67)

//console.timeEnd("Time V") 

//template String 
//console.log(`Your name is ${name} Your age is ${age}`)

//const person{
   // "key":12,
   // "age":200,
   // "name": "Ameena ",
//}

//person.nationality = "Qatari"

//object distructuring 
//const {Key, age, name} = person
//console.log(key,age,name);
//console.log (person.key, person.name, person.age);



for (const num of numbers){
    console.log(num);
}

//number.forEach(num => console.log(num));

function add(a,b){
    return a+b
}

function display (value){
    console.log ("The content is " , value );
}

console.log(2,"+",4,"is" , add (2,4));


//code whisper

marks => marks  >= 60 ? "Pass " : " Fail "

const passOrFail = marks => marks >= 60 ? "Pass " : " Fail "

console.log(`you ${ passOrFail(55)}`);



//to display the following numbers we should use that for each

const numbers = [1,2,3,4,5,6]

numbers.forEach(ele => console.log(ele))
const mappedArray = colsole.map(ele => ele*ele)
console.log(mappedArray)







