const funcNameKelas = (kode, namaKelas) => {
    return { kode, namaKelas }
}

const getNameKelas = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const kelas = id === 1 ? funcNameKelas("SIJA", "Sistem Informasi Jaringan & Aplikasi") : id === 2 ? funcNameKelas("RPL", "Rekayasa Perangkat Lunak") : "Kelas tidak ditemukan!"
            resolve({ id, kelas });
        }, 1000)
    })
}

getNameKelas(1)
    .then((kelasSija) => {
        console.log(kelasSija)
    })
    .catch((error) => {
        console.error(error)
    })

getNameKelas(2)
    .then((kelasRpl) => {
        console.log(kelasRpl)
    })
    .catch((error) => {
        console.error(error)
    })
