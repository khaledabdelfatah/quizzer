// check validation on the information of the e-mail
function checkValidation()
{
    var messageValue= document.getElementById("Message").value;
    var isOk = [];
    var done = true;
    if (validationFname())
        isOk[0] = true;
    if (validationLname())
        isOk[1] = true;
    if (validationEmail())
        isOk[2] = true;
    if (messageValue === "" || messageValue.length <50 )
    {
        document.getElementById('errMessage').style.display="block";
        document.getElementById("errMessage").innerHTML = "** please enter somthing not less than 50 characters";
        isOk[3] = false;
    }
    else
    {
        isOk[3] = true;
        document.getElementById('errMessage').style.display="none";
        document.getElementById("errMessage").innerHTML = "";
    }

    for(i in isOk)
    {
        if(!(isOk[i]))
            done = false;
            return false;
    }
    if(done)
    {
        //under constructions
        window.location("../index.html");

    }
}
