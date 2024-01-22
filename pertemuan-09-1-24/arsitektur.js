const getKelas = (id) => {
    const kelas = id === 1 ? "SIJA" : id === 2 ? "RPL" : "MULMED"
    return { id, kelas };
}

console.log(getKelas(1));

// cara 2 dengan menambahkan kepanjangan dari kode kelas

const funcnameKelas = (kode, namaKelas, kelas) => {
    return { kode, namaKelas, kelas }
}

const getnameKelas = (id) => {
    const getName = id === 1 ? funcnameKelas("SIJA", "Sistem Informasi Jaringan & Aplikasi", 11) : funcnameKelas("RPL", "Rekayasa Perangkat Lunak", 12)
    return { id, getName }
}

console.log(getnameKelas(1))

// membuat 5 data objek untuk item game

const itemsGame = (Name, kode, Price, cooldown, damage) => {
    return { Name, kode, Price, cooldown, damage };
}

const getItemsGame = (ID) => {
    const pay = ID === 1 ? itemsGame("Blood of despair", "BOD", 3000, 0, "+150") : itemsGame("Hunter strike", "celurit ungu", 2000, "15 s", "+65")
    return { ID, pay }
}

console.log(getItemsGame(1))
