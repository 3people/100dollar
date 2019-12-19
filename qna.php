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
      <div id="qna_text" class="wow fadeInUp">
         Q&A
      </div>
      <?php
      date_default_timezone_set('Asia/Seoul');
      $db = new PDO("mysql:dbname=qna;host:localhost", "lsm", "333");
      $rows = $db->query("SELECT * from board order by post_number desc;");
      $total = mysqli_num_rows($result);
      session_start(); ?>
      <div id="board" class="wow fadeInUp" data-wow-delay="0.5s">
         <div class=text>
            <button class="table-button" onclick=" location.href='write.php'">글쓰기</button>
         </div>
         <table id="qna_table">
            <thead>
               <tr>
                  <th>No</th>
                  <th>Title</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Views</th>
               </tr>
            </thead>
            <tbody>
               <?php
               foreach ($rows as $row) { ?>
                  <tr>
                     <td><?= $row['post_number'] ?></td>
                     <td>
                        <a href=" viewpage.php?page=<?= $row['post_number'] ?>&id=<?= $_SESSION['userid'] ?> ">
                           <?= $row['title'] ?></a>
                     </td>
                     <td><?= $row['id'] ?></td>
                     <td><?= $row['date'] ?></td>
                     <td><?= $row['views'] ?></td>
                  </tr>
               <?php
                  $total--;
               }
               ?>
            <tbody>
         </table>
         <?php
         if (isset($_SESSION['userid'])) { ?>
            <button class="table-button" onclick="location.href = 'logout.php'">Logout</button>
         <?php } else { ?>
            <button class="table-button" onclick="location.href='login.html'">Login</button>
         <?php } ?>
      </div>
   </div>
</body>

</html>