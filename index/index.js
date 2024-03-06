console.log("array methods");
const numbers = [12, 10, 5, 3, 30];

// return element according the condition / e pelo element condition acording je  mlse e btavse
const finded = numbers.find((item) => {
    return (item > 5)
});
console.log(finded);

// return array of elemnts according the condition? bdhay 5 thi mota element btavse
const filterd = numbers.filter((item) => { return (item > 5) });
console.log(filterd);

// 5 thi mota badhay elemet hyse n to j true btavse nker false  / true false  return kre
const everied = numbers.every((item) => { return (item > 5) });
console.log(everied);

// some method jo 5 thi motot ek pn element hyse n to true aavse ema samll element hyse toi true j btavse
const somed = numbers.some((item) => { return (item > 5) });
console.log(somed);

// join string vche kaik mukvu hoi to use thay
const joined = numbers.join("");
console.log(joined);

// // filled method badhay Element ek sathe change kre aapde bdhay element ma ek srkhu mukvu hoi to eno use thay
// const filled = numbers.fill(0);
// console.log(filled);
// e badhay element ne  personaly conditon  perform krave
numbers.forEach((item) => {
    return (console.log(item * 2))
})

// findindex 5 thi moto je  pelo Element hyse n eni  index btavse
let last = numbers.findIndex((item) => { return (item > 5) });
console.log(last);

// findLastIndex e 5 thi moto je last elemnt hyse n eni index btavse
let lastindex = numbers.findLastIndex((item) => { return (item > 5) });
console.log(lastindex);

// first parameter = indexe
// second parameter = number of elements want to delete
// third parameter =. element want to add
numbers.splice(2, 0, 120);
console.log(numbers);

// pelo perametre elment ni index btave n bjo perametere index thi ketli index btavi e
const sliced = numbers.slice(2, 4);
console.log(sliced);

//  dipendency  