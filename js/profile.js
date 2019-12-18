var autho = firebase.auth();
var firestore = firebase.firestore();


autho.onAuthStateChanged(function (user) {
    if (user) {

        document.getElementById("nav-avatar").style.display = "block";
        firebase.firestore().collection("User").doc(firebase.auth().getUid()).get().then(function (doc) {
            document.getElementById("profile-name-avatar").innerHTML = doc.data().firstname + " " + doc.data().lastName;
        });

        firestore.collection("User").doc(autho.getUid()).get().then(function (doc) {
            if (doc.exists) {
                const mydata = doc.data();
                // console.log(mydata);
                if (mydata.state === "student") {
                    var check = document.getElementsByClassName("instractor");
                    for (i = 0; i < check.length; i++) {
                        check[i].style.display = "none";
                    }
                    document.getElementById("efname").innerHTML = mydata.firstname;
                    document.getElementById("elname").innerHTML = mydata.lastName;
                    document.getElementById("eemail").innerHTML = user.email;
                    document.getElementById("eemail").href = user.email;
                    document.getElementById("ephone").innerHTML = mydata.phone;
                    document.getElementById("eaddress").innerHTML = mydata.addrees;
                    document.getElementById("ecity").innerHTML = mydata.city;
                    document.getElementById("euniversity").innerHTML = mydata.university;
                    document.getElementById("especialty").innerHTML = mydata.specialty;
                    var quizNum;
                    var quizGrade;
                    var n;
                    for (n = 0; n < mydata.studQuizzes.length; n++) {

                        quizNum = n;
                        quizAccess = mydata.studQuizzes[n].access;
                        quizGrade = mydata.studQuizzes[n].degree;
                        findQuiz(quizAccess, quizGrade);



                    }

                } else {
                    if (mydata.state === "instructor") {
                        var check = document.getElementsByClassName("student");
                        for (i = 0; i < check.length; i++) {
                            check[i].style.display = "none";
                        }
                        document.getElementById("efname").innerHTML = mydata.firstname;
                        document.getElementById("elname").innerHTML = mydata.lastName;
                        document.getElementById("eemail").innerHTML = user.email;
                        document.getElementById("eemail").href = user.email;
                        document.getElementById("ephone").innerHTML = mydata.phone;
                        document.getElementById("eaddress").innerHTML = mydata.addrees;
                        document.getElementById("ecity").innerHTML = mydata.city;
                        document.getElementById("euniversity").innerHTML = mydata.university;
                        document.getElementById("especialty").innerHTML = mydata.specialty;
                        document.getElementById("edegree").innerHTML = mydata.degree;
                        document.getElementById("eexperience").innerHTML = mydata.exprienc;

                        var quizNum;
                        var quizGrade;
                        var n;
                        for (n = 0; n < mydata.instQuizzes.length; n++) {
                            quizNum = n;
                            quizAccess = mydata.instQuizzes[n];
                            findInstQuiz(quizAccess);
                        }

                    }
                }
            }
        });
    }
});
//when the user click edit
function toEdit(id) {
    firestore.collection("User").doc(autho.getUid()).get().then(function (doc) {
        if (doc.exists) {
            const mydata = doc.data();
            var sps;
            console.log(mydata.state);
            if (mydata.state == "student") {
                sps = ["span-first-name", "span-second-name", "span-email",
                    "span-phone", "span-address", "span-city", "span-university",
                    "span-specialty", "span-password"];
            } else {
                sps = ["span-first-name", "span-second-name", "span-email",
                    "span-phone", "span-address", "span-degree", "span-experience",
                    "span-city", "span-university", "span-specialty",
                    "span-password"];
            }
            console.log(sps);
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
    });
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
    for (i in conts) {
        if (conts[i] != id) {
            document.getElementById(conts[i]).style.display = "none";
        }
    }
}

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
    } else if (id === "Lname") {
        if (validationLname()) {
            setData(id);
            document.getElementById("elname").innerHTML = document.getElementById("Lname").value;
            document.getElementById("second-name").style.display = "table-row";
            document.getElementById("span-second-name").style.display = "none";
            clear("span-second-name");
        }
    } else if (id === "Email") {
        if (validationEmail()) {
            setData(id);
            document.getElementById("eemail").innerHTML = document.getElementById("Email").value;
            document.getElementById("email").style.display = "table-row";
            document.getElementById("span-email").style.display = "none";
            document.getElementById("eemail").setAttribute("href", document.getElementById("Email").value);
            clear("span-email");
        }
    } else if (id === "Phone") {
        if (validationPhone()) {
            setData(id);
            document.getElementById("ephone").innerHTML = document.getElementById("Phone").value;
            document.getElementById("phone").style.display = "table-row";
            document.getElementById("span-phone").style.display = "none";
            clear("span-phone");
        }
    } else if (id === "Address") {
        if (ValidationAdress()) {
            setData(id);
            document.getElementById("eaddress").innerHTML = document.getElementById("Address").value;
            document.getElementById("address").style.display = "table-row";
            document.getElementById("span-address").style.display = "none";
            clear("span-address");
        }
    } else if (id === "City") {
        if (ValidationCity()) {
            setData(id);
            document.getElementById("ecity").innerHTML = document.getElementById("City").value;
            document.getElementById("city").style.display = "table-row";
            document.getElementById("span-city").style.display = "none";
            clear("span-city");
        }
    } else if (id === "University") {
        if (ValidationUniversity()) {
            setData(id);
            document.getElementById("euniversity").innerHTML = document.getElementById("University").value;
            document.getElementById("university").style.display = "table-row";
            document.getElementById("span-university").style.display = "none";
            clear("span-university");
        }
    } else if (id === "Specialty") {
        if (ValidationSpecialty()) {
            setData(id);
            document.getElementById("especialty").innerHTML = document.getElementById("Specialty").value;
            document.getElementById("specialty").style.display = "table-row";
            document.getElementById("span-specialty").style.display = "none";
            clear("span-specialty");
        }
    } else if (id === "Password") {
        if (ValidationPass()) {
            setData(id);
            document.getElementById("password").style.display = "table-row";
            document.getElementById("span-password").style.display = "none";
            clear("span-password");
        }
    } else if (id === "Degree") {
        if (ValidationDegree()) {
            setData(id);
            document.getElementById("degree").style.display = "table-row";
            document.getElementById("span-degree").style.display = "none";
            clear("span-degree");
        }
    } else if (id === "Experience") {
        if (ValidationExperience()) {
            setData(id);
            document.getElementById("experience").style.display = "table-row";
            document.getElementById("span-experience").style.display = "none";
            clear("span-experience");
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
    } else {
        document.getElementById('errDegree').style.display = "none";
        return true;
    }
}

