const randomId = require('./randomId')
const fs = require('fs');
const path = require('path');
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const check = './db'
if (!fs.existsSync(check)) {
    fs.mkdirSync(check)
}

const checkFile = './db/data.json'
if (!fs.existsSync(checkFile)) {
    fs.writeFileSync(checkFile, [], 'utf-8')
}

const todos = () => {
    const fileTodos = fs.readFileSync(checkFile)
    const data = JSON.parse(fileTodos)
    console.log(data)
}

const question = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question), (answer) => {
            resolve(answer)
        }
    })
}

const newData = (NamaDepan, NamaBelakang, Jabatan, Gaji, TanggalMasuk, Alamat) => {
    const id = randomId
    const data = { id, NamaDepan, NamaBelakang, Jabatan, Gaji, TanggalMasuk, Alamat }
    const file = fs.readFileSync(checkFile, 'utf-8')

    const dataTodo = JSON.parse(file)
    dataTodo.push(data)
    fs.writeFileSync(checkFile, JSON.stringify(dataTodo))
    console.log('thankyou for submit todos')
    rl.close()

    if (!NamaDepan || !NamaBelakang || !Jabatan || !Gaji || !TanggalMasuk || !Alamat) {
        console.log('Mohon masukkan semua informasi todo. Silakan coba lagi.');
        rl.close();
        return;
    }
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

const updateById = (id, updateTodo) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const dataTodos = JSON.parse(file);
    const index = dataTodos.findIndex(todo => todo.id === id);

    if (index !== -1) {
        dataTodos[index] = { ...dataTodos[index], ...updateTodo };
        fs.writeFileSync(checkFile, JSON.stringify(dataTodos));
        console.log(`Berhasil memperbarui todo dengan ID: ${id}`);
    } else {
        console.log(`Todo dengan ID ${id} tidak ditemukan.`);
    }

    rl.close();
}

const deleteById = (id) => {

    const file = fs.readFileSync(checkFile, 'utf-8');
    const dataTodo = JSON.parse(file);
    const filteredTodo = dataTodo.filter(todo => todo.id !== id);

    if (filteredTodo.length < dataTodo.length) {
        fs.writeFileSync(checkFile, JSON.stringify(filteredTodo));
        console.log(`Todo dengan id :${id} berhasil di hapus`);
    } else {
        console.log(`Todo dengan ID ${id} tidak ditemukan.`);
    }

    rl.close()
}

module.exports = {
    question,
    todos,
    newData,
    getById,
    deleteById,
    updateById
}