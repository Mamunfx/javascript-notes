///  Array literal :--

const arr = ['First', 'second' , 1 ,2 , 3];
arr [1] ;                        // This is how we can access array element !

arr [1] = 'changed that second'; // THis is how we can access and also change value of an array !
arr [4] = 'Changed 4th  aswell';
console.log(arr[1]);
console.log(arr.length);         // This will shows us the length of whole array !
console.log(arr);                // This always print the whole array !


const arr_2 = [] ;               // This is how we can creat literal array without initiazing any data !
arr_2 [0] = 1;
arr_2 [1] = 2;
arr_2 [2] = 3;
arr_2 [99] = 100;                // Js always occupie memory for inbetween empty arrays !
console.log(arr_2);
console.log(arr_2.length);       // lenght = last index + 1  ; last index = lenght - 1 !


const arr_3 =[
    'Europe',
    'North-america',
    'UK',
    'Australia'
]

arr_3[arr_3.length] = 'Newzealand' // This is how we can access and put value to the end of an array !
arr_3[arr_3.length] = 'Ireland'  
arr_3[4 + 1] = 'eromerica'         // We can use other expression in the middle !
console.log(arr_3);

/// Constructor Array :--

const a1 = []; 
console.log(a1 , a1.length);       // Empty array !

const a2 = new Array(5);
console.log(a2 , a2.length);       // This is the main diffirence !
                                   // consturctor pattern always occupie index number for array !
const a3 = new Array(1,2,3,4);
console.log(a3 , a3.length);     



/// Factory Array :--

const b1 = []; 
console.log(b1 , b1.length);

const b2 = Array(5);
console.log(b2 , b2.length);      // Factory pattern is same as constructor just diffirent syntax !

const b3 = Array(1,2,3,4);        
console.log(b3 , b3.length);                   


/// Traverse Array Element :--



const arr_4 = [4,5,9,11,8] ; 
const m = [3];
const n = [1];
const x = 1 ; y = 2;

console.log(m , n , arr_4[x], arr_4[y], arr_4[x+y], arr_4[x-y+1] , arr_4[x+y+1]);

// Simple Traverse :

for(let i=0 ; i < arr_4.length ; i++){
    console.log(arr_4[i]);
}