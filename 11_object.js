// Object :--

// Way of object define :--

const person1 = {}
person1.Names = "Md. Moonzoor Mamun Munna " ;
person1.Age = 23 ;
person1.Email = "md01993049420@gmail.com " ;


const person2 ={
    Names : "Shamima Akhter Srabonti " ,
    Age : 23 ,
    Email : "ShamimaAkhter@gmail.com"
} 

console.log(person1 , person2);


// Add and remove in Object :--

person2.id = '1234';
person2.mobile = '01736420613';

delete person2.Email ;

console.log(person2);                     // Added and remove a key aswell !


console.log(person1.Email);               // This is dot notation to access individual object key !
console.log(person2['id']);               // This is array notaion to acces object key  !

const key = 'Names' ;
console.log(person1[key]);                // Dynamic way !


// Array of Object :--

const p1 = {
    Names : 'jka' ,
    Age : 12 ,
    id : '123',
} ;

const p2 = {
    Names : 'ert' ,
    Age : 12 ,
    id : '145',
} ; 

const p3 = {
    Names : 'ngg' ,
    Age : 12 ,
    id : '654',
} ;

const person = [p1 , p2 , p3] ;        // This is a way of array object !
console.log(person);          


console.log(person[0]);               // This is another way using individual array index !
console.log(person[1].Names);         // This is with array index with individual object value !


const p = [                           // This is another way of array object !
    {
        Names : 'jka' ,
        Age : 12 ,
        id : '123',
    } ,
    
    {
        Names : 'ert' ,
        Age : 12 ,
        id : '145',
    } ,
    
    {
        Names : 'ngg' ,
        Age : 12 ,
        id : '654',
    } ,
] ;

console.log(p[0]);
console.log(p[1].Names);

for (const v of  p ) {
    console.log(`${v.Names} ${v.id}`);
} ;