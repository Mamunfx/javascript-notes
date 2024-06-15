// Find largest , smallest , second largest and second smallest number from an array :--

let arr_4 = [20,90,30,2,87,100]

let largestNumber = arr_4[0] ;
for(i=1; i < arr_4.length ; i++){
    if (arr_4[i] > largestNumber) {
        largestNumber = arr_4[i];
    }
}
console.log("Largest number is = "+largestNumber);


let smallestNumber = arr_4[0] ;
for(i=1; i < arr_4.length ; i++){
    if (arr_4[i] < smallestNumber) {
        smallestNumber = arr_4[i];
    }
}
console.log("Smallest number is = "+smallestNumber);


let largest = arr_4[0] ;
for(i=1; i < arr_4.length ; i++){
    if (arr_4[i] > largest) {
        secondLargest = largest;
        largest = arr_4[i]
    }
}
console.log("Second largest number is = " +secondLargest);


let smallest = arr_4[0] ;
for(i=1; i < arr_4.length ; i++){
    if (arr_4[i] < smallest) {
        secondSMallest = smallest;
        smallest = arr_4[i]
    }
}
console.log("Second smallest number is = " +secondSMallest);
