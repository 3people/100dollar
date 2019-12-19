$(document).ready(function() {
    $("#keyword").keyup(function() {
        var k = $(this).val().toLowerCase();
        $("#contents > div > span").hide();
        var temp = $("#contents > div > span > p");
        var temp2 = new Array();
        for(var i=0; i < temp.length ; i++){
          if(temp[i].innerHTML.toLowerCase().includes(k)){
            temp2.push(temp[i]);
          }
        }
        $(temp2).parent().show();
    })
})
