//this is my function to validate the form if its empty.
function validateForm() {
  //this is to create a boolean so that i am able to check whether there is error or not.
    var sucess= true;
    //helps me to save the value and store it as a variable
    var x = document.forms["form"]["name"].value;
    //checks if the value is empty
    if (x == "" || x == null ) {
      //if the value is empty, the alert will appear to notify user where is the error
      alert("Name must be filled out");
      sucess = false;
    }
    //rest of the code is the same as the first section 
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
      alert("Credit card number must be filled out");
      sucess = false;
    }
    //----------------------------------------------------------------------------------------------
    //this is to check if there is any error in the form. if there is an error, the code immediately will not show this alert.
    //if there is no error, the code will be shown
    if (sucess == true) {
        alert("Your Ticket is booked! go to your email, tickets are noted there");
    }
  }