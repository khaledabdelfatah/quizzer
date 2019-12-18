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

// Nav Avatar
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

            document.getElementById("nav-avatar").style.display = "block";
            document.getElementById("nav-noUser").style.display = "none";
            firebase.firestore().collection("User").doc(firebase.auth().getUid()).get().then(function (doc) {
                document.getElementById("profile-name-avatar").innerHTML = 
                doc.data().firstname+" "+doc.data().lastName;
            });
}
});

function logOut(){
    firebase.auth().signOut();
    window.location.href = "html-page/login_form.html";
}