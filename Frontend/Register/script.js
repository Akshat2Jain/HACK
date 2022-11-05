// adhaar card valiadation

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

// send form data using ajax calls

$("#submitBtn").click(function(){
    // get input field

    const name=$("#name").val();
    const address=$("#address").val();
    const camera=$("#on").val();
    const adhaar=$("#Aadhar").val();

    // making ajax call after this is accepted

    $.post("http://localhost:300/register",{
        name:name,
        location:address,
        permission:camera,
        adharcard:adhaar
    },function(data){
        localStorage.setItem("UserName",data.data.name);
        window.location.href = data.data.targetlink;
      },
)
})