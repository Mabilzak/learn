<?php
$koneksi = new mysqli("localhost", "root", "", "db_pwpb6");
@$no = $_POST['no'];
@$mapel = $_POST['mapel'];
@$nilai = $_POST['nilai'];

$result = mysqli_query($koneksi, "INSERT INTO tb_nilai_siswa SET no='$no',
mapel='$mapel', nilai='$nilai'");

if ($result) {
  echo json_encode(['message' => 'Data Input Succesfully']);
} else {
  echo json_encode([
    'message' => 'Data Failed To Input'
  ]);
}
?>