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
