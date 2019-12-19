create table board
(
   post_number int
   unsigned not null primary key auto_increment,
   title varchar
   (150) not null,
   content text not null,
   id varchar
   (20) not null,
   date date not null,
   views int unsigned not null default 0
   );

   create table comment
   (
      comment_number int
      unsigned not null primary key auto_increment,
      board_number int unsigned not null,
      id varchar
      (20) not null,
      content text not null,
      date datetime not null,
      parent_number int unsigned not null default 0
   );

      create table member
      (
         id varchar(20) not null,
         pw varchar(20) not null,
         date datetime not null,
         authority tinyint(3)
         unsigned 
   );