const names="Syahban"
console.log(names)

const age=16
const year=2024

const pengurangan=year-age
console.log(pengurangan)

function dataDiri (nama) {
    return `Halo nama saya adalah ${nama}`
}
console.log(dataDiri(names))

console.log("\n")

// nomor 1
const hariKe = require('./relasi.js')
console.log(hariKe(1));

console.log("\n")

// nomor 2
const buatPersegiPanjang = require('./relasi1.js');
buatPersegiPanjang(3, 5)


console.log("\n")

// nomor 3
const kualitasNilai = require('./relasi2.js')
console.log(kualitasNilai(95));

