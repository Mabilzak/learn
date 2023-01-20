<?php

$koneksi = new mysqli("localhost", "root", "", "db_pwpb6");
$noAbsen = $_POST['no_absen'];
$nis = $_POST['nis'];
$namaSiswa = $_POST['nama_siswa'];
$jenisKelamin = $_POST['jenis_kelamin'];

$result = mysqli_query($koneksi, "UPDATE tb_data_siswa SET nis='$nis',
nama_siswa='$namaSiswa', jenis_kelamin='$jenisKelamin' WHERE no_absen='$noAbsen'");

if ($result) {
  echo json_encode(['message' => 'Data Input Succesfully']);
} else {
  echo json_encode(['message' => 'Data Failed To Input']);
}

?>