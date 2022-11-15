var barang = [
];
var harga = [
];

function tampil() {
    var tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>Nama Barang</th><th>Harga</th><th>Action</th></tr>";
    for (let i = 0; i < barang.length; i++) {
        var btnEdit = "<button class='btn-edit' href='#' onclick='edit("+i+")'>Edit</button>";
        var btnHapus = "<button class='btn-hapus' href='#' onclick='hapus("+i+")'>Hapus</button>";
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + barang[i] + "</td><td>" + harga[i] + "</td><td>" + btnEdit + " " + btnHapus + "</tr>";
    }
}
function tambah() {
    var input = document.querySelector("input[name=Nama_barang]");
    var input1 = document.querySelector("input[name=Harga]");
    barang.push(input.value);
    harga.push(input1.value);
    tampil();
    input.value = "";
}
function edit(id) {
    var baru = prompt("Edit Nama Barang", barang[id]);
    var baru1 = prompt("Edit Harga", harga[id]);
    barang[id] = baru;
    harga[id] = baru1;
    tampil();
}
function hapus(id) {
    barang.pop(id, 1);
    tampil();
}
function printArea(tabel){
    var printPage = document.getElementById(tabel).innerHTML;
    var oriPage = document.body.innerHTML;
    document.body.innerHTML = printPage;
    window.print();
    document.body.innerHTML = oriPage;
}

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}

function exportTableToCSV(tabel) {
    var csv = [];
	var rows = document.querySelectorAll("table tr");
	
    for (var i = 0; i < rows.length; i++) {
		var row = [], cols = rows[i].querySelectorAll("td, th");
		
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
		csv.push(row.join(","));		
	}

    // Download CSV file
    downloadCSV(csv.join("\n"), tabel);
}

// var buttonElement = document.querySelector("#btn-generate");
// 	buttonElement.addEventListener('click', function() {
// 		var pdfContent = document.getElementById("fld1").innerHTML;
// 		var windowObject = window.open();

// 		windowObject.document.write(pdfContent);

//         windowObject.print();
// 		windowObject.close();
// 	});