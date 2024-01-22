const getNameKelas2 = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const kelas = id === 1 ? funcNameKelas("SIJA", "Sistem Informasi Jaringan & Aplikasi") : id === 2 ? funcNameKelas("RPL", "Rekayasa Perangkat Lunak") : id === 3 ? funcNameKelas("MULMED", "Multimedia") : "Kelas tidak ditemukan!"
            resolve({ id, kelas });
        }, 1000)
    })
}

getNameKelas2(1)
    .then((kelasSija) => {
        console.log(kelasSija)
    })
    .catch((error) => {
        console.error(error)
    })

getNameKelas2(2)
    .then((kelasRpl) => {
        console.log(kelasRpl)
    })
    .catch((error) => {
        console.error(error)
    })

getNameKelas2(3)
    .then((kelasMulmed) => {
        console.log(kelasMulmed)
    })
    .catch((error) => {
        console.error(error)
    })