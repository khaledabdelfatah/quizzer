var firebaseConfig = {
    apiKey: "AIzaSyD0tMq6ZWGaJcG4VFWcmETbTxO7IOdDE3Q",
    authDomain: "quizzer-a0c6e.firebaseapp.com",
    databaseURL: "https://quizzer-a0c6e.firebaseio.com",
    projectId: "quizzer-a0c6e",
    storageBucket: "quizzer-a0c6e.appspot.com",
    messagingSenderId: "235551414761",
    appId: "1:235551414761:web:cb2e8ef047394bf666d378",
    measurementId: "G-LHDCE10DHV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


//

var firestore = firebase.firestore();
const docRef = firestore.collection("try").doc("name1");
const testbutton = document.getElementById("getbutoon");
testbutton.addEventListener("click", function () {

    firebase.auth().createUserWithEmailAndPassword("eslam@gmail.com", "jhgjhgjhgj").catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
    });

});
/// login 
const autho = firebase.auth();

function login() {

    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
   
    autho.signInWithEmailAndPassword(email, password).catch(function (error) {

        document.getElementById("errMes").innerHTML = error.message;

    }).then(function () {
        if (autho.currentUser) {
            window.location.href = "html-page/profile.html";
        }
    });
}
// login 
