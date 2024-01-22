const fs = require('fs')
const readline = require("readline")
const { json } = require('stream/consumers')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// cek folder ada atau tidak jika tidak maka buatkan foldernya

const directory = './db'
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory)
}

// cek file, ada atau tidak, jika tidak maka buatkan filenyea

const checkFile = './db/data.json'
if (!fs.existsSync(checkFile)) {
    fs.writeFileSync(checkFile, '[]', 'utf-8')
}

const wuestionExample = (pertanyaan) => {
    return new Promise((resolve) => {
        rl.question(pertanyaan, (jawaban) => {
            resolve(jawaban);
        })
    })
}

const addData = async () => {
    const nama = await wuestionExample("Masukkan nama anda:")
    const umur = await wuestionExample("Masukkan umur anda:")
    const hobi = await wuestionExample("Masukkan hobi anda:")

    const data = { nama, umur, hobi, }
    const filedb = fs.readFileSync("./db/data.json", "utf-8")
    const datadiri = JSON.parse(filedb)

    datadiri.push(data)
    fs.writeFileSync('./db/data.json', JSON.stringify(datadiri))
    console.log("Terima kasih anda sudah memperkenalkan diri")
    rl.close()
}

addData()