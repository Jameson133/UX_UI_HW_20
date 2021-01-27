console.log("Your index.js file is loaded correctly!");

// $(".navList").on("hover", function(){
//     console.log("You clicked on my logo!");
// })
// $(".navList").hover(function(){
//     $(".navList").toggleClass(".navHover");
// });

$("#aboutmenav").hover(function(){
$(this).addClass("navHover");},
function() {
    $(this).removeClass("navHover");
});
$("#myskillsnav").hover(function(){
    $(this).addClass("navHover");},
    function() {
    $(this).removeClass("navHover");
});
$("#myworknav").hover(function(){
    $(this).addClass("navHover");},
    function() {
        $(this).removeClass("navHover");
});
$("#resumenav").hover(function(){
    $(this).addClass("navHover");},
    function() {
        $(this).removeClass("navHover");
});
$("#logonav").hover(function(){
    $(this).addClass("logoHover");},
    function() {
        $(this).removeClass("logoHover");
});