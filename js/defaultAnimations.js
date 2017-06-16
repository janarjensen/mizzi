// Keeps links in iOS in appp
(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(chref=d.href).replace(e.href,"").indexOf("#")&&(!/^[a-z\+\.\-]+:/i.test(chref)||chref.indexOf(e.protocol+"//"+e.host)===0)&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone");
(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(chref=d.href).replace(e.href,"").indexOf("#")&&(!/^[a-z\+\.\-]+:/i.test(chref)||chref.indexOf(e.protocol+"//"+e.host)===0)&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone");

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


// Slide out right scissor
$(".fa-scissors").on("click", function(){
  $(this).addClass("slideOutRight");
  $(".egg").addClass("eggTada");
});

// $(".searchBtn").click(function(){
//   alert("Druk niet op mij,  druk op ENTER");
// });
