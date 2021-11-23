
function validateForm() {
    var sucess= true;
    var x = document.forms["form"]["name"].value;
    if (x == "" || x == null ) {
      alert("Name must be filled out");
      sucess = false;
    }
    var a = document.forms["form"]["email"].value;
    if (a == "" || a == null) {
      alert("Email must be filled out");
      sucess = false;
    }
    var y = document.forms["form"]["cardname"].value;
    if (y == "" || y == null) {
      alert("Credit card name must be filled out");
      sucess = false;
    }
    var v = document.forms["form"]["cardnumber"].value;
    if (v == "" || v == null) {
      alert("Credit card name must be filled out");
      sucess = false;
    }
    if (sucess == true) {
        alert("Your Ticket is booked! go to your email, tickets are noted there");
    }
  }