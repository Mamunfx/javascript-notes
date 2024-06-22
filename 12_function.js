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
  
  