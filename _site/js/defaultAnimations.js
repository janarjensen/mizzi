// set equal heights to all recepes
$(function() {
    $('.receptCard').matchHeight();
});

// toggle class of searchIcon
$("#searchIcon").click(function(){
  $(".contentNav").toggleClass("height0 heightAuto");
});

// // toggle class of searchIcon
// $(".suffice").click(function(){
//   $(this).toggleClass("fat");
//   $(".contentNav").addClass("heightAuto");
//
// });

// toggle text overpicture
$(".pageTitleElement").on("click", function(){
  $(this).toggleClass("noPageTitle");
});

// Slide out right scissor
$(".fa-scissors").on("click", function(){
  $(this).addClass("slideOutRight");
  $(".egg").addClass("eggTada");
});

// $(".searchBtn").click(function(){
//   alert("Druk niet op mij,  druk op ENTER");
// });
