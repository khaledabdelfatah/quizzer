//when the user click edit
function toEdit(id) {
    var sps = ["span-first-name", "span-second-name", "span-email",
                "span-phone", "span-profession", "span-address",
                "span-city", "span-university", "span-specialty",
                "span-universityinst", "span-specialtyinst", "span-password"]; //;
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
function clear(id)
{
    var child1 = document.getElementById(id).childNodes[3];
    var child11 = child1.childNodes;
    child11[1].value = "";
    child11[5].style.display = "none";
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
            clear("span-first-name");
        }
    }
    else if (id === "Lname") {
        if (validationLname()) {
            document.getElementById("elname").innerHTML = document.getElementById("Lname").value;
            document.getElementById("second-name").style.display = "table-row";
            document.getElementById("span-second-name").style.display = "none";
            clear("span-second-name");
        }
    }
    else if (id === "Email") {
        if (validationEmail()) {
            document.getElementById("eemail").innerHTML = document.getElementById("Email").value;
            document.getElementById("email").style.display = "table-row";
            document.getElementById("span-email").style.display = "none";
            document.getElementById("eemail").setAttribute("href", document.getElementById("Email").value);
            clear("span-email");
        }
    }
    else if (id === "Phone") {
        if (validationPhone()) {
            document.getElementById("ephone").innerHTML = document.getElementById("Phone").value;
            document.getElementById("phone").style.display = "table-row";
            document.getElementById("span-phone").style.display = "none";
            clear("span-phone");
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
    else if (id === "Address") {
        if (ValidationAdress()) {
            document.getElementById("eaddress").innerHTML = document.getElementById("Address").value;
            document.getElementById("address").style.display = "table-row";
            document.getElementById("span-address").style.display = "none";
            clear("span-address");
        }
    }
    else if (id === "City") {
        if (ValidationCity()) {
            document.getElementById("ecity").innerHTML = document.getElementById("City").value;
            document.getElementById("city").style.display = "table-row";
            document.getElementById("span-city").style.display = "none";
            clear("span-city");
        }
    }
    else if (id === "University") {
        if (ValidationUniversity()) {
            document.getElementById("euniversity").innerHTML = document.getElementById("University").value;
            document.getElementById("university").style.display = "table-row";
            document.getElementById("span-university").style.display = "none";
            clear("span-university");
        }
    }
    else if (id === "Specialty") {
        if (ValidationSpecialty()) {
            document.getElementById("especialty").innerHTML = document.getElementById("Specialty").value;
            document.getElementById("specialty").style.display = "table-row";
            document.getElementById("span-specialty").style.display = "none";
            clear("span-specialty");
        }
    }
    else if (id === "Universityinst") {
        if (ValidationUniversityinst()) {
            document.getElementById("euniversityinst").innerHTML = document.getElementById("Universityinst").value;
            document.getElementById("universityinst").style.display = "table-row";
            document.getElementById("span-universityinst").style.display = "none";
            clear("span-universityinst");
        }
    }
    else if (id === "Specialtyinst") {
        if (ValidationSpecialtyinst()) {
            document.getElementById("especialtyinst").innerHTML = document.getElementById("Specialtyinst").value;
            document.getElementById("specialtyinst").style.display = "table-row";
            document.getElementById("span-specialtyinst").style.display = "none";
            clear("span-specialtyinst");
        }
    }
    else if (id === "Password") {
        if (ValidationPass()) {
            // document.getElementById("epassword").innerHTML = document.getElementById("Password").value;
            document.getElementById("password").style.display = "table-row";
            document.getElementById("span-password").style.display = "none";
            clear("span-password");
        }
    }
    
}
