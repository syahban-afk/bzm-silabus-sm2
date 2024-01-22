function kualitasNilai(nilai) {
    const kualitas = nilai >= 100 ? "terbaik" : nilai >= 90 ? "cukup baik" : nilai >= 80 ? "baik" : nilai >= 60 ? "harus semangat" : "remedial"
    return kualitas;
}
module.exports = kualitasNilai;
