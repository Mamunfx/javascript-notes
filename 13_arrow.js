// Other way to define function :-- 

// Arrow function :--

let c = () => {
    console.log('Hello world ! ');
} ; 
c(); 

// Fat Arrow function :--

let d = (a,b) => {
    console.log(a+b);
    return a+b ;
};

d(12,8);


let e = (a,b) => a+b ;          // If our function cosist just one line we use this shortcut way !
console.log(e(20,6));