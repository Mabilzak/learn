<?php

$koneksi = new mysqli("localhost", "root", "", "db_pwpb6");
$id = $_POST['id'];
$no = $_POST['no'];
$mapel = $_POST['mapel'];
$nilai = $_POST['nilai'];

$result = mysqli_query($koneksi, "UPDATE tb_nilai_siswa SET id='$id',
no='$no', mapel='$mapel' WHERE nilai='$nilai'");

if ($result) {
  echo json_encode(['message' => 'Data Input Succesfully']);
} else {
  echo json_encode(['message' => 'Data Failed To Input']);
}

?>