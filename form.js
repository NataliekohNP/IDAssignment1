function validateForm() {
    var x = document.forms["form"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    var a = document.forms["form"]["email"].value;
    if (a == "") {
      alert("Email must be filled out");
      return false;
    }
    var y = document.forms["form"]["cardname"].value;
    if (y == "") {
      alert("Credit card name must be filled out");
      return false;
    }
    var v = document.forms["form"]["cardnumber"].value;
    if (v == "") {
      alert("Credit card name must be filled out");
      return false;
    }
  }