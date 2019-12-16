var Questions = new Array();
var CorrectAns = new Array();
var Q_num = 0;
var Grade = 0;
var tout;
var to;
var docname;

function StartTime(time) {
    time = time * 60;
    tout = setTimeout(function () {
        finish()
    }, (time * 1000));
    to = setTimeout(function () {
        Timer()
    }, (1000));

}

function Timer() {

    var t = document.getElementById("time").innerHTML;

    var hour = t.charAt(0) + t.charAt(1);
    var minute = t.charAt(3) + t.charAt(4);
    var second = t.charAt(6) + t.charAt(7);

    if (second == 0) {
        if (minute > 0) {
            minute--;
            second = 59;
        } else {
            hour--;
            minute = 59;
            second = 59;
        }
    } else {
        second--;
    }

    hour = parseInt(hour);
    minute = parseInt(minute);
    second = parseInt(second);

    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);

    document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second;
    if (second != 0 || minute != 0 || hour != 0) {
        setTimeout(function () {
            Timer()
        }, 1000);
    }
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function saveDoc(doc) {
    Questions.push(doc);
}

function d() {
    for (i = 0; i < Questions.length; i++) {
        //        console.log(Questions[i].data().Wrong[0]);
        for (g = 0; g < Questions[i].data().All.length; g++) {
            console.log(Questions[i].data().All[g]);
        }
    }
}


function load() {
    docname = localStorage.getItem("access");
    var firestore = firebase.firestore();
    //    var docRef = firestore.collection("Quiz").doc("BLhZXdALbZ");
    var docRef = firestore.collection("Quiz").doc(docname);
    docRef.get().then(function (doc) {
        if (doc.exists) {
            document.getElementById("quiz-name").innerHTML = doc.data().name;

            var total = "<h2>The time of Quiz is " + doc.data().Time + " minutes</h2><h2>number of point for each question " + doc.data().Points + "</h2><button onclick=\" start() \">Start</button>";

            document.getElementById("question").innerHTML = total;

            Grade = doc.data().Points;

        } else {
            console.log("No such document!");
        }
    });
    var docRef3 = firestore.collection("Quiz").doc(docname).collection("Questions").get().then(function (querySnapshot) {
        //    var docRef3 = firestore.collection("Quiz").doc("BLhZXdALbZ").collection("Questions").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            saveDoc(doc);
        });
    });


    if (Questions.length > 1) {
        document.getElementById("submit-button").disabled = false;
    } else {
        document.getElementById("submit-button").disabled = true;
    }

}


function start() {
    var firestore = firebase.firestore();
    var docRef = firestore.collection("Quiz").doc(docname);

    docRef.get().then(function (doc) {
        if (doc.exists) {

            var t = doc.data().Time;
            var hour = parseInt((t / 60), 10);
            var minute = t % 60;

            document.getElementById("time").innerHTML = checkTime(hour) + ":" + checkTime(minute) + ":00";
            setQ(0);
            StartTime(t);
        } else {
            console.log("No such document!");
        }
    });

    document.getElementById("buttons").style.display = "block";

}


function setQ(num) {


    var Question = document.getElementById("question");
    var text = "<h2>" + Questions[num].data().QuestionText + "</h2>";

    if (Questions[num].data().Correct.length > 1) {
        for (o = 0; o < Questions[num].data().All.length; o++) {


            text += "<input type=\"checkbox\" id=\"ch" + o + "\"><label for=\"ch" + o + "\">" + Questions[num].data().All[o] + "</label>";

        }
    } else {
        for (i = 0; i < Questions[num].data().All.length; i++) {
            text += "<input type=\"radio\" name=\"q" + num + "\" id=\"ch" + i + "\"><label for=\"ch" + i + "\">" + Questions[num].data().All[i] + "</label>";
        }
    }

    Question.innerHTML = text;

    if (CorrectAns[num] != null) {
        if (Questions[num].data().Correct.length > 1) {


            var n = CorrectAns[num];
            var b = false;
            for (t = 0; t < Questions[num].data().All.length; t++) {
                for (z = 0; z < n.length; z++) {
                    if (Questions[num].data().All[t] == n[z]) {
                        b = true;
                    }
                }
                if (b) {


                    var v = document.getElementById("question");
                    var r = v.getElementsByTagName("input");

                    r[t].checked = true;

                }

                b = false;

            }




        } else {
            var n = CorrectAns[num];
            console.log(Questions[num].data().All.length);

            for (i = 0; i < Questions[num].data().All.length; i++) {
                if (n[0] == Questions[num].data().All[i]) {

                    var v = document.getElementById("question");
                    var r = v.getElementsByTagName("input");

                    r[i].checked = true;
                }
            }

        }
    }


    if (Questions.length > (Q_num + 1)) {
        document.getElementById("submit-button").disabled = true;
    } else {
        document.getElementById("submit-button").disabled = false;
    }


}

function next() {
    if (Q_num < (Questions.length - 1)) {
        set_Corr_Ans();
        Q_num++;
        setQ(Q_num);
    }
}

function previous() {
    if (Q_num > 0) {
        set_Corr_Ans();
        Q_num--;
        setQ(Q_num);
    }
}

function set_Corr_Ans() {
    var arr = new Array();
    var v = document.getElementById("question");
    var r = v.getElementsByTagName("input");
    var l = v.getElementsByTagName("label");
    for (i = 0; i < r.length; i++) {
        if (r[i].checked) {
            arr.push(l[i].innerHTML);
        }
    }
    if (arr.length > 0) {
        CorrectAns[Q_num] = null;
        CorrectAns[Q_num] = arr;
    }
    var q = CorrectAns[Q_num];
}


function go() {
    window.location.href = "profile.html";
}

function finish() {
    var firestore = firebase.firestore();
    clearTimeout(tout);
    //    clearTimeout(to);
    set_Corr_Ans();
    var totalGrade = Grade * (Questions.length);
    var g = getGrade();
    var v = "<div><h2>You finish the QUIZ</h2><p>You got " + g + " from " + totalGrade + " marks</p><button onclick=\" go() \">Back to profile</button></div>";

    document.getElementById("question").innerHTML = v;

    document.getElementById("submit-button").style.display = "none";
    document.getElementById("next-question-button").style.display = "none";
    document.getElementById("prev-question-button").style.display = "none";
    document.getElementById("time").style.display = "none";
    
    var AcGr = {
        access: docname,
        degree: g
    }
    

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var docRef = firestore.collection("User").doc(user.uid);
            docRef.update({
                studQuizzes: firebase.firestore.FieldValue.arrayUnion(AcGr)
            });
            var docRef1 = firestore.collection("Quiz").doc(docname);
            docRef1.update({
                enrolled: firebase.firestore.FieldValue.arrayUnion(user.uid)
            });
//            console.log(user.uid);
        } else {
            // User not logged in or has just logged out.
        }
    });


}

function getGrade() {
    var g = 0;
    for (i = 0; i < CorrectAns.length; i++) {
        var n = CorrectAns[i];
        if (n != null) {
            if ((n.length) == (Questions[i].data().Correct.length)) {
                var bool = true;
                for (j = 0; j < n.length; j++) {
                    if (n[j] != Questions[i].data().Correct[j]) {
                        bool = false;
                    }
                }
                if (bool) {
                    g += parseFloat(Grade);
                }
            }
        }
    }


    return g;
}