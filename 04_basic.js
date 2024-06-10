// Various types of Logical OPERATOR :--

let k = 30 ;
let p = 90;

let operation_AND = (k>20) && (p<150);      // True && True = Result will be True !                      
console.log(operation_AND);                                  
                                                             

let operation_OR = (k<20) || (p<150);       // False || True = Result will be True !
console.log(operation_OR);

let operation_NOT = !operation_AND;         // This will always reverse the result of other operations !
console.log(operation_NOT);
