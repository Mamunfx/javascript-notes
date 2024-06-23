/// FUnction :--

let arr1 = [12, 40, 30, 99, 13];
let arr2 = [17, 94, 83, 67, 25];


// let max = arr1[0];

// for (let i of arr1) {
//   if (i > max) {
//     max = i;
//   }
// }
// console.log(max);

// let max2 = arr2[0];

// for (let i of arr2) {
//   if (i > max2) {
//     max2 = i;
//   }
// }
// console.log(max2);               // Instead repeating the same loop again again we can make a function .

function max(a) {
    let max = a[0];
  
    for (let i of a) {
      if (i > max) {
        max = i;
      }
    }
    return max;
  } ;
  
  let maxx1 = max(arr1);
  let maxx2 = max(arr2);
  console.log(maxx1 , maxx2);        // We can now use this function as many time as we want !
  
  /// Define function :--

function names() {
    console.log('Hello world ! ');
} ;                                 /* This is a common way of declaring a function !
                                     'names' will be the function name and paramiter will be used to throw 
                                     other data to this function , it can be left as like this () if we dont 
                                     need to work with any external data ! */

names();                            // This is how we call a function .

// Define with paramiter :--

function sum(a,b) {
  let c = a + b ;
  console.log(c);
};

sum(12,14);
sum(22,10);
sum(9,11);

