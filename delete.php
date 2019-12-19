<?php
$db = new PDO("mysql:dbname=qna;host:localhost", "lsm", "333");
$usrid = $_GET['id'];
$number = $_GET['number'];
session_start();
$isSame = strcmp($_SESSION['userid'], $usrid);
$URL = "./qna.php";
if (!isset($_SESSION['userid']) || $isSame) { ?>
   <script>
      alert("권한이 없습니다.");
      location.replace("<?php echo $URL ?>");
   </script>
<?php } else if (!$isSame) {
   $db->query("DELETE from board where post_number= $number");
?>
   <script>
      alert("삭제되었습니다.");
      location.replace("<?php echo $URL ?>");
   </script>
<?php } ?>