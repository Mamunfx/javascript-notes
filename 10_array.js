// Array of everything :-- 

const arr = [ 10 , 'ten' , true , genten , {ten : 10} , [10,10]];   // we can store every data type in array !
console.log(arr);

function genten() {
    
} ;


// Array of object :--

const stdn_info = [
    {name : 'Mamun', age : '23'},         // When we need to store something which has more than one value in 
    {name : 'Mamun', age : '23'},         //  itself then we use this method of array which store value as object inside array !
    {name : 'Mamun', age : '23'},
    {name : 'Mamun', age : '23'},
] ;



// Array of function :--

const sum = (a,b) => a + b;
const sub = (a,b) => a - b;
const times = (a,b) => a * b;
const div = (a,b) => a / b;
const mod = (a,b) => a % b;

const a = 10 ,
      b = 20 ;

const funcs = [sum, sub, times, div, mod] ;   // We can store various function inside an array and can run those !

for (let i = 0; i < funcs.length; i++) {
    const result = funcs[i](a,b)               // In this line we are calling array funcs[i] and giving reference of a and b to 
                                               // work with !
    console.log(`${funcs[i].name} Result = ${result}`);  // this is the easy way to output things !
}



// Array of Arrays - Multi dimensional Array :--