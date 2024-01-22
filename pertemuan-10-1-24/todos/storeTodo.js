const { storeTodo, todoQuestion } = require('./todos')

const addTodo = async () => {

    const title = await todoQuestion("Masukkan judul todo :")
    const description = await todoQuestion("Masukkan deskripsi todo :")
    const status = await todoQuestion("Masukkan status todo :")

    storeTodo(title, description, status)

}

addTodo()