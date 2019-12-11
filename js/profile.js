let quizNumber = 0;
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
var autho = firebase.auth();
var firestore = firebase.firestore();
autho.onAuthStateChanged(function (user) {
    if (user) {
        firestore.collection("User").doc(autho.getUid()).get().then(function (doc) {
            if (doc.exists) {
                const mydata = doc.data();
                if (mydata.type === "student") {
                    document.getElementById("efname").innerHTML = mydata.fname;
                    document.getElementById("elname").innerHTML = mydata.lname;
                    document.getElementById("eemail").innerHTML = mydata.email;
                    document.getElementById("eemail").innerHTML = mydata.email; /////*//*//
                    document.getElementById("ephone").innerHTML = mydata.phone;
                    document.getElementById("eaddress").innerHTML = mydata.street;
                    document.getElementById("ecity").innerHTML = mydata.city;
                }
            }
        })
    }
});
//when the user click edit
function toEdit(id) {
    var sps = ["span-first-name", "span-second-name", "span-email",
        "span-phone", "span-address", "span-degree", "span-experience",
        "span-city", "span-university", "span-specialty",
        "span-universityinst", "span-specialtyinst", "span-password"];
    document.getElementById(id).style.display = "none";
    document.getElementById("span-" + id).style.display = "table-row";
    for (i in sps) {
        if (sps[i] !== ("span-" + id)) {
            document.getElementById(sps[i]).style.display = "none";
            document.getElementById(sps[i].slice(5)).style.display = "table-row";
            clear(sps[i]);
        }
    }
}
//clear the input text 
function clear(id) {
    var child1 = document.getElementById(id).childNodes[3];
    var child11 = child1.childNodes;
    child11[1].value = "";
    child11[5].style.display = "none";
}
//change active class on the side par
function changing(id) {
    var conts = ["myTabContent", "quizzesContent", "reviewContent", "mediaContent", "newsContent"];
    document.getElementById(id).style.display = "block";
    // document.getElementById(id + "-caller").setAttribute("class", "active");
    for (i in conts) {
        if (conts[i] != id) {
            document.getElementById(conts[i]).style.display = "none";
            // document.getElementById(conts[i] + "-caller").setAttribute("class", "");
        }
    }
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
//remove photo from personal info. and nav par and replace it with a default one
function removePhoto(cls) {
    document.getElementsByClassName(cls)[0].src = "../img/profile/test.png";
    document.getElementsByClassName(cls)[1].src = "../img/profile/test.png";
}
//working when the user click save putton to save changes
function toSaveChanges(id) {
    if (id === "Fname") {
        if (validationFname()) {
            setData(id);
            document.getElementById("efname").innerHTML = document.getElementById("Fname").value;
            document.getElementById("first-name").style.display = "table-row";
            document.getElementById("span-first-name").style.display = "none";
            clear("span-first-name");
        }
    }
    else if (id === "Lname") {
        if (validationLname()) {
            setData(id);
            document.getElementById("elname").innerHTML = document.getElementById("Lname").value;
            document.getElementById("second-name").style.display = "table-row";
            document.getElementById("span-second-name").style.display = "none";
            clear("span-second-name");
        }
    }
    else if (id === "Email") {
        if (validationEmail()) {
            setData(id);
            document.getElementById("eemail").innerHTML = document.getElementById("Email").value;
            document.getElementById("email").style.display = "table-row";
            document.getElementById("span-email").style.display = "none";
            document.getElementById("eemail").setAttribute("href", document.getElementById("Email").value);
            clear("span-email");
        }
    }
    else if (id === "Phone") {
        if (validationPhone()) {
            setData(id);
            document.getElementById("ephone").innerHTML = document.getElementById("Phone").value;
            document.getElementById("phone").style.display = "table-row";
            document.getElementById("span-phone").style.display = "none";
            clear("span-phone");
        }
    }
    else if (id === "Address") {
        if (ValidationAdress()) {
            setData(id);
            document.getElementById("eaddress").innerHTML = document.getElementById("Address").value;
            document.getElementById("address").style.display = "table-row";
            document.getElementById("span-address").style.display = "none";
            clear("span-address");
        }
    }
    else if (id === "City") {
        if (ValidationCity()) {
            setData(id);
            document.getElementById("ecity").innerHTML = document.getElementById("City").value;
            document.getElementById("city").style.display = "table-row";
            document.getElementById("span-city").style.display = "none";
            clear("span-city");
        }
    }
    else if (id === "University") {
        if (ValidationUniversity()) {
            setData(id);
            document.getElementById("euniversity").innerHTML = document.getElementById("University").value;
            document.getElementById("university").style.display = "table-row";
            document.getElementById("span-university").style.display = "none";
            clear("span-university");
        }
    }
    else if (id === "Specialty") {
        if (ValidationSpecialty()) {
            setData(id);
            document.getElementById("especialty").innerHTML = document.getElementById("Specialty").value;
            document.getElementById("specialty").style.display = "table-row";
            document.getElementById("span-specialty").style.display = "none";
            clear("span-specialty");
        }
    }

    else if (id === "Password") {
        if (ValidationPass()) {
            setData(id);
            document.getElementById("password").style.display = "table-row";
            document.getElementById("span-password").style.display = "none";
            clear("span-password");
        }
    }
    else if (id === "Degree") {
        if (ValidationDegree()) {
            setData(id);
            document.getElementById("password").style.display = "table-row";
            document.getElementById("span-password").style.display = "none";
            clear("span-password");
        }
    }
}

function ValidationDegree() {
    var degree = document.getElementById('Degree').value;
    var regName = /^[A-Za-z]+$/;
    if (degree == "" || degree.length < 2) {
        document.getElementById('errDegree').style.display = "block";
        document.getElementById('errDegree').innerHTML = "** Please fill this field or it not vaild";
        return false;
    } else if (!degree.match(regName)) {
        document.getElementById('errDegree').style.display = "block";
        document.getElementById('errDegree').innerHTML = "** only characters are allowed";
        return false;
    }
    else {
        document.getElementById('errDegree').style.display = "none";
        return true;
    }
}

//under construction
function appear() {
    document.getElementsByClassName("change-remove-icons")[0].style.display = "inline-block";
    document.getElementsByClassName("change-remove-icons")[0].style.cursor = "pointer";
    document.getElementsByClassName("change-remove-icons")[1].style.display = "inline-block";
    document.getElementsByClassName("change-remove-icons")[1].style.cursor = "pointer";
}
function disappear() {
    document.getElementsByClassName("change-remove-icons")[0].style.display = "none";
    document.getElementsByClassName("change-remove-icons")[0].style.cursor = "context-menu";
    document.getElementsByClassName("change-remove-icons")[1].style.display = "none";
    document.getElementsByClassName("change-remove-icons")[1].style.cursor = "context-menu";
}

function pushQuiz() {
    var autho = firebase.auth();
    var firestore = firebase.firestore();
    var docRef = firestore.collection("User").doc(autho.getUid());
    autho.onAuthStateChanged(function (user) {
        if (user) {
            docRef.get().then(function (doc) {
                if (doc.exists) {
                    const mydata = doc.data();
                    if (mydata.type === "student") {
                       var arr = mydata.quizzes;
                       arr.push(document.getElementById("access").value);
                        docRef.update(
                            {
                                quizzes: arr
                            });
                        localStorage.setItem("access", document.getElementById("access").value);
                        window.location.href = "Exam_page.html";
                    }
                }
            })
        }
    });
}

// function validateimg(ctrl) { 
//     var fileUpload = ctrl;
//     var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(.jpg|.png|.gif)$");
//     if (regex.test(fileUpload.value.toLowerCase())) {
//         if (typeof (fileUpload.files) != "undefined") {
//             var reader = new FileReader();
//             reader.readAsDataURL(fileUpload.files[0]);
//             reader.onload = function (e) {
//                 var image = new Image();
//                 image.src = e.target.result;
//                 image.onload = function () {
//                     var height = this.height;
//                     var width = this.width;
//                     if (height < 1100 || width < 750) {
//                         alert("At least you can upload a 1100*750 photo size.");
//                         return false;
//                     }else{
//                         alert("Uploaded image has valid Height and Width.");
//                         return true;
//                     }
//                 };
//             }
//         } else {
//             alert("This browser does not support HTML5.");
//             return false;
//         }
//     } else {
//         alert("Please select a valid Image file.");
//         return false;
//     }
// }

function logOut() {
    window.location.href = "../html-page/login_form.html";
    firebase.auth().signOut().then(function () {
        console.log('Signed Out');
    }, function (error) {
        console.error('Sign Out Error', error);
    });
}


function getData() {
    var firestore = firebase.firestore();
    const docRef = firestore.collection("User").doc("do not remove");
    docRef.get().then(function (doc) {
        if (doc && doc.exists) {
            const mydata = doc.data();
            document.getElementById("efname").innerHTML = mydata.fname;
            document.getElementById("elname").innerHTML = mydata.lname;
            document.getElementById("eemail").innerHTML = mydata.email;
            document.getElementById("ephone").innerHTML = mydata.phone;
            document.getElementById("eaddress").innerHTML = mydata.street;
            document.getElementById("ecity").innerHTML = mydata.city;
            document.getElementById("euniversity").innerHTML = mydata.university;
            document.getElementById("especialty").innerHTML = mydata.specialty;

        }
    });
}

function setData(id) {
    var firestore = firebase.firestore();
    const docRef = firestore.collection("User").doc("do not remove");
    if (id === "Fname") {
        docRef.update(
            {
                fname: document.getElementById("Fname").value
            });
    }
    else if (id === "Lname") {
        docRef.update(
            {
                lname: document.getElementById("Lname").value
            });
    }
    else if (id === "Email") {
        docRef.update(
            {
                email: document.getElementById("Email").value
            });
    }
    else if (id === "Phone") {
        docRef.update(
            {
                phone: document.getElementById("Phone").value
            });
    }
    else if (id === "Specialty") {
        docRef.update(
            {
                specialty: document.getElementById("Specialty").value
            });
    }
    else if (id === "Address") {
        docRef.update(
            {
                street: document.getElementById("Address").value
            });
    }
    else if (id === "University") {
        docRef.update(
            {
                university: document.getElementById("University").value
            });
    }
    else if (id === "City") {
        docRef.update(
            {
                city: document.getElementById("City").value
            });
    }
}

function tryed() {
    var firestore = firebase.firestore();
    const docRef = firestore.collection("User").doc("do not remove");
    docRef.get().then(function (doc) {
        if (doc && doc.exists) {
            const mydata = doc.data();
            console.log(mydata.fname);
            console.log(mydata.lname);
            console.log(mydata.phone);

        }
    });
}


function quizAsInstractor(quizName, time, quizURL) {
    quizNumber++;
    var quiz =
        "<div id=\"quiz" + quizNumber + "\" class=\"col-md-6 col-sm-9 col-xs-12\">" +
        "<div class=\"card\">" +
        "<div style=\"float: left;\">" +
        "<img src=\"../img/profile/quiz.jpg\" style=\"width: 50px; height: 50px;\" alt=\"quiz\">" +
        "<img class=\"delete\" onclick=\"removeQuiz('quiz " + quizNumber + "')\"src=\"../img/profile/delete.png\" alt=\"delete\">" +
        "</div>" +
        "<h2>" + quizName + "</h2>" +
        "<h5>time: " + time + "</h5>" +
        "<a href=\"" + quizURL + "\" style=\"width: 100px; text-align: center;\"" +
        "class=\"btn btn-primary strquiz\">show Quiz</a>" +
        "</div>" +
        "</div>";
    var child = document.createElement('div');
    child.innerHTML = quiz;
    document.getElementById("showQuizzes").appendChild(child);
}

function quizAsStudent(quizName, grade) {
    quizNumber++;
    var quiz =
        "<div id=\"quiz" + quizNumber + "\" class=\"col-md-6 col-sm-9 col-xs-12\">" +
        "<div class=\"card\">" +
        "<div style=\"float: left;\">" +
        "<img src=\"../img/profile/quiz.jpg\" style=\"width: 50px; height: 50px;\" alt=\"quiz\">" +
        "<img class=\"delete\" onclick=\"removeQuiz('quiz " + quizNumber + "')\"src=\"../img/profile/delete.png\" alt=\"delete\">" +
        "</div>" +
        "<h2>" + quizName + "</h2>" +
        "<h3>" + grade + "<h3>" +
        "</div>" +
        "</div>";
    var child = document.createElement('div');
    child.innerHTML = quiz;
    document.getElementById("showQuizzes").appendChild(child);
}

function removeQuiz(id) {
    var firestore = firebase.firestore();
    deleteAtPath(firestore.collection("User").doc("ashraf"));
    firestore.collection("User").doc("ashraf").delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
    document.getElementById(id).remove();
}

// function deleteAtPath(path) {
//     var deleteFn = firebase.functions().httpsCallable('recursiveDelete');
//     deleteFn({ path: path })
//         .then(function(result) {
//             logMessage('Delete success: ' + JSON.stringify(result));
//         })
//         .catch(function(err) {
//             logMessage('Delete failed, see console,');
//             console.warn(err);
//         });
// }
function deleteAtPath(path) {
    var deleteFn = firebase.functions().httpsCallable('recursiveDelete');
    deleteFn({ path: path })
        .then(function (result) {
            logMessage('Delete success: ' + JSON.stringify(result));
        })
        .catch(function (err) {
            logMessage('Delete failed, see console,');
            console.warn(err);
        });
}














// const docRef = firestore.collection("User").doc("do not remove");
// const testbutton = document.getElementById("saver");
// testbutton.addEventListener("onclick", function () {
//    console.log("Im here Finally***************************************");
//    docRef.set({
//        name: "yarab"
//    });
// });

// var loadbu=document.getElementById("saver");
// loadbu.addEventListener("click",function(){
// docRef.get().then(function(doc){
//     console.log(doc.data());
// })
// });

// const docRef = firestore.collection("User").doc("do not remove");
// docRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });
