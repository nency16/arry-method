let records = JSON.parse(localStorage.getItem("locall")) || [];

const displaytable = () => {
    document.getElementById("nancy1").innerHTML = records.map((item) => {
        return (
            `<tr>
            <td>${item.fname}</td>
            <td>${item.lname}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
            <td>${item.password}</td>
        </tr>`
        )
    }).join("")
}
displaytable();
function myfunction() {
    let n_name = document.getElementById("fname").value;
    let l_name = document.getElementById("lname").value;
    let e_mail = document.getElementById("email").value;
    let t_tel = document.getElementById("phone").value;
let P_password=document.getElementById("password").value;

    console.log(n_name);
    console.log(l_name);
    console.log(e_mail);
    console.log(t_tel);
    console.log(P_password);

    const type = {
        fname: n_name,
        lname: l_name,
        email: e_mail,
        phone: t_tel,
        password:P_password,
    }

    records.push(type);
    console.log(records);
    displaytable();
    localStorage.setItem("locall", JSON.stringify(records))
}



