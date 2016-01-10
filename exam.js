// Code goes here

function fnGetPage() {
    document.getElementById('page').style.display = "block";


}

function fnClose() {
    document.getElementById('page').style.display = "none";
}

function fnGetData() {
    var n = document.getElementById("cname").value;
    var t = document.getElementById("ctype").value;
    var e = document.getElementById("edit").value;
    var table = document.getElementById("table1");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cb = document.createElement('input');
    cb.setAttribute("type", "checkbox");
    cell1.appendChild(cb);

    cell2.innerHTML = n;

    cell3.innerHTML = t;
    cell4.innerHTML = e;

   
}

function fnDeleteData() {

    var table = document.getElementById("table1");
    var rowCount = table.rows.length;
    for (var i = 0; i < rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if (null != chkbox && true == chkbox.checked) {
            if (rowCount <= 1) {
                alert("Cannot delete all the rows.");
                break;
            }
            table.deleteRow(i);
            rowCount--;
            i--;
        }
    }
}


