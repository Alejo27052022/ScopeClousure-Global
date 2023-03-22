//Variables

var a; // declarando variables
var b = 'b'; // declarando y asignando
b = 'bb'; // Reasignando
var a = 'aa'; //ReDeclaracion


// Global Scope
var fruit = 'Apple'; //global

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia';
    console.log(country);
}

countries();
console.log(country);
