/// Array fill manual way :--

const pack_1 = new Array(10);
for (let i = 0; i < pack_1.length; i++) {
    pack_1[i] = false;
}
console.log(pack_1);


// Array fill easy method :--

const pack_2 = new Array(10)
pack_2.fill("euro");
console.log(pack_2);

const names = ["AMAR ","nam ","Mamun"];
names[0] = "My ";
names[1] = "is";
names[2] = "Mamun"
console.log(names);