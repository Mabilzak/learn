<?php
$koneksi = new mysqli("localhost", "root", "", "db_pwpb6");
$data = mysqli_query($koneksi, "SELECT * FROM tb_data_siswa 
WHERE no_Absen=" . $_get['noAbsen']);
$data = mysqli_fetch_array($data, MYSQLI_ASSOC);

echo json_encode($data);
?>