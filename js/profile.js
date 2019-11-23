//when the user click edit
function toEdit(id) {
    var sps = ["span-first-name", "span-second-name", "span-email", "span-phone", "span-profession", "span-address", "span-password"]
    document.getElementById(id).style.display = "none";
    document.getElementById("span-" + id).style.display = "table-row";
    for (i in sps) {
        if (sps[i] !== ("span-" + id)) {
            document.getElementById(sps[i]).style.display = "none";
            document.getElementById(sps[i].slice(5)).style.display = "table-row";
            if (sps[i] !== "span-password") {
                var child1 = document.getElementById(sps[i]).childNodes[3];
                var child11 = child1.childNodes;
                child11[1].value = "";
                child11[5].style.display = "none";
            }
        }
    }
}
//Under construction... to change active class on the side par
function changing(id) {
    var conts = ["myTabContent", "quizzesContent", "reviewContent", "mediaContent", "newsContent"];
    document.getElementById(id).style.display = "block";
    for (i in conts) {
        if (conts[i] != id) {
            document.getElementById(conts[i]).style.display = "none";
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
            document.getElementById("efname").innerHTML = document.getElementById("Fname").value;
            document.getElementById("first-name").style.display = "table-row";
            document.getElementById("span-first-name").style.display = "none";
        }
    }
    else if (id === "Lname") {
        if (validationLname()) {
            document.getElementById("elname").innerHTML = document.getElementById("Lname").value;
            document.getElementById("second-name").style.display = "table-row";
            document.getElementById("span-second-name").style.display = "none";
        }
    }
    else if (id === "Email") {
        if (validationEmail()) {
            document.getElementById("eemail").innerHTML = document.getElementById("Email").value;
            document.getElementById("email").style.display = "table-row";
            document.getElementById("span-email").style.display = "none";
            document.getElementById("eemail").setAttribute("href", document.getElementById("Email").value);
        }
    }
    else if (id === "Phone") {
        if (validationPhone()) {
            document.getElementById("ephone").innerHTML = document.getElementById("Phone").value;
            document.getElementById("phone").style.display = "table-row";
            document.getElementById("span-phone").style.display = "none";
        }
    }
    //Under construction...
    // else if (id === "Profession")
    // {
    //     if(validationProfession())
    //     {
    //         document.getElementById("eprofession").innerHTML = document.getElementById("Phone").value;
    //         document.getElementById("profession").style.display = "table-row";
    //         document.getElementById("span-profession").style.display = "none";
    //     }
    // }
    else if (id === "Password") {
        if (ValidationPass()) {
            // document.getElementById("epassword").innerHTML = document.getElementById("Password").value;
            document.getElementById("password").style.display = "table-row";
            document.getElementById("span-password").style.display = "none";
        }
    }
    else if (id === "Address") {
        if (ValidationAdress()) {
            document.getElementById("eaddress").innerHTML = document.getElementById("Address").value;
            document.getElementById("address").style.display = "table-row";
            document.getElementById("span-address").style.display = "none";
        }
    }
}
