// Conditional statement :

// If-else statement : We use it when we need to compare and make a decision between some statement .

let a = 20;
let b = 12;

if (a>b) {
    console.log("a is greater than b !");
} else {
    console.log("b is greater than a !");
}

// Ternary If else expression :  Its the shortcut of previous statement .

let c = (a > b) ? "a is greater than b !"  : "b is greater than a !"
console.log(c);



// Else-if statement : Semilar than if else statement but we use else-if statement when we have more than one condition to deal.

let x = 15;
let y = 15;
if (x>y) {
    console.log("x is greater than y");
} else if (x==y){
    console.log("x is equal to y !");
}
else{
    console.log("y is greater than x !");
}