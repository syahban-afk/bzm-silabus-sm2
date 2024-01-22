const { todo } = require('node:test')
const { getById,todoQuestion } = require('./todos')

const getTodoId = async () => {
    const todoId = await todoQuestion("Masukkan ID todo: ");
    getById(todoId);
  }
  
  getTodoId();