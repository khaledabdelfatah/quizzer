var divs = new Array();
divs[0] = "** Please fill this field";
divs[1] = "** only characters are allowed";
divs[2] = "** Please fill the email field";
divs[3] = "** @ Invalid Position";
divs[4] = "** . Invalid Position";
divs[5] = "** Please fill the mobile Number field";
divs[6] = "** user must write digits only not characters";
divs[7] = "** Mobile Number must be 12 digits only";
divs[8] = "** Please fill the password field";
divs[9] = "** Passwords lenght must be between  5 and 30";
var divPass = new Array();
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
	if (Fuser == ""){
						document.getElementById('errFname').style.display="block";

				document.getElementById('errFname').innerHTML =divs[0];
			return false;
	} else if (!isNaN(Fuser)){
		document.getElementById('errFname').style.display="block";
				document.getElementById('errFname').innerHTML =divs[1];
				return false;
			}
	else{
				document.getElementById('errFname').style.display="none";
	}
}
function validationLname() {
	var Luser = document.getElementById('Lname').value;
	if(Luser == ""){
						document.getElementById('errLname').style.display="block";

				document.getElementById('errLname').innerHTML =divs[0];
			return false;
	}else if(!isNaN(Luser)){
		document.getElementById('errLname').style.display="block";
				document.getElementById('errLname').innerHTML =divs[1];
				return false;
			}
	else{
				document.getElementById('errLname').style.display="none";
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
			}else{document.getElementById('errEmail').style.display="none";}
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
	else if(phone.length!=12){
		document.getElementById('errPhone').style.display="block"
		document.getElementById('errPhone').innerHTML =divs[7];
		return false;
		}
	else{document.getElementById('errPhone').style.display="none";}
}
function ValidationPass() {
	var pass = document.getElementById('Password').value;
	divPass[0]=pass;
	if(pass == ""){
		document.getElementById('errPassword').style.display="block"
		document.getElementById('errPassword').innerHTML =divs[8];
		return false;
			}
	else if((pass.length <= 5) || (pass.length > 30)) {
		document.getElementById('errPassword').style.display="block"
		document.getElementById('errPassword').innerHTML =divs[9];
		return false;	
			}
	else{document.getElementById('errPassword').style.display="none"}
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
		document.getElementById('errRePassword').innerHTML =" ** Password does not match the confirm password";
		return false;
			} 
	else{document.getElementById('errRePassword').style.display="none"}
}