function Error1(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("error")[0].innerHTML = error;
}
function clearScreen(){
    errors=document.getElementsByClassName("error");
    for(let every_error of errors){
        every_error.innerHTML=""
    }
}
function validation() {
    clearScreen()
  // var returnval =true
  returnvalue = true;
  // Checking name
  var name1 = document.forms[0].name.value;
  if (name1.match(/^[A-Z a-z]+$/)) {
    console.log("All good");
  } else {
    Error1("name", "*There should not be any number in the name");

    returnvalue = false;
  }
  // Checking if two passwords are same or not
  var passw = document.forms[0].password.value;
  var Cpassw = document.forms[0].Cpassword.value;
  if (passw != Cpassw) {
    Error1("Cpassword", "*The passwords do not match");
  } else {
    console.log("All good");
  }

  //    Checking if the contact number written is a valid one or not
  var tele = document.forms[0].TeleNumber.value;
  if (tele.length != 10 || !tele.match(/^[0-9]+$/)) {
    Error1("TeleNumber", "*The contact number entered is invalid");
  } else {
    console.log("All good 3");
  }

  return false;
}
