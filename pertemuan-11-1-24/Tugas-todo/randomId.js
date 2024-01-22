const randomId = (banyak) => {
    let hasil = ''
    const angka = '1234567890'
    for (let i = 0; i < banyak; i++) {
        hasil += angka.charAt(Math.floor(Math.random() * angka.length))
    } return hasil
}

randomId(5)
module.exports=randomId