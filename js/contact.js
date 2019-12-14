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
        {
            done = false;
            return false;
        }
    }
    if(done)
    {
        var anii = document.getElementById("mail-box");
        anii.style.width = "150px";
        anii.style.height = "150px";
        anii.style.top = "-800px";
        anii.style.webkitTransition = "top 5s";
        anii.style.transition = "top 5s";
        
     }
}


function rotate()
{
    var ani = document.getElementById("mail-box");
    ani.style.transform = "rotateY(180deg)";
}
function rotateback()
{
    var ani = document.getElementById("mail-box");
    ani.style.transform = "rotateY(0deg)";
}
 