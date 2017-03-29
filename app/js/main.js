

$(document).ready(function() {




var init = $(".text-letter").length;
var swap = ["l","y","i","n","g"]



// setTimeout(function(){$(".text-letter").eq(3).css("color","#cc0000");}, 500);
// setTimeout(function(){$(".text-letter").eq(3).css("color","#cc0000");}, 700);
// setTimeout(function(){$(".text-letter").eq(1).css("color","#cc0000");}, 1000);
// setTimeout(function(){$(".text-letter").eq(4).css("color","#cc0000");}, 1200);


setTimeout(function(){
  $(".text-letter").eq(0).fadeOut(500, function() {
      $(".text-letter").eq(0).html(swap[0]);
      $(".text-letter").eq(0).css("color","#cc0000");
      $(".text-letter").eq(0).fadeIn(500);
  });
;}, 900);
setTimeout(function(){
$(".text-letter").eq(1).fadeOut(500, function() {
    $(".text-letter").eq(1).html(swap[1]);
    $(".text-letter").eq(1).css("color","#cc0000");
    $(".text-letter").eq(1).fadeIn(500);
});
;}, 100);
setTimeout(function(){
$(".text-letter").eq(2).fadeOut(500, function() {
    $(".text-letter").eq(2).html(swap[2]);
    $(".text-letter").eq(2).css("color","#cc0000");
    $(".text-letter").eq(2).fadeIn(500);
});
;}, 500);
setTimeout(function(){
$(".text-letter").eq(3).fadeOut(500, function() {
    $(".text-letter").eq(3).html(swap[3]);
    $(".text-letter").eq(3).css("color","#cc0000");
    $(".text-letter").eq(3).fadeIn(500);
});
;}, 300);
setTimeout(function(){
$(".text-letter").eq(4).fadeOut(500, function() {
    $(".text-letter").eq(4).html(swap[4]);
    $(".text-letter").eq(4).css("color","#cc0000");
    $(".text-letter").eq(4).fadeIn(500);
});
;}, 800);
setTimeout(function(){
$(".text-letter").eq(5).fadeOut(500, function() {
    $(".text-letter").eq(5).html(swap[5]);
    $(".text-letter").eq(5).css("color","#cc0000");
    $(".text-letter").eq(5).fadeIn(500);
});
;}, 700);





$('#myTable').DataTable({
    scrollY: '50vh',
    scrollCollapse: true,
    paging: false,
    rowReorder: {
        selector: 'td:nth-child(2)'
    },
    responsive: true,
    "autoWidth": false
});



});
