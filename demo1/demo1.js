let veges = ["potato", "Tomato", "Chilli", "Pease", "Cabbage"];
console.log(veges);
// add at last
veges.push("Red-chilli");
console.log(veges);

// add at first
veges.unshift("Bringle");
console.log(veges);


// remove from last
veges.pop();
console.log(veges);

// remove from first
veges.shift();
console.log(veges);

// check if elemen is included or 

let isveges = veges.includes("Tomato");
console.log(isveges);
let text = "dfdf";

// check if given parameter is an array or not
let isarry = Array.isArray(veges);
console.log(isarry);

// reverse the ordr of an array
let reverse = veges.reverse();
console.log(reverse);


let flower = ["rose", "mogra", "duch", "sevanti", "sunflower"]
console.log(flower);

flower.push("jipso")
console.log(flower);

flower.unshift("chnmpa")
console.log(flower);

flower.pop();
console.log(flower);

flower.shift();
console.log(flower)

let txt1 = flower.includes("duch")
console.log(txt1)

let abc = Array.isArray(flower);
console.log(abc);




// push:last elment add kre
// pop:last elment remove kare

// unshift:first element add kre
// shift:first element remove kare