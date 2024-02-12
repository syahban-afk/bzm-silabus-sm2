### Buat table:
CREATE TABLE Siswa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    kelas VARCHAR(50),
    nomor_induk VARCHAR(20),
    riwayat_akademik TEXT
);

CREATE TABLE Staf_Pengajar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    mata_pelajaran VARCHAR(100),
    jadwal_mengajar TEXT
);

CREATE TABLE Jadwal_Pelajaran (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_kelas INT,
    id_staf_pengajar INT,
    hari VARCHAR(15),
    jam_mulai TIME,
    jam_selesai TIME,
    FOREIGN KEY (id_kelas) REFERENCES Siswa(id),
    FOREIGN KEY (id_staf_pengajar) REFERENCES Staf_Pengajar(id)
);

CREATE TABLE Nilai (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_siswa INT,
    id_staf_pengajar INT,
    mata_pelajaran VARCHAR(100),
    nilai DECIMAL(5,2),
    FOREIGN KEY (id_siswa) REFERENCES Siswa(id),
    FOREIGN KEY (id_staf_pengajar) REFERENCES Staf_Pengajar(id)
);

CREATE TABLE Administrasi_Akademik (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_siswa INT,
    id_staf_pengajar INT,
    jenis_kegiatan VARCHAR(100),
    tanggal DATE,
    FOREIGN KEY (id_siswa) REFERENCES Siswa(id),
    FOREIGN KEY (id_staf_pengajar) REFERENCES Staf_Pengajar(id)
);


### Memasukkan data
INSERT INTO Siswa (nama, kelas, nomor_induk, riwayat_akademik) VALUES ('Udin', 'Kelas A', '001', 'Pernah menang lomba MTK');
INSERT INTO Siswa (nama, kelas, nomor_induk, riwayat_akademik) VALUES ('Edo', 'Kelas B', '002', 'Pernah ikut olimpiade IPA');


INSERT INTO Staf_Pengajar (nama, mata_pelajaran, jadwal_mengajar) VALUES ('Pak ah', 'Matematika', 'Senin 08:00-10:00, Rabu 10:00-12:00');
INSERT INTO Staf_Pengajar (nama, mata_pelajaran, jadwal_mengajar) VALUES ('Pak ok', 'Bahasa Inggris', 'Selasa 09:00-11:00, Kamis 13:00-15:00');


INSERT INTO Jadwal_Pelajaran (id_kelas, id_staf_pengajar, hari, jam_mulai, jam_selesai) VALUES (1, 1, 'Senin', '08:00', '10:00');
INSERT INTO Jadwal_Pelajaran (id_kelas, id_staf_pengajar, hari, jam_mulai, jam_selesai) VALUES (2, 2, 'Selasa', '09:00', '11:00');


INSERT INTO Nilai (id_siswa, id_staf_pengajar, mata_pelajaran, nilai) VALUES (1, 1, 'Matematika', 85.5);
INSERT INTO Nilai (id_siswa, id_staf_pengajar, mata_pelajaran, nilai) VALUES (2, 2, 'Bahasa Inggris', 78.2);


INSERT INTO Administrasi_Akademik (id_siswa, id_staf_pengajar, jenis_kegiatan, tanggal) VALUES (1, 1, 'Daftar Hadir', '2024-02-10');
INSERT INTO Administrasi_Akademik (id_siswa, id_staf_pengajar, jenis_kegiatan, tanggal) VALUES (2, 2, 'Jadwal Ujian', '2024-02-15');

### Menggabungkan data

SELECT Jadwal_Pelajaran.*, Siswa.nama AS nama_siswa, Staf_Pengajar.nama AS nama_pengajar
FROM Jadwal_Pelajaran
JOIN Siswa ON Jadwal_Pelajaran.id_kelas = Siswa.id
JOIN Staf_Pengajar ON Jadwal_Pelajaran.id_staf_pengajar = Staf_Pengajar.id;

SELECT Nilai.*, Siswa.nama AS nama_siswa, Staf_Pengajar.nama AS nama_pengajar
FROM Nilai
JOIN Siswa ON Nilai.id_siswa = Siswa.id
JOIN Staf_Pengajar ON Nilai.id_staf_pengajar = Staf_Pengajar.id;

SELECT Administrasi_Akademik.*, Siswa.nama AS nama_siswa, Staf_Pengajar.nama AS nama_pengajar
FROM Administrasi_Akademik
JOIN Siswa ON Administrasi_Akademik.id_siswa = Siswa.id
JOIN Staf_Pengajar ON Administrasi_Akademik.id_staf_pengajar = Staf_Pengajar.id;
