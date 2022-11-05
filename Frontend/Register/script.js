function AadharValidate() {
    var aadhar = document.getElementById("txtAadhar").value;
    var adharcardTwelveDigit = /^\d{12}$/;
    var adharSixteenDigit = /^\d{16}$/;
    if (aadhar != '') {
      if (aadhar.match(adharcardTwelveDigit)) {
        return true;
      }
      else if (aadhar.match(adharSixteenDigit)) {
        return true;
      }
      else {
        alert("Enter valid Aadhar Number");
        return false;
      }
    }
  }