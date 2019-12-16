let num_Of_questions = 0;



function validation() {

    let check = false;
    let checkans = false;

    if (num_Of_questions == 0) {
        document.getElementById("error").innerHTML = "Please add Questions";
    } else {


        for (i = 1; i <= num_Of_questions; i++) {
            let boolCheck = true;

            let name = "question" + i;
            var x = document.getElementById(name);
            if (x != null) {

                var z = x.getElementsByTagName('textarea');
                var y = x.getElementsByTagName('input');
                if (z[0].value.length == 0) {
                    z[0].style.border = "solid red";
                    check = true;
                } else {
                    z[0].style.border = "";
                }

                for (j = 1; j < y.length; j += 2) {

                    if (y[j].value.length == 0) {
                        y[j].style.border = "solid red";
                        check = true;
                    } else {
                        y[j].style.border = "";
                    }
                }




                for (k = 0; k < y.length; k += 2) {
                    console.log(y[k].checked);

                    if (y[k].checked == true) {
                        boolCheck = false;
                    }
                }

                if (boolCheck) {
                    checkans = true;
                }

            }
        }

        var na = document.getElementById("name_quiz");
        if (na.value.length == 0) {
            na.style.border = "solid red";
            check = true;
        } else {
            na.style.border = "";
        }



        if (check && checkans) {
            document.getElementById("error").innerHTML = "Please fill all data in red rectangle And Add correct answer";
        } else if (check) {
            document.getElementById("error").innerHTML = "Please fill all data in red rectangle";
        } else if (checkans) {
            document.getElementById("error").innerHTML = "Please add correct answer in all Questions";
        } else {
            document.getElementById("error").innerHTML = "";
            SaveData();
        }





    }
}

function add_multi_Answer(name_question) {

    let num_question = document.getElementById(name_question);
    let div_of_questions = num_question.getElementsByTagName("div")[0];
    let num_Of_Answer = num_question.getElementsByTagName("p")[0].innerHTML;



    var new_answer = div_of_questions.getElementsByTagName("div")[0];

    var cln = new_answer.cloneNode(true);
    cln.getElementsByTagName('input')[0].checked = false;
    cln.getElementsByTagName('input')[1].value = "";

    console.log(cln);
    div_of_questions.appendChild(cln);


    num_Of_Answer++;
    console.log(num_Of_Answer);
    num_question.getElementsByTagName("p")[0].innerHTML = num_Of_Answer;
}

function add_one_Answer(name_question) {
    let num_question = document.getElementById(name_question);
    let div_of_questions = num_question.getElementsByTagName("div")[0];
    let num_Of_Answer = num_question.getElementsByTagName("p")[0].innerHTML;



    var new_answer = div_of_questions.getElementsByTagName("div")[0];

    var cln = new_answer.cloneNode(true);
    cln.getElementsByTagName('input')[0].checked = false;
    cln.getElementsByTagName('input')[1].value = "";

    console.log(cln);
    div_of_questions.appendChild(cln);


    num_Of_Answer++;
    console.log(num_Of_Answer);
    num_question.getElementsByTagName("p")[0].innerHTML = num_Of_Answer;
}

function delete_answer(name_question) {
    let num_question = document.getElementById(name_question);
    let num_Of_Answer = num_question.getElementsByTagName("p")[0].innerHTML;
    if (num_Of_Answer > 3) {
        num_Of_Answer--;
        console.log(num_Of_Answer);
        num_question.getElementsByTagName("p")[0].innerHTML = num_Of_Answer;
        return true;
    }
}

function delete_one_answer(name_question) {
    let num_question = document.getElementById(name_question);
    let num_Of_Answer = num_question.getElementsByTagName("p")[0].innerHTML;
    if (num_Of_Answer > 2) {
        num_Of_Answer--;
        console.log(num_Of_Answer);
        num_question.getElementsByTagName("p")[0].innerHTML = num_Of_Answer;
        return true;
    }
}

