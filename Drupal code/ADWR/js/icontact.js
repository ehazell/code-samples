var icpForm265 = document.getElementById('icpsignup265');

if (document.location.protocol === "https:")

  icpForm265.action = "https://app.icontact.com/icp/signup.php";

function verifyRequired265() {
  if (icpForm265["fields_email"].value == "") {
    icpForm265["fields_email"].focus();
    alert("The Email field is required.");
    return false;
  }

  if (icpForm265["fields_email"].value && icpForm265["fields_email"].value !== "") {
    icpForm265["fields_email"].value = icpForm265["fields_email"].value.trim();
  }



  return true;
}

function validDate265(value) {

  if (value == "") {
    return true;
  }

  var dateSections = value.split('/');
  if (dateSections.length != 3) {
    return false;
  }

  var month = dateSections[0];
  if (month && (month.length > 2 || month < 1 || month > 12)) {
    return false;
  }

  var day = dateSections[1];
  if (day && (day.length > 2 || day < 1 || day > 31)) {
    return false;
  }

  var year = dateSections[2];
  if (!year || (year && year.length != 4)) {
    return false;
  }

  var dateValue = new Date(value);
  if (month != (dateValue.getMonth()+1) || day != dateValue.getDate() || year != dateValue.getFullYear()) {
    return false;
  }

  return true;
}