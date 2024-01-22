function buatPersegiPanjang(p, l) {
    for (let i = 0; i < p; i++) {
        let baris = '';

        for (let j = 0; j < l; j++) {
            baris += ("*");
        }

        console.log(baris);
    }
}
module.exports = buatPersegiPanjang;