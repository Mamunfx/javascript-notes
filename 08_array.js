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
