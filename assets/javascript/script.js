// contact form

function validate() {
  var name = document.getElementById("entername").value;
  var email = document.getElementById("enteremail").value;
  var phone = document.getElementById("enterphone").value;
  var msg = document.getElementById("message").value;
  var date = document.getElementById("enterdate").value;

  if (name == "") {
    alert("Enter the name");
    return false;
  }
  if (name.length <= 2 || name.length > 10) {
    alert("Name is Invalid");
    return false;
  }

  if (email == "") {
    alert("Enter the email");
    return false;
  }

  if (phone == "") {
    alert("Please enter the phone number");
    return false;
  }

  if (phone.length != 10) {
    alert("Phone number should be 10 digi");
    return false;
  }

  if (msg == "") {
    alert("Please enter some message");
    return false;
  }

  if (date == "") {
    alert("enter date");
    return false;
  }
}
