pada video kaliini kita akan mempelajari key foreign, left join, roght join, dan inner join

pertama-tama mari kita membuatnya ke mt sql terlebih dahulu

lalu kita membuat 3 table yaitu buku, rak, dan author:

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

setelah membuat tablenya mari kita coba cek apakah table sudah benar benar ada mengunakan select * (nama table) 

hasilnya empty set artinya table tersebut belum di isi apapun di dalamnya

kita menggunakan command show tables untuk melihat apa saja table yang ada pada database yang kita miliki

selanjutnya mari kita mengisi data pada tabel buku, author, dan rak dengan perintah insert into :

INSERT INTO author (`nama_author`) VALUES ('JK Rowling'), ('George Orwell');
artinya kita mengisi nama_author yang berada pada table author dengan value ('JK Rowling'), ('George Orwell')

maka hasilnya akan seperti ini:
+----+---------------+
| id | nama_author   |
+----+---------------+
|  1 | JK Rowling    |
|  2 | George Orwell |
+----+---------------+


INSERT INTO rak (`nomor_rak`) VALUES ('RAK1'), ('RAK2');
sama seperti di atas kita mengisi nomor_rak pada table rak dengan value ('RAK1'), ('RAK2')

maka hasilnya akan seperti ini:
+----+-----------+
| id | nomor_rak |
+----+-----------+
|  1 | RAK1      |
|  2 | RAK2      |
+----+-----------+



INSERT INTO buku (`nama_buku`, `halaman_buku`, `author_id`, `rak_id`, `rilis_buku`) VALUES
('Buku 1', 350, 1, 1, '1997-07-20'),
('Buku 2', 250, 1, 1, '1987-03-24'),
('Buku 3', 650, 1, 1, '1995-04-21'),
('Buku 4', 750, 2, 2, '1978-02-04'),
('Buku 5', 800, 2, 2, '1999-01-18');
sama juga seperti sebelumnya kita menggunakan insert into (nama table) untuk mengisi table buku

maka hasilnya akan seperti ini:
+----+-----------+--------------+-----------+--------+------------+
| id | nama_buku | halaman_buku | author_id | rak_id | rilis_buku |
+----+-----------+--------------+-----------+--------+------------+
|  1 | Buku 1    |          350 |         1 |      1 | 1997-07-20 |
|  2 | Buku 2    |          250 |         1 |      1 | 1987-03-24 |
|  3 | Buku 3    |          650 |         1 |      1 | 1995-04-21 |
|  4 | Buku 4    |          750 |         2 |      2 | 1978-02-04 |
|  5 | Buku 5    |          800 |         2 |      2 | 1999-01-18 |
+----+-----------+--------------+-----------+--------+------------+

hasilnya kita memasukkan 5 data ke dalam table buku

selanjutnya mari kita memahami terlebih dahule tentang key foregin

Foreign key dalam database adalah sebuah field (atau sekumpulan field) di dalam tabel yang secara langsung merujuk pada primary key di tabel lain. Fungsi dari foreign key adalah untuk memastikan integritas data dan untuk mengimplementasikan hubungan antara tabel. Dengan menggunakan foreign key, kita dapat menghindari duplikasi data, memastikan bahwa hanya data yang valid yang dapat dimasukkan ke dalam database, serta memudahkan pemeliharaan dan keberlanjutan data di masa depan.
Keuntungan penggunaan foreign key meliputi:

1. Integritas Referensial: Memastikan bahwa hubungan antar tabel selalu konsisten, sehingga tidak terdapat record yang saling merujuk ke data yang tidak ada.
2. Pemeliharaan Data: Ketika data diubah atau dihapus, database akan mengecek foreign key untuk memastikan bahwa tidak ada data terkait yang terpengaruh.
3. Kemudahan Query: Mempermudah dalam melakukan query untuk menggabungkan tabel-tabel yang memiliki hubungan.

setelah memahami foreign key selanjutnya kita akan mencoba menggabungkan table buku dengan author dan rak menggunakan select

kodenya seperti ini:
SELECT
    buku.nama_buku,
    buku.rilis_buku,
    author.nama_author,
    rak.nomor_rak
FROM
    buku
JOIN author ON buku.author_id = author.id
JOIN rak ON buku.rak_id = rak.id;

maka hasilnya akan seperti ini:
+-----------+------------+---------------+-----------+
| nama_buku | rilis_buku | nama_author   | nomor_rak |
+-----------+------------+---------------+-----------+
| Buku 3    | 1995-04-21 | JK Rowling    | RAK1      |
| Buku 2    | 1987-03-24 | JK Rowling    | RAK1      |
| Buku 1    | 1997-07-20 | JK Rowling    | RAK1      |
| Buku 5    | 1999-01-18 | George Orwell | RAK2      |
| Buku 4    | 1978-02-04 | George Orwell | RAK2      |
+-----------+------------+---------------+-----------+

