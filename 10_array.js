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


// One dimensional Traverse :--

const point_table = [
    [0,0],
    [2,4],
    [4,7],
    [9,5],
] ;

for (let i = 0; i < point_table.length; i++) {
    console.log(`Point ${i} - x=${point_table[i][0]} and y=${point_table[i][1]}`);
}


// Two dimensional Traverse :--

const names = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
];

for (let j = 0; j < names[0].length; j++) {
    console.log(names[0][j]);
   } ;                                       // In this loop names which is an array will run its 0 index value and will loop j will
                                            // run every value of array 0 !


for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < names[i].length; j++) {
        console.log(names[i][j]);
       }
};                                         // Its the same as previous just we have automated index of names array !


for (let i = 0; i < point_table.length; i++) {
    for (let j = 0; j < point_table[i].length; j++) {
        console.log(`Point [${i}, ${j}] = ${point_table[i][j]}`);
       }
};

/ Matrix example :--

const matrix_1 = [
    [1,2],
    [2,3],
    [3,4]
];

const matrix_2 = [
    [5,6],
    [7,8],
    [9,10]
];                                                             // We can calculate matrix math in array aswell !

const matrixSum = (matrix_1 , matrix_2) => {                   // Here we are making a function !
    const result = []                                          // We made another array to store the result !
    for (let i = 0; i < matrix_1.length; i++) {                // Now we are using two dimensional array method !
        const row = []                                         // Here we made again another array to store value of row !
        for (let j = 0; j < matrix_1[i].length; j++) {
            row.push(matrix_1[i][j] + matrix_2[i][j])          // It is a code which is used to push result in another array !
        }
        result.push(row)
    }
    return result
}
