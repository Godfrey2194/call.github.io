
   
   
   
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



function myFunction() {
  var y = document.getElementById("mail");
  if (y.className === "mail") {
    y.className += " alert";
  } else {
    y.className = "mail"
  }
  alert("You are about to send a direct email to Godfrey! Click 'OK' to continue");
}
