// deta apcho batave mate JSON.parse aave screen uper
let records = JSON.parse(localStorage.getItem("localdata")) || [];
const displaytable = () => {
    document.getElementById("demo").innerHTML = records.map((item) => {
        return (
            // daynamic nae static deta sateh lakhvo hoy to bcktick`` ama lakhvo
            `<tr>
        <td>${item.fname}</td>
        <td>${item.lname}</td>
        </tr>`
        )
        // deta vache space no ave aetle
    }).join("")
}
// aa function aaya lakhvathi refresh  kri aetle juno deta sidho aavi jay
displaytable();
function myfunction() {
    let first_nmae = document.getElementById("name").value;
    let lname = document.getElementById("lname").value;
    console.log(name);
    console.log(lname);

    const result = {
        fname: first_nmae,
        lname: lname
    }
    records.push(result);
    // aana thi data local storage ma re appliction ma loacalstorge ma file etle batavse
    localStorage.setItem("localdata", JSON.stringify(records))
    displaytable();
    console.log(records);
}