yang mana sebelumnya table buku berisikan data seperti ini:
+----+-----------+--------------+-----------+--------+------------+
| id | nama_buku | halaman_buku | author_id | rak_id | rilis_buku |
+----+-----------+--------------+-----------+--------+------------+
|  1 | Buku 1    |          350 |         1 |      1 | 1997-07-20 |
|  2 | Buku 2    |          250 |         1 |      1 | 1987-03-24 |
|  3 | Buku 3    |          650 |         1 |      1 | 1995-04-21 |
|  4 | Buku 4    |          750 |         2 |      2 | 1978-02-04 |
|  5 | Buku 5    |          800 |         2 |      2 | 1999-01-18 |
+----+-----------+--------------+-----------+--------+------------+

tetapi setelah di gabungkan maka table (di buku) yang mana sebelumnya 1 (di author_id dan rak_id) telah berganti setelah datanya di gabungkan jika di lihat datanya sama dengan yang ada di table rak dan author dengan id yang sama

rak:
+----+-----------+
| id | nomor_rak |
+----+-----------+
|  1 | RAK1      |
|  2 | RAK2      |
+----+-----------+
authors:
+----+---------------+
| id | nama_author   |
+----+---------------+
|  1 | JK Rowling    |
|  2 | George Orwell |
+----+---------------+

selanjutnya mari kita memahami left join, right join, dan join(inner join)

LEFT JOIN mengambil semua data dari tabel kiri (Orders) dan data yang sesuai dari tabel kanan (Customers). RIGHT JOIN mengambil semua data dari tabel kanan dan data yang sesuai dari tabel kiri. INNER JOIN hanya mengambil data yang memiliki kecocokan di kedua tabel.

untuk kodenya kita bisa menggunakan:

LEFT JOIN:
SELECT
  buku.nama_buku,
  author.nama_author
FROM
  buku
LEFT JOIN author ON buku.author_id = author.id;

RIGHT JOIN:
SELECT
  buku.nama_buku,
  rak.nomor_rak
FROM
  buku
RIGHT JOIN rak ON buku.rak_id = rak.id;

INNER JOIN:
SELECT
  buku.nama_buku,
  author.nama_author,
  rak.nomor_rak
FROM
  buku
JOIN author ON buku.author_id = author.id
JOIN rak ON buku.rak_id = rak.id;

maka hasilnya akan seperti ini:

LEFT:
+-----------+---------------+
| nama_buku | nama_author   |
+-----------+---------------+
| Buku 1    | JK Rowling    |
| Buku 2    | JK Rowling    |
| Buku 3    | JK Rowling    |
| Buku 4    | George Orwell |
| Buku 5    | George Orwell |
+-----------+---------------+

RIGHT:
+-----------+-----------+
| nama_buku | nomor_rak |
+-----------+-----------+
| Buku 1    | RAK1      |
| Buku 2    | RAK1      |
| Buku 3    | RAK1      |
| Buku 4    | RAK2      |
| Buku 5    | RAK2      |
+-----------+-----------+

INNER:
+-----------+---------------+-----------+
| nama_buku | nama_author   | nomor_rak |
+-----------+---------------+-----------+
| Buku 3    | JK Rowling    | RAK1      |
| Buku 2    | JK Rowling    | RAK1      |
| Buku 1    | JK Rowling    | RAK1      |
| Buku 5    | George Orwell | RAK2      |
| Buku 4    | George Orwell | RAK2      |
+-----------+---------------+-----------+

selanjutnya kita akan mencoba menghapus data menggunakan delete from:

kodenya seperti ini:

DELETE FROM  buku
WHERE  rak_id = 2;

misalnya kita ingin melakukan delete pada rak_id

maka hasilnya akan seperti ini:

before:
+-----------+------------+---------------+-----------+
| nama_buku | rilis_buku | nama_author   | nomor_rak |
+-----------+------------+---------------+-----------+
| Buku 3    | 1995-04-21 | JK Rowling    | RAK1      |
| Buku 2    | 1987-03-24 | JK Rowling    | RAK1      |
| Buku 1    | 1997-07-20 | JK Rowling    | RAK1      |
| Buku 5    | 1999-01-18 | George Orwell | RAK2      |
| Buku 4    | 1978-02-04 | George Orwell | RAK2      |
+-----------+------------+---------------+-----------+

after:
+-----------+------------+-------------+-----------+
| nama_buku | rilis_buku | nama_author | nomor_rak |
+-----------+------------+-------------+-----------+
| Buku 3    | 1995-04-21 | JK Rowling  | RAK1      |
| Buku 2    | 1987-03-24 | JK Rowling  | RAK1      |
| Buku 1    | 1997-07-20 | JK Rowling  | RAK1      |
+-----------+------------+-------------+-----------+

maka dapat di lihat bahwa rak_id yang berisi 2 pada table buku telah terhapus dan otomatis tidak menampilkan data yang telah di hapus atau null

itulah kegunaan key foreing yang sudah di jelaskan pada awal video tadi


sekian dan terima kasih😁🙏👍