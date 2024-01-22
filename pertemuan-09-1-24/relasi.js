function hariKe(hari) {
    const namaHari = hari === 1 ? "senin" : hari === 2 ? "selasa" : hari === 3 ? "rabu" : hari === 4 ? "kamis" : hari === 5 ? "jumat" : "hari libur"
    return namaHari;
}
module.exports = hariKe;