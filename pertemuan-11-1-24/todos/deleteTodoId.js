const { todoQuestion, deleteById } = require("./todos")

const deleteTodo = async () => {
  const id = await todoQuestion("Masukkan todo id: ")
  deleteById(id);
}

module.exports=deleteTodo