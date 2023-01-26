<?php

$koneksi = new mysqli("localhost", "root", "", "db_pwpb6");
$id = $_GET['id'];

$result = mysqli_query($koneksi, "DELETE FROM tb_nilai_siswa WHERE id=" . $id);

if ($result) {
  echo json_encode(['message' => 'Data Input Succesfully']);
} else {
  echo json_encode([
    'message' => 'Data Failed To Input'
  ]);
}

?>