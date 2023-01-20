<?php
$koneksi = new mysqli("localhost", "root", "", "db_pwpb6");
@$nis = $_POST['nis'];
@$namaSiswa = $_POST['nama_siswa'];
@$jenisKelamin = $_POST['jenis_kelamin'];

$result = mysqli_query($koneksi, "INSERT INTO tb_data_siswa SET nis='$nis',
nama_siswa='$namaSiswa', jenis_kelamin='$jenisKelamin'");

if ($result) {
  echo json_encode(['message' => 'Data Input Succesfully']);
} else {
  echo json_encode([
    'message' => 'Data Failed To Input'
  ]);
}
?>