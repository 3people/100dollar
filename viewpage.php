<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="stylesheet" href="css/qna.css" />
   <title>Document</title>
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
   $db = new PDO("mysql:dbname=qna;host:localhost", "lsm", "333");
   $number = $_GET['page'];
   $db->query("UPDATE board set views=views+1 where post_number=$number");
   $rows = $db->query("SELECT title, content, date, id, views from board where post_number = $number");
   ?>
   <div id="qna_content">
      <div id="qna_text" class="wow fadeInUp">
         Q&A
      </div>
      <div id="board">
         <table id="qna_table">
            <?php
            foreach ($rows as $row) { ?>
               <thead>
                  <tr>
                     <td colspan="4" id="viewpage-title"> <?php echo $row['title'] ?> </td>
                  </tr>
                  <tr>
                     <td>Name</td>
                     <td><?php echo $row['id'] ?></td>
                     <td>Views</td>
                     <td><?php echo $row['views'] ?></td>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td colspan="4" class="view-content">
                        <?php echo $row['content'] ?></td>
                  </tr>
               </tbody>
            <?php } ?>
         </table>
         <div>
            <button class="table-button" onclick="location.href='qna.php'">menu</button>
            <button class="table-button" onclick="location.href='modify.php?number=<?= $number ?>&id=<?= $_SESSION['userid'] ?>'"> modify </button>
            <button class="table-button" onclick="location.href='delete.php?number=<?= $number ?>&id=<?= $_SESSION['userid'] ?>'"> delete </button>
         </div>
      </div>
   </div>
</body>

</html>