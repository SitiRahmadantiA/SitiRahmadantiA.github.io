// var nama_barang = [
// ];

// var harga_satuan = [
// ];

// var jumlah = [
// ];

// var total = [
// ];

// function tampil() {
//   var tabel = document.getElementById("tabel");
//   tabel.innerHTML =
//     "<tr><th>No</th><th>Nama</th><th>Harga Satuan</th><th>Jumlah</th><th>Total</th><th id='head'>Action</th></tr>";
//   for (let i = 0; i < nama_barang.length; i++) {
//     var total_reverse = total[i].toString().split('').reverse().join(''),
//       total_ribuan = total_reverse.match(/\d{1,3}/g);
//       total_ribuan = total_ribuan.join('.').split('').reverse().join('');

//     var btnEdit =
//       "<button class='btn btn-sm light btn-warning' data-toggle='modal' data-target='#editBarangModal'  href='#' onclick='edit(" +
//       i + ")'>Edit</button>";
//     var btnHapus = "<button class='btn btn-sm light btn-danger' href='#' onclick='deleteAlert(" + i +
//       ")'>Hapus</button>";
//     j = i + 1;
//     tabel.innerHTML += "<tr><td>" + j + "</td><td>" + nama_barang[i] + "</td><td>" + harga_satuan[i] + "</td><td>" + jumlah[i] + "</td><td>Rp. " + total_ribuan + "</td><td id='bodyAction'>" + btnEdit + " " + btnHapus + "</tr>";
//   }
// }

// function tambah() {
//   $("#namaBarang").val('');
//   $("#hargaBarang").val('');
//   $("#jumlahBarang").val('');
// }

// function simpan_tambah() {
//   var nama = $("#namaBarang").val();
//   var harga_barang = $("#hargaBarang").val();
//   var jumlah_barang = $("#jumlahBarang").val();
//   if (nama != "" && harga_barang != "" && jumlah_barang != "") {
//     $("#addBarangModal .close").click()
//     var total_harga = harga_barang * jumlah_barang;
//     var total_harga_reverse = total_harga.toString().split('').reverse().join(''),
//       total_harga_ribuan = total_harga_reverse.match(/\d{1,3}/g);
//       total_harga_ribuan = total_harga_ribuan.join('.').split('').reverse().join('');

//     nama_barang.push(nama);
//     harga_satuan.push(harga_barang);
//     jumlah.push(jumlah_barang);
//     total.push(total_harga_ribuan);

//     Swal.fire({
//         icon: 'success',
//         title: 'Data Barang telah berhasil ditambahkan.',
//     });

//     tampil();
//   }
// }

// function edit(id) {
//   $("#rental_id").val(id);
//   $("#editnamaBarang").val(nama_barang[id]);
//   $("#editHargaBarang").val(harga_satuan[id]);
//   $("#editJumlahBarang").val(jumlah[id]);
// }

// function simpan_edit() {
//   var nama = $("#editnamaBarang").val();
//   var harga_barang = $("#editHargaBarang").val();
//   var jumlah_barang = $("#editJumlahBarang").val();
//   if (nama != "" && harga_barang != "" && jumlah_barang != "") {
//     $("#editBarangModal .close").click()
//     var total_harga = harga_barang * jumlah_barang;
//     var total_harga_reverse = total_harga.toString().split('').reverse().join(''),
//       total_harga_ribuan = total_harga_reverse.match(/\d{1,3}/g);
//       total_harga_ribuan = total_harga_ribuan.join('.').split('').reverse().join('');



//     nama_barang[$("#rental_id").val()] = nama;
//     harga_satuan[$("#rental_id").val()] = harga_barang;
//     jumlah[$("#rental_id").val()] = jumlah_barang;
//     total[$("#rental_id").val()] = total_harga_ribuan;

//     Swal.fire({
//         icon: 'success',
//         title: 'Data Barang telah berhasil diubah.',
//     });

//     tampil();
//   }
// }

// function hapus(id) {
//   nama_barang.splice(id, 1);
//   harga_satuan.splice(id, 1);
//   jumlah.splice(id, 1);
//   total.splice(id, 1);
//   tampil();
// }

// tampil();

var barang = [
];
var harga = [
];
var jumlah = [    
];
var total = [

];

function tampil() {
    var tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>Nama Barang</th><th>Harga</th><th>Jumlah</th><th>Action</th></tr>";
    for (let i = 0; i < barang.length; i++) {
        var btnEdit = "<button class='btn-edit' href='#' onclick='edit("+i+")'>Edit</button>";
        var btnHapus = "<button class='btn-hapus' href='#' onclick='hapus("+i+")'>Hapus</button>";
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + barang[i] + "</td><td>" + harga[i] + "</td><td>" + jumlah[i] + "</td><td>" + btnEdit + " " + btnHapus + "</td></tr>";
    }
}


function tambah() {
    var input = document.querySelector("input[name=Nama_barang]");
    var input1 = document.querySelector("input[name=Harga]");
    var input2 = document.querySelector("input[name=jumlah]");
    barang.push(input.value);
    harga.push(input1.value);
    jumlah.push(input2.value);
    tampil();
    input.value = "";
}
function edit(id) {
    var baru = prompt("Edit Nama Barang", barang[id]);
    var baru1 = prompt("Edit Harga", harga[id]);
    var baru2 = prompt("Edit Jumlah", jumlah[id]);
    barang[id] = baru;
    harga[id] = baru1;
    jumlah[id] = baru2;
    tampil();
}

function hapus(id) {
    barang.pop(id, 1);
    tampil();
}

document.getElementById("tombol_form").
     addEventListener("click", tampilkan_nilai_form);         
    function tampilkan_nilai_form(){ 
        var coba=document.getElementById("harga").value;
        var coba1=document.getElementById("jumlah").value;
        var coba3=coba1*coba;
document.getElementById("coba3").innerHTML=coba3;
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

var buttonElement = document.querySelector("#btn-generate");
	buttonElement.addEventListener('click', function() {
		var pdfContent = document.getElementById("fld1").innerHTML;
		var windowObject = window.open();

		windowObject.document.write(pdfContent);

        windowObject.print();
		windowObject.close();
	});

tampil();