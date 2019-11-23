let num_Of_questions = 0;

function f(s) {
    var x = document.getElementById(s);
    var z = x.getElementsByTagName('textarea');
    var y = x.getElementsByTagName('input');
    console.log(z[0].value);
    for (i = 0; i < y.length; i += 2) {
        console.log(y[i].checked);
    }
    for (i = 1; i < y.length; i += 2) {
        console.log(y[i].value);
    }

    var xd = document.getElementById("question1");
    var num = xd.getElementsByTagName("p")[0].innerHTML;
    console.log(num);

}

function add_multi_Answer(name_question) {

    let num_question = document.getElementById(name_question);
    let div_of_questions = num_question.getElementsByTagName("div")[0];
    let num_Of_Answer = num_question.getElementsByTagName("p")[0].innerHTML;

    if (num_Of_Answer == 0) {
        let answer = "<div class='form-group form-check'><input type='checkbox'><input type='text'class='form-control-sm styleinput'><button type='button' onclick='this.parentNode.remove();delete_answer();'>X</button></div>";

        div_of_questions.innerHTML = answer;

    } else {

        var new_answer = div_of_questions.getElementsByTagName("div")[0];

        var cln = new_answer.cloneNode(true);
        cln.getElementsByTagName('input')[1].value = "";

        console.log(cln);
        div_of_questions.appendChild(cln);

    }


    num_Of_Answer++;
    console.log(num_Of_Answer);
    num_question.getElementsByTagName("p")[0].innerHTML = num_Of_Answer;
}

function add_one_Answer(name_question) {
    let num_question = document.getElementById(name_question);
    let div_of_questions = num_question.getElementsByTagName("div")[0];
    let num_Of_Answer = num_question.getElementsByTagName("p")[0].innerHTML;

    if (num_Of_Answer == 0) {

        let answer = "<div class='form-group form-check'><input type='radio' name='q2'><input type='text' class='form-control-sm styleinput'><button type='button' onclick='this.parentNode.remove();delete_answer();'>X</button></div>";

        div_of_questions.innerHTML = answer;

    } else {

        var new_answer = div_of_questions.getElementsByTagName("div")[0];

        var cln = new_answer.cloneNode(true);
        cln.getElementsByTagName('input')[1].value = "";

        console.log(cln);
        div_of_questions.appendChild(cln);

    }

    num_Of_Answer++;
    console.log(num_Of_Answer);
    num_question.getElementsByTagName("p")[0].innerHTML = num_Of_Answer;
}

function delete_answer(name_question) {
    let num_question = document.getElementById(name_question);
    let num_Of_Answer = num_question.getElementsByTagName("p")[0].innerHTML;
    num_Of_Answer--;
    console.log(num_Of_Answer);
    num_question.getElementsByTagName("p")[0].innerHTML = num_Of_Answer;
}


function add_multi_question() {
    num_Of_questions ++;
    var str = "<div class=\"p-2 flex-fill text-center Qusistion\" id=\"question"+num_Of_questions+"\"><label for=\"uname\">Quistion " +num_Of_questions+"</label><button type=\"button\" onclick=\"this.parentNode.remove();\" style=\"float: right\">X</button><textarea class=\"form-control\" rows='7' name=\"text\" required></textarea><br /><p class=\"collapse\">3</p><div><div class=\"form-group form-check\"><input type=\"checkbox\"><input type=\"text\" class=\"form-control-sm styleinput\"><button type=\"button\" onclick=\"this.parentNode.remove();delete_answer('question"+num_Of_questions+"');\">X</button></div><div class=\"form-group form-check\"><input type=\"checkbox\"><input type=\"text\" class=\"form-control-sm styleinput\"><button type=\"button\" onclick=\"this.parentNode.remove();delete_answer('question"+num_Of_questions+"');\">X</button></div><div class=\"form-group form-check\"><input type=\"checkbox\"><input type=\"text\" class=\"form-control-sm styleinput\"><button type=\"button\" onclick=\"this.parentNode.remove();delete_answer('question"+num_Of_questions+"');\">X</button></div></div><button type=\"button\" onclick=\"add_multi_Answer('question"+num_Of_questions+"')\" class=\"btn btn-info\" style=\"width: 20%\">Add answer</button></div>";


    var child = document.createElement('div');
    child.innerHTML = str;
    document.getElementById('questions').appendChild(child);
}

function add_one_question(){
    num_Of_questions ++;
    var str = "<div class=\"p-2 flex-fill text-center Qusistion\" id=\"question"+num_Of_questions+"\"><label for=\"uname\">Quistion "+num_Of_questions+"</label><button type=\"button\" onclick=\"this.parentNode.remove();\" style=\"float: right\">X</button><textarea class=\"form-control\" rows=\"7\" name=\"text\" required></textarea><br /><p class=\"collapse\">2</p><div><div class=\"form-group form-check\"><input type=\"radio\" name=\"q"+num_Of_questions+"\"><input type=\"text\" class=\"form-control-sm styleinput\"><button type=\"button\" onclick=\"this.parentNode.remove();delete_answer('question"+num_Of_questions+"');\">X</button></div><div class=\"form-group form-check\"><input type=\"radio\" name=\"q"+num_Of_questions+"\"><input type=\"text\" class=\"form-control-sm styleinput\"><button type=\"button\" onclick=\"this.parentNode.remove();delete_answer('question"+num_Of_questions+"');\">X</button></div></div><button type=\"button\" onclick=\"add_one_Answer('question"+num_Of_questions+"')\" class=\"btn btn-info\" style=\"width: 20%\">Add answer</button></div>";


    var child = document.createElement('div');
    child.innerHTML = str;
    document.getElementById('questions').appendChild(child);
}