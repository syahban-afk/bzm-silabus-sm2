const { updateById, question } = require('./system')

const selectOption = async (prompt, options) => {
    const option = await todoQuestion(`${prompt} (${options.join(', ')}):`);

    if (!options.includes(option)) {
        console.log('Pilihan tidak valid.');
        return selectOption(prompt, options);
    }

    return option;
}

const update = async () => {
    const id = await todoQuestion("Masukkan ID todo yang ingin diupdate:");

    const updateOptions = ['NamaDepan', 'NamaBelakang', 'Jabatan', 'Gaji', 'TanggalMasuk', 'Alamat'];
    const selectedOption = await selectOption("Pilih atribut yang ingin diupdate", updateOptions);

    if (!selectedOption) {
        console.log('Pilihan tidak valid. Pembaharuan dibatalkan.');
        rl.close();
        return;
    }

    const newValue = await todoQuestion(`Masukkan nilai baru untuk ${selectedOption}:`);

    if (!newValue) {
        console.log(`Nilai ${selectedOption} tidak boleh kosong. Pembaharuan dibatalkan.`);
        rl.close();
        return;
    }

    const updateTodo = { [selectedOption]: newValue };
    updateById(id, updateTodo);
}

update()