function add_multi_question() {
    num_Of_questions++;
    var str = "<div class=\"p-2 flex-fill text-center Qusistion\" id=\"question" + num_Of_questions + "\"><label for=\"uname\">Quistion " + num_Of_questions + "</label><button type=\"button\" class=\"closeButton\" onclick=\"this.parentNode.remove();\" style=\"float: right\">X</button><textarea class=\"form-control textA\" rows='7' name=\"text\" required></textarea><br /><p class=\"collapse\">3</p><div><div class=\"form-group form-check\"><input type=\"checkbox\" class=\"form-radio\"><input type=\"text\" class=\"form-control-sm styleinput\"><button type=\"button\" class=\"closeButton\" onclick=\"if(delete_answer('question" + num_Of_questions + "')){this.parentNode.remove();}\">X</button></div><div class=\"form-group form-check\"><input type=\"checkbox\" class=\"form-radio\"><input type=\"text\" class=\"form-control-sm styleinput\"><button type=\"button\" class=\"closeButton\" onclick=\"if(delete_answer('question" + num_Of_questions + "')){this.parentNode.remove();}\">X</button></div><div class=\"form-group form-check\"><input type=\"checkbox\" class=\"form-radio\"><input type=\"text\" class=\"form-control-sm styleinput\"><button type=\"button\" class=\"closeButton\" onclick=\"if(delete_answer('question" + num_Of_questions + "')){this.parentNode.remove();}\">X</button></div></div><button type=\"button\" onclick=\"add_multi_Answer('question" + num_Of_questions + "')\" class=\"btn btn-info\" style=\"width: 20%\">Add answer</button></div>";


    var child = document.createElement('div');
    child.innerHTML = str;
    document.getElementById('questions').appendChild(child);
}

function add_one_question() {
    num_Of_questions++;
    var str = "<div class=\"p-2 flex-fill text-center Qusistion\" id=\"question" + num_Of_questions + "\"><label for=\"uname\">Quistion " + num_Of_questions + "</label><button type=\"button\" class=\"closeButton\" onclick=\"this.parentNode.remove();\" style=\"float: right\">X</button><textarea class=\"form-control textA\" rows=\"7\" name=\"text\" required></textarea><br /><p class=\"collapse\">2</p><div><div class=\"form-group form-check\"><input type=\"radio\" name=\"q" + num_Of_questions + "\" class=\"form-radio\"><input type=\"text\" class=\"form-control-sm styleinput\"><button type=\"button\" class=\"closeButton\" onclick=\"if(delete_one_answer('question" + num_Of_questions + "')){this.parentNode.remove();}\">X</button></div><div class=\"form-group form-check\"><input type=\"radio\" name=\"q" + num_Of_questions + "\" class=\"form-radio\"><input type=\"text\" class=\"form-control-sm styleinput\"><button type=\"button\" class=\"closeButton\" onclick=\"if(delete_one_answer('question" + num_Of_questions + "')){this.parentNode.remove();}\">X</button></div></div><button type=\"button\" onclick=\"add_one_Answer('question" + num_Of_questions + "')\" class=\"btn btn-info\" style=\"width: 20%\">Add answer</button></div>";


    var child = document.createElement('div');
    child.innerHTML = str;
    document.getElementById('questions').appendChild(child);
}


function SaveData() {
    var number_of_Q = 0;
    var firestore = firebase.firestore();

    var access = makeid();

    var name_quiz = document.getElementById("name_quiz").value;
    var time_quiz = document.getElementById("time_quiz").value;
    var point_quiz = document.getElementById("point").value;

    var arra = new Array();
    
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
//enrolled
            const docRef = firestore.collection("Quiz").doc(access);
            docRef.set({
                name: name_quiz,
                Time: time_quiz,
                Points: point_quiz,
                Instructor: user.uid,
                enrolled: arra
            });
            
            var docRef5 = firestore.collection("User").doc(user.uid);
            docRef5.update({
                instQuizzes: firebase.firestore.FieldValue.arrayUnion(access)
            });
            
            //            console.log(user.uid);
        } else {
            // User not logged in or has just logged out.
        }
    });



    for (i = 1; i <= num_Of_questions; i++) {
        let correct = new Array();
        let wrong = new Array();

        let name = "question" + i;
        var x = document.getElementById(name);
        if (x != null) {
            number_of_Q++;
            var text_Question = x.getElementsByTagName('textarea')[0].value;
            var y = x.getElementsByTagName('input');

            for (k = 0; k < y.length; k += 2) {
                if (y[k].checked == true) {
                    correct.push(y[k + 1].value);
                } else {
                    wrong.push(y[k + 1].value);
                }
            }


            var n = "Question" + number_of_Q;
            const docRef1 = firestore.collection("Quiz").doc(access).collection("Questions").doc(n);
            docRef1.set({
                QuestionText: text_Question,
                Wrong: wrong,
                Correct: correct
            });
        }
    }

}


function makeid() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}