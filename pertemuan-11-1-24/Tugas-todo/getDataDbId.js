const { getById,question } = require('./system')

const todoId =async ()=>{
    const id=await question("Masukkan ID todo:")
    getById(id)
}

todoId()