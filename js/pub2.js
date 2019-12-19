$(document).ready(function() {
    $("#keyword").keyup(function() {
        var k = $(this).val();
        $("#contents > div > span").hide();
        var temp = $("#contents > div > span > p:contains('" + k + "')");

        $(temp).parent().show();
    })
})
