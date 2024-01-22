const { questionTodo, deleteData } = require('./system')

const deleteDataById = async () => {
    const id = await questionTodo("Masukkan ID data yang ingin dihapus:");
    deleteData(id);
}

deleteDataById();