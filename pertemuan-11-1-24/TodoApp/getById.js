const { dataById,questionTodo } = require('./system')

const getTodoById=async()=>{
    const todoId= await questionTodo("Masukkan ID data :")
    dataById(todoId)
}

getTodoById()