const { storeTodo, todoQuestion } = require('./todos')

const addTodo = async () => {

    const NamaDepan = await todoQuestion("Masukkan  nama depan anda :")
    const NamaBelakang = await todoQuestion("Masukkan nama belakang anda :")
    const Jabatan = await todoQuestion("Masukkan jabatan anda :")
    const Gaji = await todoQuestion("Masukkan gaji anda :")
    const TanggalMasuk = await todoQuestion("Masukkan tanggal masuk anda :")
    const Alamat = await todoQuestion("Masukkan alamat anda :")

    storeTodo(NamaDepan, NamaBelakang, Jabatan, Gaji, TanggalMasuk, Alamat)

}

addTodo()