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
divs[10] = "Poor Password it must have 7 to 15 characters which contain at least one numeric digit and a special character";
divs[11] = " ** Password does not match";
var divPass = new Array();
var firebaseConfig = {
    apiKey: "AIzaSyD0tMq6ZWGaJcG4VFWcmETbTxO7IOdDE3Q",
    authDomain: "quizzer-a0c6e.firebaseapp.com",
    databaseURL: "https://quizzer-a0c6e.firebaseio.com",
    projectId: "quizzer-a0c6e",
    storageBucket: "quizzer-a0c6e.appspot.com",
    messagingSenderId: "235551414761",
    appId: "1:235551414761:web:cb2e8ef047394bf666d378",
    measurementId: "G-GBG3VNHGE6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function validationFname() {
    var Fuser = document.getElementById('Fname').value;
    var regName = /^[A-Za-z]+$/;
    if (Fuser == "" || Fuser.length < 2) {
        document.getElementById('errFname').style.display = "block";

        document.getElementById('errFname').innerHTML = divs[0];
        return false;
    } else if (!Fuser.match(regName)) {
        document.getElementById('errFname').style.display = "block";
        document.getElementById('errFname').innerHTML = divs[1];
        return false;
    } else {
        document.getElementById('errFname').style.display = "none";
        return true;
    }
}

function validationLname() {
    var Luser = document.getElementById('Lname').value;
    var regName = /^[A-Za-z]+$/;
    if (Luser == "" || Luser.length < 2) {
        document.getElementById('errLname').style.display = "block";
        document.getElementById('errLname').innerHTML = divs[0];
        return false;
    } else if (!Luser.match(regName)) {
        document.getElementById('errLname').style.display = "block";
        document.getElementById('errLname').innerHTML = divs[1];
        return false;
    } else {
        document.getElementById('errLname').style.display = "none";
        return true;
    }
}

function validationEmail() {
    var emails = document.getElementById('Email').value;

    if (emails == "") {
        document.getElementById('errEmail').style.display = "block";
        document.getElementById('errEmail').innerHTML = divs[2];
        return false;
    } else if (emails.indexOf('@') <= 0) {
        document.getElementById('errEmail').style.display = "block";
        document.getElementById('errEmail').innerHTML = divs[3];
        return false;
    } else if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
        document.getElementById('errEmail').style.display = "block";
        document.getElementById('errEmail').innerHTML = divs[4];
        return false;
    } else {
        document.getElementById('errEmail').style.display = "none";
        return true;
    }
}

function validationPhone() {
    var phone = document.getElementById('Phone').value;
    if (phone == "") {
        document.getElementById('errPhone').style.display = "block"
        document.getElementById('errPhone').innerHTML = divs[5];
        return false;
    } else if (isNaN(phone)) {
        document.getElementById('errPhone').style.display = "block"
        document.getElementById('errPhone').innerHTML = divs[6];
        return false;
    } else if (phone.length != 11) {
        document.getElementById('errPhone').style.display = "block"
        document.getElementById('errPhone').innerHTML = divs[7];
        return false;
    } else {
        document.getElementById('errPhone').style.display = "none";
        return true;
    }
}

function ValidationPass() {
    var pass = document.getElementById('Password').value;
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%.^&*_+/-])[a-zA-Z0-9!@#$%^.&*_+/-]{7,15}$/;
    divPass[0] = pass;
    ValidationRePass();
    if (pass == "") {
        document.getElementById('errPassword').style.display = "block"
        document.getElementById('errPassword').style.color = "red";
        document.getElementById('errPassword').innerHTML = divs[8];
        return false;
    } else if (!pass.match(paswd)) {
        document.getElementById('errPassword').style.display = "block";
        document.getElementById('errPassword').style.color = "red";
        document.getElementById('errPassword').innerHTML = divs[10];

        return false;
    } else {
        document.getElementById('errPassword').style.display = "block";
        document.getElementById("errPassword").style.color = "green";
        document.getElementById('errPassword').innerHTML = divs[9];
        return true;
    }
}

function ValidationRePass() {
    var Repass = document.getElementById('RePassword').value;
    divPass[1] = Repass;
    if (Repass == "") {
        document.getElementById('errRePassword').style.display = "block"
        document.getElementById('errRePassword').innerHTML = divs[8];
        return false;
    } else if (divPass[1] !== divPass[0]) {
        document.getElementById('errRePassword').style.display = "block"
        document.getElementById('errRePassword').innerHTML = divs[11];
        return false;
    } else {
        document.getElementById('errRePassword').style.display = "none";
        return true;
    }
}

function ValidationAdress() {
    var addrees = document.getElementById('Address').value;
    var regaddrees = /^[a-zA-Z0-9]+$/;
    var number = /^[0-9]/;
    if (!isNaN(addrees) || !addrees.match(regaddrees)) {
        document.getElementById('errAddress').style.display = "block";

        document.getElementById('errAddress').innerHTML = divs[0];
        return false;
    } else {;
        document.getElementById('errAddress').style.display = "none";
        return true;
    }
}

