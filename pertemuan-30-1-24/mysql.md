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
- Ascending => dimulai dari tulisan z-a / id/ created_at (tanggal_buat)

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