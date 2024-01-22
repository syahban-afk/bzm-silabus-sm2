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
    rl.close()
}

const storeTodo = (NamaDepan, NamaBelakang, Jabatan, Gaji, TanggalMasuk, Alamat) => {

    const id = generateRandomId(5)
    const todo = { id, NamaDepan, NamaBelakang, Jabatan, Gaji, TanggalMasuk, Alamat }
    const file = fs.readFileSync(checkFile, 'utf-8')

    const dataTodo = JSON.parse(file)

    if (!NamaDepan || !NamaBelakang || !Jabatan || !Gaji || !TanggalMasuk || !Alamat) {
        console.log('Mohon masukkan semua informasi todo. Silakan coba lagi.');
    } else {
        dataTodo.push(todo)
        fs.writeFileSync(checkFile, JSON.stringify(dataTodo))
        console.log('data berhasil di tambah')
    }

    rl.close()

}

const getById = (id) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const data = JSON.parse(file);
    const findTodoId = data.find(todo => todo.id === id);

    if (findTodoId) {
        console.log(findTodoId)
    } else {
        console.log(`Todo dengan ID ini ${id} tidak di temukan!`);
    }

    rl.close();
}

const updateById = (id, updateTodo) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const dataTodos = JSON.parse(file);
    const index = dataTodos.findIndex(todo => todo.id === id);

    if (!id) {
        if (index !== -1) {
            const updatedTodo = Object.assign({}, dataTodos[index], updateTodo);
            dataTodos[index] = updatedTodo;
            for (const key in updateTodo) {
                if (updateTodo[key] !== null && updateTodo[key] !== '') {
                    updatedTodo[key] = updateTodo[key];
                }
            }
            fs.writeFileSync(checkFile, JSON.stringify(dataTodos));
            console.log(`Successfully updated todo :` + id);
        } else {
            console.log(`Todo dengan ID ${id} tidak ditemukan.`);
        }
        rl.close();
    } else {
        console.log('Mohon untuk mengisi ID sengan benar!')
        rl.close();
    }
        rl.close();
}

const update = async () => {
    const id = await todoQuestion("masukkan id todo yang ingin di perbarui :")

    const file = fs.readFileSync(checkFile, 'utf-8');
    const dataTodos = JSON.parse(file);
    const index = dataTodos.findIndex(todo => todo.id === id)

    const NamaDepan = await todoQuestion("perbarui nama depan :") || dataTodos[index].NamaDepan;
    const NamaBelakang = await todoQuestion("perbarui nama belakang :") || dataTodos[index].NamaBelakang;
    const Jabatan = await todoQuestion("perbarui jabtan :") || dataTodos[index].Jabatan;
    const Gaji = await todoQuestion("perbarui gaji :") || dataTodos[index].Gaji;
    const TanggalMasuk = await todoQuestion("perbarui tanggal masuk :") || dataTodos[index].TanggalMasuk;
    const Alamat = await todoQuestion("perbarui alamat :") || dataTodos[index].Alamat;

    updateById(id, { NamaDepan, NamaBelakang, Jabatan, Gaji, TanggalMasuk, Alamat })
}

const deleteById = (id) => {

    const file = fs.readFileSync(checkFile, 'utf-8');
    const dataTodo = JSON.parse(file);
    const filteredTodo = dataTodo.filter((todo) => todo.id !== id);

    if (filteredTodo.length < dataTodo.length) {
        fs.writeFileSync(checkFile, JSON.stringify(filteredTodo));
        console.log(`Todo dengan id :${id} berhasil di hapus`);
    } else {
        console.log(`Todo dengan ID ${id} tidak ditemukan.`);
    }

    rl.close()
}

module.exports = {
    todoQuestion,
    todos,
    storeTodo,
    getById,
    updateById,
    update,
    deleteById
}