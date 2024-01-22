const fs = require('fs')
const readline = require("readline")
const { json } = require('stream/consumers')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('masukkan nama lengkap :', (nama) => {
    rl.question('masukkan umur anda :', (umur) => {
        rl.question('Masukkan asal sekolah anda :', (sekolah) => {
            // console.log(`Nama saya adalah ${nama}\nDan umur saya adalah ${umur}\nSaya berasal dari sekolah ${sekolah}`)

            const data = { nama, umur, sekolah }
            const filedb = fs.readFileSync('./db/data.json', 'utf-8')
            const datadiri = JSON.parse(filedb)

            datadiri.push(data)
            fs.writeFileSync('./db/data.json', JSON.stringify(datadiri))
            console.log("Terima kasih sudah memperkenalkan diri kamu")
            rl.close()
        })
    })
})