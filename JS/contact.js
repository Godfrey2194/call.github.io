
    function myFunction() {
      alert("Your comment has been successfully submitted. Go Back to the Homepage");
    }

    function validateForm() {
      var x = document.forms["form"]["firstname"].value;
      if (x == "") {
        alert("Name must be filled out");
        return false;
      }
    }

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
