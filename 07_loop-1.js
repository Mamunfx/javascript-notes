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
