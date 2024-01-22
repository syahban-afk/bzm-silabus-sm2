const { question, deleteById } = require("./system")

const deleteTodo = async () => {
  const id = await question("Masukkan todo id: ")
  deleteById(id);
}

deleteTodo();