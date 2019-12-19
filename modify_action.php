<?php
date_default_timezone_set('Asia/Seoul');
$db = new PDO("mysql:dbname=qna;host:localhost", "lsm", "333");
$number = $_POST['number'];
$title = $_POST['title'];
$content = $_POST['content'];
$date = date('Y-m-d H:i:s');
$result = $db->query("UPDATE board set title='$title', content='$content', date='$date' where post_number=$number");

if ($result) { ?>
   <script>
      alert("수정되었습니다.");
      location.replace("./viewpage.php?page=" + <?= $number ?>);
   </script>
<?php } else {
   echo "fail";
} ?>