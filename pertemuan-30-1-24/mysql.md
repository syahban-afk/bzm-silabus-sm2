## pertemuan 1

### cara membuat database baru

Buka terminal, lalu ketikan mysql -u root -p dan passwordnya (kosong)

default mysql adalah username: root dan password: (kosong)

### membuat table baru di smk_personal

disini akan membuat table baru dengan nama biodata dan kolumnya:
- id, nama, kelas, jurusan, umur

create table biodata (
->id int primary key not null,
->nama varchar(256)
->kelas varchar(10)
->jurusan varchar(255)
->umur int
->);

### lihat data table biodata

dapat menggunakan query desc biodata;
dapat juga menggunakan select * from  biodata;

### membuat data baru pada tabel biodata

Disini akan menambahkan data baru dengan query berikut:

insert into biodata (id, nama, kelas, jurusan, umur) values (6, "Asep", "XI", "SIJA", 16);

Bagaimana jika ingin melihat datanya? select *  from biodata

* = mengambil seluruh data tipenya

                                                    
+----+-------+-------+---------+------+
| id | nama  | kelas | jurusan | umur |
+----+-------+-------+---------+------+
|  1 | Attar | XI    | SIJA    |   16 |
+----+-------+-------+---------+------+

kita akan memfilter data berdasarkan kelas

select * from biodata where kelas = XI;

memfilter berdasarkan jurusan 

select * from biodata where jurusan = 'SIJA';

### update data berdasarkan iID

Disini dapat mengubah sesua dengan kebutuhan query yang ingin diubah:

UPDATE iodata SET NAMA="namanya" WEHRE id=1;

### hapus berdasarkan ID

Dengan menggunakan query seperti ini:

DELETE FROM biodata WHERE id=?

Buatlah sebuah table dengan nama "sekolahan", didalam table sekolahan, terdapat beberapa kolum: id, nama_sekolah, jurusan,kapasitas_siswa, alamat. Buatlah sebanyak 10 data dengan berbagai jenis jurusan dan kapasitas_siswa;


### select

select * from sekolah
where kapasitas_siswa > 300 or alamat = "Bogor";

### Not 
select * from sekolahan where not alamat= "BOGOR"

select * from sekolahan where jurusan = "SIJA" and not alamat= "BOGOR"

### Or

select * from sekolahan where alamat="BOGOR" or jurusan='SIJA'

select * from sekolahan where not jurusan ="SIJA" and kapasitas_siswa >= 200;

### order by

- Descending => dimulai dari tulisan z-a / id/ created_at (tanggal_buat)
- Ascending => dimulai dari tulisan a-Z / id/ created_at (tanggal_buat)

'''sql

<!-- mengambil jurusan dari z-a -->
select* from sekolahan order by jurusan desc
<!-- mengambil jurusan dari a-z -->
select* from sekolahan order by jurusan asc

### limit 

<!-- membatasi jumlah data -->
select * from tabel limit 5 

<!-- membatasi jumlah data dengan desc/asc -->
select * from tabel order by condition limit 5

select * from sekolahan where jurusan= "SIJA" and kapasitas_siswa >=200 and alamat = "BOGOR" or alamat = "Enrekang" order by id asc limit 5 offset 2 ;


### like 

<!-- mencari nama sekolah dengan diawali huruf belakang -->
select * from sekolahan where nama_sekolah like'%a'; 

<!-- mencari nama sekolah dengan diawali huruf depan -->
select * from sekolahan where nama_sekolah like'a%'; 

<!-- mencari nama sekolah dengan diawali keseluruhan huruf -->
select * from sekolahan where nama_sekolah like'%a%'; 


### aliases 

mendefinisikan pergantian field

select fields as asfield
from table ;

nama_sekolah= namasekolah, kapasitas_siswa = kapasitas, alamat= tempat


### not in

<!-- mencari jurusan selain SIJA -->
select * from sekolahan where jurusan not in ("SIJA");


...

Bikin perpusatakaan


tabel : perpustakaan

id int  primary key auto_increment not null,
kategori varchar(255),
judul varchar(255),
deskripsi text,
penulis varchar(255),
penerbit varchar(255),
tahun_terbit int,
jumlah_halaman int,
batas_umur int,
isbn int,
harga int

auto increment +=1
auto decrement -=1

insert into perpus (id, kategori, judul, deskripsi, penulis, penerbit, tahun_terbit, jumlah_halaman, batas_umur, isbn, harga) values (4, "Action", "Super Hero", "Seseorang yang bisa terbang di angkasa", "Amesiar", "Holywood", 2024, 520, 17, 93762959, 125000), (5, "Murder", "Kill Him", "Siapakah pembunuh di antara kami ber lima?", "Chidori", "Mizan fantasi", 2025, 590, 18, 85017590, 150000);


1. Filtering data (where)
2. Cari data dengan (like) = judul, kategori, penulis
3. Data id Desc
4. Filtering jumlah halaman >= & < & = (bebas)
5. Tahun terbit >= 2020 =< 2026
6. Batas Umur dimulai dari 8 s/d 20
7. Harga dimulai dari desc / asc
8. Harga range dari bebas - bebas (1  - 100000000)
9. Harus ada update delete
10. upload yusupppp

CREATE TABLE author (
id INT NOT NULL AUTO_INCREMENT,
nama_author VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE rak (
id INT NOT NULL AUTO_INCREMENT,
nomor_rak VARCHAR(50) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE buku (
  id INT NOT NULL AUTO_INCREMENT,
  nama_buku VARCHAR(255) NOT NULL,
  halaman_buku INT NOT NULL,
  author_id INT,
  rak_id INT,
  rilis_buku DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (author_id) REFERENCES author(id),
  FOREIGN KEY (rak_id) REFERENCES rak(id)
);

INSERT INTO author (`nama_author`) VALUES ('JK Rowling'), ('George Orwell');
INSERT INTO rak (`nomor_rak`) VALUES ('RAK1'), ('RAK2');
INSERT INTO buku (`nama_buku`, `halaman_buku`, `author_id`, `rak_id`, `rilis_buku`) VALUES
('Harry Potter', 350, 1, 1, '1997-06-26'),
('1984', 300, 2, 2, '1949-06-08');

SELECT
    buku.nama_buku,
    buku.rilis_buku,
    author.nama_author,
    rak.nomor_rak
FROM
    buku
JOIN author ON buku.author_id = author.id
JOIN rak ON buku.rak_id = rak.id;

DELETE FROM author WHERE `id` = 1;

DELETE FROM (nama table) 
WHERE (value) = 2;