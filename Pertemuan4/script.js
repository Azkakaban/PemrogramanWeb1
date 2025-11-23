//Log = logging -> mencatat aktivitas latar belakang
console.log("Hello World");

console.log("Mengambil data...");

console.log("Mengecek data...");

console.log("Data berhasil diambil");

// window.alert("Ini Alert Tolong Baca!!");

let nama = "Jawa Jawa Jawa";
let usia = 350;

const phi = 3.14;

console.log(`Saya adalah ${nama}, usia saya ${usia}, lalu phi itu nilainya ${phi}`);

let a = 5;
let b = "5";

if (a == b){
    console.log(`a == b`); 
    } else {
        console.log(`a != b`);
    }

for (let i = 0; i < 5; i++){
    console.log(i + 1);
}

console.log("while");
let i = 6;
while(i <= 10){
    console.log(i);
    i++;
}

let suku = ["Sunda", "Madura", "Papua", "Batak", "Nias", " Karo", 1, 2, 3, 3.14, 3.9, 9.8];

console.log(suku[3]);

for (let elemen of suku){
    console.log(elemen);
}

function tambah(a,b){
    return a + b;
}

console.log(tambah(2,5));

const kurang = (a,b) => {
    return a - b;
}

console.log(kurang(2,5));