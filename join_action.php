<?php
date_default_timezone_set('Asia/Seoul');
$db = new PDO("mysql:dbname=qna;host:localhost", "lsm", "333");
$id = $_POST['id'];
$pw = $_POST['pw'];
$date = date('Y-m-d H:i:s');

$result = $db->exec("INSERT into member (id, pw, date, authority) values ('$id', '$pw', '$date', 0);");

if ($result) { ?>
   <script>
      alert('가입 되었습니다.');
      location.replace("login.html");
   </script>

<?php   } else { ?>
   <script>
      alert("fail");
   </script>
<?php } ?>