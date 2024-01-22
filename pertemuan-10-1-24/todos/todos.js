const generateRandomId = require('./generateRandomId')
const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const directory = './db'
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory)
}

const checkFile = './db/todos.json'
if (!fs.existsSync(checkFile)) {
    fs.writeFileSync(checkFile, '[]', 'utf-8')
}

const todoQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
}

const todos = () => {
    const fileTodos = fs.readFileSync(checkFile)
    const data = JSON.parse(fileTodos)
    console.log(data)
}

const storeTodo = (title, description, status) => {
    const id = generateRandomId(10)
    const todo = { id, title, description, status }
    const file = fs.readFileSync(checkFile, 'utf-8')

    const dataTodo = JSON.parse(file)
    dataTodo.push(todo)
    fs.writeFileSync(checkFile, JSON.stringify(dataTodo))
    console.log('thankyou for submit todos')

    rl.close()
}

const getById = (id) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const data = JSON.parse(file);
    const findTodoId = data.find(todo => todo.id === id);

    if (findTodoId) {
        console.log(findTodoId);
    } else {
        console.log(`Todo dengan ID ini ${findTodoId} tidak di temukan!`);
    }

    rl.close();
}

const updateById = (id, updateId) => {

    const file = fs.readFileSync('./db/todos.json', 'utf-8');
    let dataTodos = JSON.parse(file);

    const index = dataTodos.findIndex(todo => todo.id === id);

    if (index !== -1) {
        dataTodos[index] = { ...dataTodos[index], ...updateId };
        fs.writeFileSync('db/todo.json', JSON.stringify(dataTodos, null, 2));
        console.log(`-- Successfully updated todo with ID ${id} --`);
    } else {
        console.log(`Todo dengan ID ${id} tidak ditemukan.`);
    }
}

module.exports = {
    todoQuestion,
    todos,
    storeTodo,
    getById,
    updateById
}