function ValidationExperience() {
    var degree = document.getElementById('Experience').value;
    var regName = /^[A-Za-z]+$/;
    if (degree == "" || degree.length < 2) {
        document.getElementById('errExperience').style.display = "block";
        document.getElementById('errExperience').innerHTML = "** Please fill this field or it not vaild";
        return false;
    } else if (!degree.match(regName)) {
        document.getElementById('errExperience').style.display = "block";
        document.getElementById('errExperience').innerHTML = "** only characters are allowed";
        return false;
    } else {
        document.getElementById('errExperience').style.display = "none";
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
    var accessValue = document.getElementById("access").value;
    firestore.collection("Quiz").doc(accessValue).get().then(function (doc2) {

        firestore.collection("User").doc(autho.getUid()).get().then(function (doc) {
            if (doc.exists) {
                if (doc2.exists) {
                    const mydata = doc2.data();

                    var arr = mydata.enrolled;
                    userId = firebase.auth().currentUser.uid;
                    var checkPoint = false;

                    for (k = 0; k < arr.length; k++) {
                        console.log(arr.length);
                        if (arr[k] == userId) {
                            document.getElementById("access").innerHTML = "enrolled before";
                            document.getElementById("access").style.backgroundColor = "yellow";
                            checkPoint = true;
                            break;
                        }
                    }

                    if (checkPoint == false) {


                        setTimeout(() => {
                            console.log("we waited");
                            open(accessValue);
                        }, 2000);



                    }
                }
            }
        });
    });
}



function logOut() {

    firebase.auth().signOut();
    window.location.href = "../html-page/login_form.html";
}


function setData(id) {
    userId = firebase.auth().currentUser.uid;
    docRef = firestore.collection("User").doc(userId);
    if (id === "Fname") {
        docRef.update({
            firstname: document.getElementById("Fname").value
        });
    } else if (id === "Lname") {
        docRef.update({
            lastName: document.getElementById("Lname").value
        });
    } else if (id === "Email") {

        autho.currentUser.updateEmail(document.getElementById("Email").value).then(function () {

        }).catch(function (err) {

        });
    } else if (id === "Phone") {
        docRef.update({
            phone: document.getElementById("Phone").value
        });
    } else if (id === "Specialty") {
        docRef.update({
            specialty: document.getElementById("Specialty").value
        });
    } else if (id === "Address") {
        docRef.update({
            addrees: document.getElementById("Address").value
        });
    } else if (id === "University") {
        docRef.update({
            university: document.getElementById("University").value
        });
    } else if (id === "City") {
        docRef.update({
            city: document.getElementById("City").value
        });
    } else if (id === "Degree") {
        docRef.update({
            degree: document.getElementById("Degree").value
        });
    } else if (id === "Experience") {
        docRef.update({
            exprienc: document.getElementById("Experience").value
        });
    } else if (id === "Password") {

        autho.currentUser.updatePassword(document.getElementById("Password").value).then(function () {

        }).catch(function (err) {

        });
    }
}




function quizAsInstractor(quizName, time, quizAccess) {

    var quiz =
        "<div id=\"" + quizAccess + "\" class=\"col-md-4 col-sm-6 col-xs-12\">" +
        "<div class=\"card\">" +
        "<div style=\"float: left;\">" +
        "<img src=\"../img/profile/quiz.jpg\" style=\"width: 50px; height: 50px;\" alt=\"quiz\">" +
        "<img class=\"delete\" onclick=\"document.getElementById('id01').style.display='block';" +
        " document.getElementById('sp').innerHTML ='" + quizAccess + "'; \"" +
        " src=\"../img/profile/delete.png\" alt=\"delete\">" +
        "</div>" +
        "<h2>" + quizName + "</h2>" +
        "<h5>time: " + time + "</h5>" +
        "<a " + "href=\"#\"" + " onclick=\"open('" + quizAccess + "')\"" +
        " style=\"width: 100px; text-align: center;\"" +
        "class=\"btn btn-primary strquiz\">show Quiz</a>" +
        "<a id=\"myBtn\"" + "href=\"#\"" + "onclick=\"getEnrolled('" + quizAccess + "'); document.getElementById('myModal').style.display='block';\"" +
        " style=\"text-align: center;\"" +
        "class=\"btn strquiz enroll\">show enrolled</a>" +
        "</div>" +
        "</div>";

    document.getElementById("showQuizzes").innerHTML += quiz;
}


function getEnrolled(quizAccess) {
    firestore.collection("Quiz").doc(quizAccess).get().then(function (doc1) {
        if (doc1 && doc1.exists) {
            const quiz = doc1.data();
            for (j = 0; j < quiz.enrolled.length; j++) {
                firestore.collection("User").doc(quiz.enrolled[j]).get().then(function (doc1) {
                    if (doc1 && doc1.exists) {
                        var enrol = doc1.data();
                        console.log(enrol.firstname);
                        const dgr = enrol.studQuizzes;
                        console.log(dgr.length);
                        for (i = 0; i < dgr.length; i++) {
                            if (dgr[i].access == quizAccess) {
                                console.log(dgr[i].degree);
                                var addenroll = "<div class=\"row\" style=\"border-bottom: 1px silver solid; margin-left:5px \">" +
                                    "<label class=\"col-md-4 col-sm-6 col-xs-6\" >" + enrol.firstname + "</label>" +
                                    "<label class=\"col-md-4 col-sm-6 col-xs-6\" >" + dgr[i].degree + "</label>" +
                                    "</div>"
                                document.getElementById("innerModal").innerHTML += addenroll;
                            }
                        }
                    }
                });
            }
        }
    });
}

function open(quizAccess) {

    localStorage.setItem("access", quizAccess);
    window.location.href = "Exam_page.html";
}


function quizAsStudent(quizName, instractorName, grade, quizAccess) {
  

    firebase.firestore().collection("User").doc(instractorName).get().then(function (doc) {
        var gradelook;
        if (grade > 3) {
            gradelook = "<h3 style =\"color:green;\">Grade: " + grade + "<h3>";
        } else {
            gradelook = "<h3 style =\"color:red;\">Grade: " + grade + "<h3>";
        }
        var quiz =
            "<div id=\"" + quizAccess + "\" class=\"col-md-4 col-sm-6 col-xs-12\">" +
            "<div class=\"card\">" +
            "<div style=\"float: left;\">" +
            "<img src=\"../img/profile/quiz.jpg\" style=\"width: 50px; height: 50px;\" alt=\"quiz\">" +
            "</div>" +
            "<h2>" + quizName + "</h2>" +
            "<h5><small>Instractor</small>: " + doc.data().firstname + " " + 
            doc.data().lastName; + "</h5>" + "</div>" +"</div>";


            quiz+=gradelook;

        document.getElementById("showQuizzes").innerHTML += quiz;

    });
}

function removeQuiz() {


    var id = document.getElementById("sp").innerHTML;
    var userId = firebase.auth().currentUser.uid;


    // deleteAtPath(firestore.collection("Quiz").doc(id));
    firestore.collection("Quiz").doc(id).delete().then(function (doc) {
        console.log("questions collection successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing question collection: ", error);
    });
    firestore.collection("User").doc(userId).get().then(function (doc4) {
        var getToModify = doc4.data();
        var arr = getToModify.instQuizzes;
        var newArr;
        var x = 0;
        for (i in arr) {
            if (id == arr[i]) {
                continue;
            } else {
                x++;
                newArr[x] = arr[i];
            }
        }
        firestore.collection("User").doc(userId).update({
            instQuizzes: newArr
        });

        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
    document.getElementById(id).remove();

    document.getElementById('id01').style.display = 'none';
}






function countProps(obj) {
    var count = 0;
    for (i in obj) count++;
    return count;
}

function findQuiz(quizAccess1, quizGrade1) {
    firestore.collection("Quiz").doc(quizAccess1).get().then(function (doc1) {
        if (doc1.exists) {
            const quiz = doc1.data();
            var name = quiz.name;
            var instructor = quiz.Instructor;
            quizAsStudent(name, instructor, quizGrade1, quizAccess1);
        } else {
            var name = "undefined";
            var instructor = "undefined";
            quizAsStudent(name, instructor, quizGrade1, quizAccess1);

        }
    });
}

function findInstQuiz(quizAccess1) {
    firestore.collection("Quiz").doc(quizAccess1).get().then(function (doc1) {
        if (doc1 && doc1.exists) {
            const quiz = doc1.data();
            quizAsInstractor(quiz.name, quiz.Time, quizAccess1);
        }
    });
}
