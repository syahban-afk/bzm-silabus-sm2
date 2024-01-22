const { todo } = require('node:test')
const { getById,todoQuestion } = require('./todos')

const todoId =async ()=>{
    const id=await todoQuestion("Masukkan ID todo:")
    getById(id)
}

todoId()