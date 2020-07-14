
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