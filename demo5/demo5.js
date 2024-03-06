console.log("arrayMethods");

let veges = ["potato", "chilli", "carret", "bringle", "onion"];


// returns number of elements in array  
console.log(veges.length);
console.log(veges[0]);


// add elements at last position 
veges.push("reddish");
console.log(veges);

// remove element from last position 
veges.pop();
console.log(veges);

// remove element from first position 
veges.shift();
console.log(veges);


// add element at first position 
veges.unshift("new-vegetable");
console.log(veges);

// The sort() method sorts an array alphabetically
const sortedArray = veges.sort();
console.log("sortedArray", sortedArray);

console.log("revreced array", veges.reverse())


const descendingArray = veges.sort((a, b) => b.localeCompare(a));
console.log("descendingArray", descendingArray);


//add Element  center 
veges.splice(2, 0, "Vegetable", "test");
console.log("veges", veges);


// return a piece of Array
const slicedArray = veges.slice(1, 4);
console.log("slicedArray", slicedArray)



const numericalArray = [20, 10, 40, 30, 50, 60];

const mappedArray = numericalArray.map((item, index) => {
    if (item > 20)
        return (item * 2);
    else return item
});

console.log("mappedArray", mappedArray);

//  return array according condition 
const filteredArray = numericalArray.filter((item, index) => { return (item > 10) });
console.log("filteredArray", filteredArray);


// return element according condition 
const findArray = numericalArray.find((item, index) => { return (item > 10) });
console.log("findArray", findArray);



// if all elements follow the conditions then it returs true 
const everyArray = numericalArray.every((item, index) => { return (item > 10) });
console.log("everyArray", everyArray);

// if any one elements follow the conditions then it returs true 

const someArray = numericalArray.some((item, index) => { return (item < 20) });
console.log("someArray", someArray);



// fill all Element sem value
const filledArray = numericalArray.fill(100);
console.log(filledArray);
