console.log("arry method")
const numbers = [23, 45, 67, 78, 89, 30]

const finded = numbers.find((item) => {
    return (item > 45)
});
console.log(finded);


const filter = numbers.filter((item) => {
    return (item > 45)
});
console.log(filter);

const everied = numbers.every((item) => { return (item > 45) })
console.log(everied);

const some = numbers.some((item) => { return (item > 45) })
console.log(some);

const join = numbers.join(".")
console.log(join)

numbers.forEach((item) => {
    return (console.log(item * 8))
})

const find = numbers.findIndex((item) => { return (item > 45) })
console.log(find);

const lastindex = numbers.findLastIndex((item) => { return (item > 45) })
console.log(lastindex)

const slice = numbers.slice(2, 4);
console.log(slice)


numbers.splice(3, 0, 120);
console.log(numbers);

const num = [78, 89, 96, 56, 23];

const findd = num.find((item) => {
    return (item > 56)
})
console.log(findd)

const filterd = num.filter((item) => { return (item > 45) })
console.log(filterd)

const everiedd = num.every((item) => { return (item > 45) })
console.log(everiedd);

const somee = num.some((item) => { return (item > 45) })
console.log(somee);


const joined = num.join("_")
console.log(joined)

num.forEach((item) => { return (console.log(item - 1)) })

const finddd=numbers.findIndex((item)=>{return(item>45)})
console.log(finddd)