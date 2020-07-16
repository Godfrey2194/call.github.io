/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
var y = document.getElementById("work");
y.style.color = "blue";

var z = document.getElementById("m-work");
z.style.color = "blue";

var t = document.getElementById("mywork");
t.style.color = "blue";

var c = document.getElementById("y-work");
c.style.color = "blue";

var p = document.getElementById("t-work");
p.style.color = "blue";

var a = document.getElementById("w-work");
a.style.color = "blue";

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}