const {newData,question}=require('./system')

const addTodo = async () => {

    const NamaDepan = await question("Masukkan nama depan anda :")
    const NamaBelakang = await question("Masukkan nama belakang anda :")
    const Jabatan = await question("Masukkan jabatan anda :")
    const Gaji = await question("Masukkan gaji anda :")
    const TanggalMasuk = await question("Masukkan tanggal masuk anda :")
    const Alamat = await question("Masukkan alamat anda :")

    newData(NamaDepan, NamaBelakang, Jabatan, Gaji, TanggalMasuk, Alamat)

}

addTodo()