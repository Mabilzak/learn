<?php
$koneksi = new mysqli("localhost", "root", "", "db_pwpb6");
$data = mysqli_query($koneksi, "select * from tb_data_siswa");
$data = mysqli_fetch_all($data, MYSQLI_ASSOC);

echo json_encode($data);
?>
<!-- Creator Maulana Abil Zakaria -->