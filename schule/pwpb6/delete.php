<?php

$koneksi = new mysqli("localhost", "root", "", "db_pwpb6");
$noAbsen = $_GET['no_absen'];

$result = mysqli_query($koneksi, "DELETE FROM tb_data_siswa WHERE no_absen=" . $noAbsen);

if ($result) {
  echo json_encode(['message' => 'Data Input Succesfully']);
} else {
  echo json_encode([
    'message' => 'Data Failed To Input'
  ]);
}

?>