var divs = new Array();
divs[0] = "** Please fill this field or it not vaild";
divs[1] = "** only characters are allowed";
divs[2] = "** Please fill the email field";
divs[3] = "** @ Invalid Position";
divs[4] = "** . Invalid Position";
divs[5] = "** Please fill the mobile Number field";
divs[6] = "** user must write digits only not characters";
divs[7] = "** Mobile Number must be 11 digits only";
divs[8] = "** Please fill the password field";
divs[9] = "Strong Password";
divs[10]= "Poor Password it must have 7 to 15 characters which contain at least one numeric digit and a special character";
divs[11]=" ** Password does not match the confirm password";
var divPass = new Array();
var finalCheck=new Array();
function UploadPic(){
$("#profileImage").click(function (e) {
    $("#imageUpload").click();
});
function fasterPreview(uploader) {
    if (uploader.files && uploader.files[0]) {
          $('#profileImage').attr('src', window.URL.createObjectURL(uploader.files[0]));
    }
}
$("#imageUpload").change(function () {
    fasterPreview(this);
});
	}
function validationFname() {
	var Fuser = document.getElementById('Fname').value;
	var regName = /^[A-Za-z]+$/;
	if (Fuser == "" ||Fuser.length<2){
						document.getElementById('errFname').style.display="block";

				document.getElementById('errFname').innerHTML =divs[0];
			return false;
	} else if (!Fuser.match(regName)){
		document.getElementById('errFname').style.display="block";
				document.getElementById('errFname').innerHTML =divs[1];
				return false;
			}
	else{
		finalCheck[0]="ok";
				document.getElementById('errFname').style.display="none";
		return true;
	}
}
function validationLname() {
	var Luser = document.getElementById('Lname').value;
	var regName = /^[A-Za-z]+$/;
	if(Luser == "" ||Luser.length<2){
						document.getElementById('errLname').style.display="block";

				document.getElementById('errLname').innerHTML =divs[0];
			return false;
	}else if(!Luser.match(regName)){
		document.getElementById('errLname').style.display="block";
				document.getElementById('errLname').innerHTML =divs[1];
				return false;
			}
	else{
		finalCheck[1]="ok";
				document.getElementById('errLname').style.display="none";
		return true;
	}
}
function validationEmail() {
	var emails = document.getElementById('Email').value;
	
			if(emails == ""){
								document.getElementById('errEmail').style.display="block";

				document.getElementById('errEmail').innerHTML =divs[2];
				return false;
			}
		else if(emails.indexOf('@') <= 0 ){
							document.getElementById('errEmail').style.display="block";

				document.getElementById('errEmail').innerHTML =divs[3];
				return false;
			}

			else if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
				document.getElementById('errEmail').style.display="block";
				document.getElementById('errEmail').innerHTML =divs[4];
				return false;
			}else{finalCheck[2]="ok";
				  return true;
				document.getElementById('errEmail').style.display="none";}
}
function validationPhone() {
	var phone= document.getElementById('Phone').value;
	if(phone == ""){
		document.getElementById('errPhone').style.display="block"
		document.getElementById('errPhone').innerHTML =divs[5];
		return false;
		}
	else if(isNaN(phone)){
		document.getElementById('errPhone').style.display="block"
		document.getElementById('errPhone').innerHTML =divs[6];
		return false;
		}
	else if(phone.length!=11){
		document.getElementById('errPhone').style.display="block"
		document.getElementById('errPhone').innerHTML =divs[7];
		return false;
		}
	else{document.getElementById('errPhone').style.display="none";
		 return true;
		}
}
function ValidationPass()  {
	var pass = document.getElementById('Password').value;
	var paswd= /^(?=.*[0-9])(?=.*[!@#$%^&*_+/-])[a-zA-Z0-9!@#$%^&*_+/-]{7,15}$/;
	divPass[0]=pass;
	if(pass == ""){
		document.getElementById('errPassword').style.display="block"
		document.getElementById('errPassword').style.color="red";
		document.getElementById('errPassword').innerHTML =divs[8];
		return false;
			}
	else if(!pass.match(paswd)) {
		document.getElementById('errPassword').style.color="red";
		document.getElementById('errPassword').innerHTML =divs[10];
		
		return false;	
			}
	else{document.getElementById('errPassword').style.display="block";
		document.getElementById("errPassword").style.color = "green";
		document.getElementById('errPassword').innerHTML =divs[9];
		 return true;
		finalCheck[4]="ok";}
}
function ValidationRePass() {
	var Repass = document.getElementById('RePassword').value;
	divPass[1]=Repass;
	if(Repass == ""){
		document.getElementById('errRePassword').style.display="block"
		document.getElementById('errRePassword').innerHTML =divs[8];
		return false;
			}
		else if(divPass[1]!=divPass[0]){
			document.getElementById('errRePassword').style.display="block"
		document.getElementById('errRePassword').innerHTML =divs[11];
		return false;
			} 
	else{document.getElementById('errRePassword').style.display="none";
		 return true;
		finalCheck[5]="ok";}
}
function ValidationAdress() {
	var addrees = document.getElementById('Address').value;
	var regaddrees = /^[a-zA-Z0-9]+$/;
	var number=/^[0-9]/;
	if (!isNaN(addrees) ||!addrees.match(regaddrees)){
						document.getElementById('errAddress').style.display="block";

				document.getElementById('errAddress').innerHTML =divs[0];
			return false;
	}
	else{finalCheck[6]="ok";
				document.getElementById('errAddress').style.display="none";
		 return true;
	}
}
function ValidationCity() {
	var city = document.getElementById('City').value;
	var regcity = /^[a-zA-Z0-9]+$/;
	if (!isNaN(city) ||!city.match(regcity)){
			document.getElementById('errCity').style.display="block";
            document.getElementById('errCity').innerHTML =divs[0];
			return false;
	}
	else{document.getElementById('errCity').style.display="none";
		 return true;
	}
}
function ValidationUniversity() {
	var University = document.getElementById('University').value;
	var regUniversity = /^[a-zA-Z0-9]+$/;
	if (!isNaN(University)||!University.match(regUniversity)){
			document.getElementById('errUniversity').style.display="block";
            document.getElementById('errUniversity').innerHTML =divs[0];
			return false;
	}
	else{document.getElementById('errUniversity').style.display="none";
		 return true;
	}
}
function Validationspecialty(){
	var specialty = document.getElementById('specialty').value;
	var regspecialty = /^[a-zA-Z0-9]+$/;
	if (!isNaN(specialty)||!specialty.match(regspecialty)){
			document.getElementById('errspecialty').style.display="block";
            document.getElementById('errspecialty').innerHTML =divs[0];
			return false;
	}
	else{document.getElementById('errspecialty').style.display="none";
		 return true;
	}
}
function ValidationUniversity() {
	var University = document.getElementById('Universityinst').value;
	var regUniversity = /^[a-zA-Z0-9]+$/;
	if (!isNaN(University)||!University.match(regUniversity)){
			document.getElementById('errUniversityinst').style.display="block";
            document.getElementById('errUniversityinst').innerHTML =divs[0];
			return false;
	}
	else{document.getElementById('errUniversityinst').style.display="none";
		 return true;
	}
}
function Validationspecialtyinst(){
	var specialty = document.getElementById('specialtyinst').value;
	var regspecialty = /^[a-zA-Z0-9]+$/;
	if (!isNaN(specialty)||!specialty.match(regspecialty)){
			document.getElementById('errspecialtyinst').style.display="block";
            document.getElementById('errspecialtyinst').innerHTML =divs[0];
			return false;
	}
	else{document.getElementById('errspecialtyinst').style.display="none";
		 return true;
	}
}
function showHide(){
   hideAll();
  var val = document.getElementById("dropdown").value;

  if(val == "instructor")
   document.getElementById("instructorInfo").style.display = 'block';
  else if(val == "student")
   document.getElementById("studentInfo").style.display = 'block';
 }
function hideAll(){
      document.getElementById("studentInfo").style.display = 'none';
      document.getElementById("instructorInfo").style.display = 'none';
      }

function ValidationFinal(){
	
		
			 document.getElementById("Register").disabled = true;
		
	}








