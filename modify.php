<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <meta http-equiv="X-UA-Compatible" content="ie=edge" />
   <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
   <link rel="stylesheet" href="css/qna.css" />
   <link rel="stylesheet" href="css/animate.css" />
   <link rel="shortcut icon" href="img/favicon.png" />
   <script src="js/wow.min.js"></script>
   <script>
      new WOW().init();
   </script>
   <title>SE LAB</title>
</head>

<body>
   <div id="header">
      <div id="navi">
         <h1>
            <a href="new.html"><img src="img/logo2.png" id="logo" /></a>
         </h1>
         <ul id="navi-center">
            <li><a href="aboutme2-2.html">ABOUT</a></li>
            <li><a href="members.html">MEMBERS</a></li>
            <li><a href="publication.html">PUBLICATION</a></li>
            <li><a href="courses.html">COURSE</a></li>
            <li><a href="qna.php">Q&A</a></li>
         </ul>
      </div>
   </div>

   <div id="qna_content">
      <div id="qna_text">
         Q&A
      </div>
      <?php
      $db = new PDO("mysql:dbname=qna;host:localhost", "lsm", "333");
      $id = $_GET['id'];
      $number = $_GET['number'];
      $result = $db->query("SELECT title, content, date, id from board where post_number= $number");
      session_start();
      $URL = "./qna.php";
      foreach ($result as $row) {
         $title = $row['title'];
         $content = $row['content'];
         $usrid = $row['id'];
         $isSame = strcmp($_SESSION['userid'], $usrid);
         if (!isset($_SESSION['userid'])) { ?>
            <script>
               alert("권한이 없습니다.");
               location.replace("<?php echo $URL ?>");
            </script>
         <?php } else if (!$isSame) { ?>
            <div id="board">
               <form method="POST" action="modify_action.php">
                  <table id="qna_table">
                     <thead>
                        <tr>
                           <td colspan="2">
                              Modify
                           </td>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>Name</td>
                           <td><input type="hidden" name="id" value="<?= $_SESSION['userid'] ?>"><?= $_SESSION['userid'] ?></td>
                        </tr>
                        <tr>
                           <td>Title</td>
                           <td><input type=text name=title size=60 value="<?= $title ?>"></td>
                        </tr>
                        <tr>
                           <td>Content</td>
                           <td><textarea name=content cols=85 rows=15><?= $content ?></textarea></td>
                        </tr>
                        <input type="hidden" name="number" value="<?= $number ?>">
                        </td>
                        </tr>
                     </tbody>
                  </table>
                  <input class="table-button" type="submit" value="modify">
               </form>
            <?php } else { ?>
               <script>
                  alert("권한이 없습니다.");
                  location.replace("<?php echo $URL ?>");
               </script>
         <?php }
      } ?>
            </div>
   </div>
</body>

</html>