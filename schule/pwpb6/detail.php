<?php
$koneksi = new mysqli("localhost", "root", "", "db_pwpb6");
$data = mysqli_query($koneksi, "SELECT * FROM tb_nilai_siswa 
WHERE id=" . $_get['id']);
$data = mysqli_fetch_array($data, MYSQLI_ASSOC);

echo json_encode($data);
?>