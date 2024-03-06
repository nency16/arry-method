let arr = JSON.parse(localStorage.getItem("storage")) || []
let displaydata = () => {
    document.getElementById("demo").innerHTML = arr.map((item, index) => {
        return (
            `<tr>
            <td>${item.fname}</td>
            <td>${item.lname}</td>
            <td>${item.phone}</td>
            <td>${item.age}</td>
            <td><button type="btn" onclick="deletebtn(${index})">Delete</button></td>
            <td><button type="btn" onclick="editbtn(${index})">Edit</button></td>
            </tr>`
        )
    }).join("")
}
// delete button
const deletebtn = (index) => {
    arr.splice(index, 1)
    console.log("arr", arr);
    localStorage.setItem("storage", JSON.stringify(arr));
    displaydata();
}
// edite button
isedit = -1;
let editbtn = (idx) => {
    isedit = idx;
    const type = arr.find((item, index) => { return (isedit === index) })
    console.log(type);
    document.getElementById("fname").value = type.fname;
    document.getElementById("lname").value = type.lname;
    document.getElementById("phone").value = type.fname;
    document.getElementById("age").value = type.lname;
}
// search button
const search = () => {
    let searchdata = document.getElementById("search").value;
    let filterr = arr.filter((item) => { return (item.fname.toLocaleLowerCase().includes(searchdata.toLocaleLowerCase())) });
    console.log(filterr);
    arr = filterr;
    displaydata();
}
// sort button
const sortedRows = () => {
    arr.sort((A, B) => A.fname.localeCompare(B.fname));
    console.log("arr", arr);
    displaydata();
}
displaydata();
function myfnction() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    let age = document.getElementById("age").value;
    console.log(fname);
    console.log(lname);
    console.log(phone);
    console.log(age);
    const record = {
        fname: fname,
        lname: lname,
        phone: phone,
        age: age
    }
    if (isedit !== -1) {
        const update = arr.map((item, index) => {
            if (isedit === index) {
                return record
            }
            {
                return item;
            }
        })
        arr = update
        isedit = -1;
    }
    else {
        let duplicate = arr.some((item) => item.fname === fname || item.lname === lname || item.phone === phone || item.age === age);
        console.log("duplicate", duplicate);
        if (duplicate) {
            window.alert("this data is already exist")
        }
        else {
            arr.push(record);
            localStorage.setItem("storage", JSON.stringify(arr));
        }
    }
    console.log("arr", arr);
    displaydata();
    localStorage.setItem("storage", JSON.stringify(arr));
}