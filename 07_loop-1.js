// Basic of LOOPs :--

for (i = 0; i <= 6; i++) {

    console.log(i);
}

let sum = 0;

for (i = 0; i < 4; i++) {
    console.log("Sum =" + sum + " i = " + i + " Sum + i = " + (sum + i));  // ITS iportant to print before summation!!
    sum = sum + i;

}
console.log("Final Sum = " + sum);  // If we print outside the for loop it will return last result !! 



/// While LOOP :--

let Result = 0;
let t = 0;
while (t < 4) {
    console.log("Result = " + Result + " t = " + t + " Result + t = " + (Result + t));
    Result = Result + t;
    t++;
}
console.log("Final Result = " + Result);


/* 
Use a for loop to iterate over an array.
Use a for loop when you know the loop should execute n times.
Use a while loop for reading a file into a variable.
Use a while loop when asking for user input.
Use a while loop when the increment value is nonstandard.
*/


/// Do-Wile loop :--

let ewu = 69 ;
while (ewu < 20 ) {
    console.log("This loop will never run because the condition didnt matched !"); 
}                       


do {
    console.log("And this will first run the loop for once and then it will look at the condition !");
} while (ewu < 20 );    // and this is the use of do-while loop .



/// For-In loop :--

let exmpl_string = " BANGLA "

for (let Q in exmpl_string) {
    console.log(Q);
}     // This loop is mainly used in iterable things like array string  . and for-in loop can return index number as shown !


for (let Q in exmpl_string) {
    console.log(exmpl_string[Q]);
}     // And in this way for-in loop can also give us string value directly without giving index number !


/// For-of loop :--

for (let v of exmpl_string) {
    console.log(v);
}    // This is the easier way to directly iterate in a string or array to print value not index numer !