function ValidationCity() {
    var city = document.getElementById('City').value;
    var regcity = /^[a-zA-Z0-9]+$/;
    if (!isNaN(city) || !city.match(regcity)) {
        document.getElementById('errCity').style.display = "block";
        document.getElementById('errCity').innerHTML = divs[0];
        return false;
    } else {
        document.getElementById('errCity').style.display = "none";
        return true;
    }
}

function ValidationUniversity() {
    var University = document.getElementById('University').value;
    var regUniversity = /^[a-zA-Z0-9]+$/;
    if (!isNaN(University) || !University.match(regUniversity)) {
        document.getElementById('errUniversity').style.display = "block";
        document.getElementById('errUniversity').innerHTML = divs[0];
        return false;
    } else {
        document.getElementById('errUniversity').style.display = "none";
        return true;
    }
}

function ValidationSpecialty() { //
    var specialty = document.getElementById('Specialty').value; //
    var regspecialty = /^[a-zA-Z0-9]+$/;
    if (!isNaN(specialty) || !specialty.match(regspecialty)) {
        document.getElementById('errSpecialty').style.display = "block"; //
        document.getElementById('errSpecialty').innerHTML = divs[0]; //
        return false;
    } else {
        document.getElementById('errSpecialty').style.display = "none"; //
        return true;
    }
}

function ValidationUniversityinst() {
    var University = document.getElementById('Universityinst').value;
    var regUniversity = /^[a-zA-Z0-9]+$/;
    if (!isNaN(University) || !University.match(regUniversity)) {
        document.getElementById('errUniversityinst').style.display = "block";
        document.getElementById('errUniversityinst').innerHTML = divs[0];
        return false;
    } else {
        document.getElementById('errUniversityinst').style.display = "none";
        return true;
    }
}

function ValidationSpecialtyinst() { //
    var specialty = document.getElementById('Specialtyinst').value; //
    var regspecialty = /^[a-zA-Z0-9]+$/;
    if (!isNaN(specialty) || !specialty.match(regspecialty)) {
        document.getElementById('errSpecialtyinst').style.display = "block"; //
        document.getElementById('errSpecialtyinst').innerHTML = divs[0]; //
        return false;
    } else {
        document.getElementById('errSpecialtyinst').style.display = "none"; //
        return true;
    }
}

function showHide() {
    hideAll();
    var val = document.getElementById("dropdown").value;

    if (val == "instructor") {
        document.getElementById("instructorInfo").style.display = 'block';
        document.getElementById('University').value = "";
        document.getElementById('Specialty').value = "";
    } else if (val == "student") {
        document.getElementById("studentInfo").style.display = 'block';
        document.getElementById('Universityinst').value = "";
        document.getElementById('Specialtyinst').value = "";
    }
}

function degree() {
    var deg = document.getElementById("degree level").value;
    if (deg == "") {
        return false;
    } else return true;
}

function exprienc() {
    var exp = document.getElementById("exprienc").value;
    if (exp == "") {
        return false;
    } else return true;
}

function hideAll() {
    document.getElementById("studentInfo").style.display = 'none';
    document.getElementById("instructorInfo").style.display = 'none';
}

function ValidationFinal() {
    if ((validationFname() && validationLname() && validationEmail() && validationPhone() &&
            ValidationPass() && ValidationRePass() && ValidationAdress() && ValidationCity()) &&
        ((ValidationUniversity() && ValidationSpecialty()) ||
            (ValidationUniversityinst() && ValidationSpecialtyinst() && degree() && exprienc()))
    ) {
        var firestore = firebase.firestore();
        var email = document.getElementById('Email').value;
        var password = document.getElementById('Password').value;
        let userUID;
        firebase.auth().signOut().then(function() {
            console.log(" Sign-out successful");
        }).catch(function(error) {
            console.log(error);
        });

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            console.log(error.code);
            console.log(error.message);
            // ...
        });

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log(firebase.auth().currentUser.uid);
                userUID = firebase.auth().currentUser.uid;
                const docRef = firestore.collection("User").doc(userUID);
                var states = document.getElementById("dropdown").value;
                if (states == "instructor") {
                    docRef.set({
                        firstname: document.getElementById('Fname').value,
                        lastName: document.getElementById('Lname').value,
                        phone: document.getElementById('Phone').value,
                        addrees: document.getElementById('Address').value,
                        city: document.getElementById('City').value,
                        state: states,
                        university: document.getElementById('Universityinst').value,
                        specialty: document.getElementById('Specialtyinst').value,
                        degree: document.getElementById("degree level").value,
                        exprienc: document.getElementById("exprienc").value
                    });
                } else {
                    docRef.set({
                        firstname: document.getElementById('Fname').value,
                        lastName: document.getElementById('Lname').value,
                        phone: document.getElementById('Phone').value,
                        addrees: document.getElementById('Address').value,
                        city: document.getElementById('City').value,
                        state: states,
                        university: document.getElementById('University').value,
                        specialty: document.getElementById('Specialty').value,
                    });
                }

            } else {
                console.log("no user is here");
            }
        });
        document.getElementById('sbmuterr').innerHTML = "all good";
        //   window.location.href = "../html-page/profile.html";
    } else {
        document.getElementById('sbmuterr').innerHTML = "some fild is missing";
    }
}