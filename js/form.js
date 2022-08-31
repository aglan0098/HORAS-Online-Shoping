// ================================== FORM VALIDATION =================================
var userName = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var subject = document.getElementById("subject");

var submit = document.getElementById("submit");

// ----------------- Alerts -------------------
var nameAlert = document.getElementById("nameAlert");
var emailAlert = document.getElementById("emailAlert");
var phoneAlert = document.getElementById("phoneAlert");
var subjectAlert = document.getElementById("subjectAlert");


// ============================= Name ========================
userName.addEventListener("blur", function(e)
{
  if(e.target.value == "")
      nameAlert.innerHTML = "Enter Your Name";
  else
      nameAlert.innerHTML = "";
})

// =========================== Email ======================
let emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

email.addEventListener("blur", function (e) {
    if(!emailReg.test(e.target.value))
        emailAlert.innerHTML = "Enter Valid Email";
    else
        emailAlert.innerHTML = "";
  });

// ========================== Phone =======================
phone.addEventListener("blur", function (e)
{
  var phoneReg = /(^010?1?2?)[0-9]{8}$/;
  if(!phoneReg.test(e.target.value))
      phoneAlert.innerHTML = "Must be 11 Chars";
  else
      phoneAlert.innerHTML = "";
});

// ========================== Phone =======================
subject.addEventListener("blur", function (e)
{
    if(e.target.value == "")
        subjectAlert.innerHTML = "Please Enter Your Message";
    else
        subjectAlert.innerHTML = "";
});


// ============================ Submit ========================
submit.addEventListener("click", function(e){
    e.preventDefault();
})

