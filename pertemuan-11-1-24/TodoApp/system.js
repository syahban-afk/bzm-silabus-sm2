const generateRandomId = require('./idTodo')
const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const folder = './db'
if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder)
}

const dataFile = './db/data.json'
if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, '[]', 'utf-8')
}

const questionTodo = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
}


const newData = (namaDepan, namaBelakang, umur, jabatan, gaji, alamat) => {
    const id = generateRandomId(5)
    const data = { id, namaDepan, namaBelakang, umur, jabatan, gaji, alamat }
    const file = fs.readFileSync(dataFile, 'utf-8')
    const dataTodo = JSON.parse(file)

    if (!namaDepan || !namaBelakang || !umur || !jabatan || !gaji || !alamat) {
        console.log('Mohon masukkan semua informasi. Silahkan coba lagi!')
    } else {
        dataTodo.push(data)
        fs.writeFileSync(dataFile, JSON.stringify(dataTodo))
        console.log('Data berhasil di tambah👍')
    }
    rl.close()
}

const allData = () => {
    const fileData = fs.readFileSync(dataFile)
    const data = JSON.parse(fileData)
    console.log(data)
    rl.close()
}

const dataById = (id) => {
    const file = fs.readFileSync(dataFile, 'utf-8')
    const dataTodo = JSON.parse(file)
    const findTodoId = dataTodo.find((todo) => todo.id === id)

    if (findTodoId) {
        console.log(findTodoId)
    } else {
        console.log(`Todo dengan ID:${id} tidak di temukan!`)
    }
    rl.close()
}

const deleteData = (id) => {
    const file = fs.readFileSync(dataFile, 'utf-8');
    const dataTodo = JSON.parse(file);
    const filterDataTodo = dataTodo.filter((todo) => todo.id !== id);

    if (filterDataTodo.length < dataTodo.length) {
        fs.writeFileSync(dataFile, JSON.stringify(filterDataTodo));
        console.log(`Data dengan ID:${id} telah berhasil dihapus👍`);
    } else {
        console.log(`Data dengan ID:${id} tidak ditemukan`);
    }
    rl.close();
}

const updateData = (id, update) => {
    const file = fs.readFileSync(dataFile, 'utf-8');
    const dataTodo = JSON.parse(file);
    const index = dataTodo.findIndex((todo) => todo.id === id)

    if (index !== -1) {
        const updateData = Object.assign({}, dataTodo[index], update)
        dataTodo[index] = updateData
        for (const key in update) {
            if (update[key] !== null && update[key] !== '') {
                updateData[key] = update[key]
            }
            fs.writeFileSync(dataFile, JSON.stringify(dataTodo))
        }
        console.log(`Berhasil mengupdate data dengan ID :${id}`)
    } else {
        console.log(`Data dengan ID:${id} tidak ditemukan`)
    }
    rl.close()
}

const updateDataById = async () => {
    const id = await questionTodo("Masukkan Id yang inging di update :")

    const file = fs.readFileSync(dataFile, 'utf-8');
    const dataTodo = JSON.parse(file);
    const index = dataTodo.findIndex((todo) => todo.id === id)

    const namaDepan = await questionTodo("Masukkan nama depan :") || dataTodo[index].namaDepan
    const namaBelakang = await questionTodo("Masukkan nama belakang :") || dataTodo[index].namaBelakang
    const umur = await questionTodo("Masukkan umur :") || dataTodo[index].umur
    const jabatan = await questionTodo("Masukkan jabatan :") || dataTodo[index].jabatan
    const gaji = await questionTodo("Masukkan gaji :") || dataTodo[index].gaji
    const alamat = await questionTodo("Masukkan alamat :") || dataTodo[index].alamat

    updateData(id, { namaDepan, namaBelakang, umur, jabatan, gaji, alamat })
}

module.exports = {
    questionTodo,
    newData,
    allData,
    dataById,
    deleteData,
    updateDataById
}