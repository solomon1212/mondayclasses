// When scrolling the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the menubar
var menubar = document.getElementById("menubar");

// Get the offset position of the menubar
var sticky = menubar.offsetTop;

// Add the sticky class to the menubar when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    menubar.classList.add("sticky")
  } else {
    menubar.classList.remove("sticky");
  }
}