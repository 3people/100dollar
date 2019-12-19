<?php
date_default_timezone_set('Asia/Seoul');
session_start();
$db = new PDO("mysql:dbname=qna;host:localhost", "lsm", "333");

$id = $_POST['id'];
$pw = $_POST['pw'];
$rows = $db->query("SELECT * from member where id = '$id' ");
foreach ($rows as $row) {
   if (!strcmp($row['id'], $id)) {
      if (!strcmp($row['pw'], $pw)) {
         $_SESSION['userid'] = $id;
         if (isset($_SESSION['userid'])) { ?>
            <script>
               alert("로그인 되었습니다.");
               location.replace("./qna.php");
            </script>
         <?php } else {
            echo "session fail";
         }
      } else { ?>
         <script>
            alert("아이디 혹은 비밀번호가 잘못되었습니다");
            history.back();
         </script>
      <?php }
   } else { ?>
      <script>
         alert("아이디 혹은 비밀번호가 잘못되었습니다");
         history.back();
      </script>
      }
<?php }
}
?>
<script>
   alert("아이디 혹은 비밀번호가 잘못되었습니다");
   history.back();
</script>