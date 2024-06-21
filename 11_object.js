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
