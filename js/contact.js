
// check validation on the information of the e-mail
function checkValidation() {
    var Fname = document.getElementById('Fname').value;
    var Lname = document.getElementById('Lname').value;
    var UserEmail = document.getElementById('Email').value;
    var Message = document.getElementById('Message').value;
    // +Lname+UserEmail+Message);
    //   
    /* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };


    // 
    var messageValue = document.getElementById("Message").value;
    var isOk = [];
    var done = true;
    if (validationFname())
        isOk[0] = true;
    if (validationLname())
        isOk[1] = true;
    if (validationEmail())
        isOk[2] = true;
    if (messageValue === "" || messageValue.length < 25) {
        document.getElementById('errMessage').style.display = "block";
        document.getElementById("errMessage").innerHTML = "** please enter somthing not less than 25 characters";
        isOk[3] = false;
    }
    else {
        isOk[3] = true;
        document.getElementById('errMessage').style.display = "none";
        document.getElementById("errMessage").innerHTML = "";
    }
    for (i in isOk) {
        if (!(isOk[i])) {
            done = false;
            return false;
        }
    }
    if (done) {
        var anii = document.getElementById("mail-box");
        anii.style.width = "150px";
        anii.style.height = "150px";
        anii.style.top = "-800px";
        anii.style.webkitTransition = "top 5s";
        anii.style.transition = "top 5s";
        // S**************************************
        // function sendEmail() {
 
        Email.send({
            Host: "smtp.gmail.com",
            Username: "quizzer2019@gmail.com",
            Password: "quizzer2019support",
            To: 'quizzer2019@gmail.com',
            From: "quizzer2019@gmail.com",
            Subject: "New Request Is Here",
            Body: "Name :" + Fname + " " + Lname + "<br>" + "Email :" + UserEmail + "<br>" + "Message:-" + Message,
        }).then(
            console.log("Email sent"),
            alert("Thank You For Contacting Us, We Will Respond To You Soon"),
        );
        // }




        // 
    }
}

function rotate() {
    var ani = document.getElementById("mail-box");
    ani.style.transform = "rotateY(180deg)";
}
function rotateback() {
    var ani = document.getElementById("mail-box");
    ani.style.transform = "rotateY(0deg)";
}
