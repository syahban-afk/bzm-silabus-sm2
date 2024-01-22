const {questionTodo,newData}=require('./system')

const addNewData=async()=>{
    const namaDepan=await questionTodo("Masukkan nama depan :")
    const namaBelakang=await questionTodo("Masukkan nama belakang :")
    const umur=await questionTodo("Masukkan umur :")
    const jabatan=await questionTodo("Masukkan jabatan :")
    const gaji=await questionTodo("Masukkan gaji :")
    const alamat=await questionTodo("Masukkan alamat :")

    newData(namaDepan, namaBelakang, umur, jabatan, gaji, alamat)
}

addNewData()