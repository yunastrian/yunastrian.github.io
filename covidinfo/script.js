window.onload = function(e){ 
    var provinsi = ["Aceh", "Bali", "Banten", "Bangka Belitung", "Bengkulu", "DI Yogyakarta", "DKI Jakarta", "Jambi", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Kalimantan Barat", "Kalimantan Timur", "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Utara", "Kepulauan Riau", "Nusa Tengara Barat", "Sumatera Selatan", "Sumatera Barat", "Sulawesi Utara", "Sumatera Utara", "Sulawesi Tenggara", "Sulawesi Selatan", "Sulawesi Tengah", "Lampung", "Riau", "Maluku Utara", "Maluku", "Papua Barat", "Papua", "Sulawesi Barat", "Nusa Tenggara Timur", "Gorontalo", "Dalam Proses Verifikasi"];
    var kasus = [536, 3682, 2013, 200, 240,838,24601,205,7147,10383,24493,397,1799,1911,6535,291,517,2239,3623,1079,2840,4693,978,10257,216,303,656,1613,1292,536,3215,267,152,1469,10];
    var sembuh = [91,3208,1473,185,148,525,15201,117,4315,6503,17221,374,1136,1337,3851,265,322,1405,2099,797,1487,1912,678,7084,195,221,369,854,786,350,1743,158,130,1017,0];
    var meninggal = [18,49,95,2,20,21,913,4,221,709,1834,4,46,96,301,2,19,122,183,34,138,221,16,334,7,13,13,49,25,6,34,5,1,38,0];

    var jumlahKasus = 0;
    var jumlahSembuh = 0;
    var jumlahMeninggal = 0;
    var data = "";
    
    for (let i=0; i<provinsi.length; i++) {
        jumlahKasus += kasus[i];
        jumlahSembuh += sembuh[i];
        jumlahMeninggal += meninggal[i];
        data += `<tr>
                <td>`+(i+1)+`</td>
                <td class="provinsi">`+provinsi[i]+`</td>
                <td>`+kasus[i]+`</td>
                <td class="sembuh">`+sembuh[i]+`</td>
                <td class="meninggal">`+meninggal[i]+`</td>
                </tr>`;
    }

    data += `<tr>
            <th colspan="2">Jumlah</th>
            <th>`+jumlahKasus+`</th>
            <th class="sembuh">`+jumlahSembuh+`</th>
            <th class="meninggal">`+jumlahMeninggal+`</th>
            </tr>`;
    document.getElementById("infografis").innerHTML += data;
}

function onchangeSembuh(checkbox) {
    var x = document.getElementsByClassName("sembuh");

    for (let i=0; i<x.length; i++) {
        if(checkbox.checked == true) {
            x[i].style.display = "block";
        } else {
            x[i].style.display = "none";
        }
    }
}

function onchangeMeninggal(checkbox) {
    var x = document.getElementsByClassName("meninggal");

    for (let i=0; i<x.length; i++) {
        if(checkbox.checked == true) {
            x[i].style.display = "block";
        } else {
            x[i].style.display = "none";
        }
    }
}