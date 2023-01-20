<?php
$koneksi = new mysqli("localhost", "root", "", "db_pwpb6");
$nis = $_POST['nis'];
$namaSiswa = $_POST['nama_siswa'];
$jenisKelamin = $_POST['jenis_kelamin'];

$result = mysqli_query($koneksi, "INSERT INTO tb_data_siswa set nis='$nis',
nama_siswa='$namaSiswa', jenis_kelamin='$jenisKelamin'");
?>