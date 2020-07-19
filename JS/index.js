
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.getElementById("welcome").style.fontStyle = "Boulder";
document.getElementById("w-message").style.fontSize = "19px";
document.getElementById("w-message").style.color = "yellow";