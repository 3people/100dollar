<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Document</title>
</head>

<body>
   <?php
   date_default_timezone_set('Asia/Seoul');
   $db = new PDO("mysql:dbname=qna;host:localhost", "lsm", "333");
   $rows = $db->query("SELECT * from board order by post_number desc;");

   $id = $_POST['name'];
   $title = $_POST['title'];
   $content = $_POST['content'];
   $date = date('Y-m-d');
   $URL = './qna.php';
   $query = "INSERT into board (title, content, id, date, views) values('$title', '$content','$id', '$date',0)";
   $result = $db->exec($query);
   if ($result) { ?>
      <script>
         alert("<?= "글쓰기가 완료되었습니다." ?>");
         location.replace("<?php echo $URL ?>");
      </script>
   <?php } else {
      echo "FAIL";
   } ?>
</body>

</html>