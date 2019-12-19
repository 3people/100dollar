<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="stylesheet" href="css/qna.css" />
   <link rel="shortcut icon" href="img/favicon.png" />
   <title>SE LAB</title>
</head>

<body>
   <div id="header">
      <div id="navi">
         <h1>
            <a href="new.html"><img src="img/logo.png" id="logo" /></a>
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

   <?php
   session_start();
   $URL = "./login.html";
   if (!isset($_SESSION['userid'])) { ?>
      <script>
         alert("로그인이 필요합니다");
         location.replace("<?php echo $URL ?>");
      </script>
   <?php } ?>
   <div id="qna_content">
      <div id="qna_text" class="wow fadeInUp">
         Q&A
      </div>
      <div id="board">
         <form method="POST" action="write_form.php">
            <table id="qna_table">
               <thead>
                  <tr>
                     <td colspan="2">
                        Posting
                     </td>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Name</td>
                     <td><input type="hidden" name="name" value="<?= $_SESSION['userid'] ?>"><?= $_SESSION['userid'] ?></td>
                  </tr>
                  <tr>
                     <td>Title</td>
                     <td><input type=text name=title size=60></td>
                  </tr>
                  <tr>
                     <td>Content</td>
                     <td><textarea name=content cols=85 rows=15></textarea></td>
                  </tr>
               </tbody>
            </table>
            <div>
               <input class="table-button" type="submit" value="submit">
            </div>
         </form>
      </div>
   </div>
</body>

</html>