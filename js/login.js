var firebaseConfig = {
    apiKey: "AIzaSyD0tMq6ZWGaJcG4VFWcmETbTxO7IOdDE3Q",
    authDomain: "quizzer-a0c6e.firebaseapp.com",
    databaseURL: "https://quizzer-a0c6e.firebaseio.com",
    projectId: "quizzer-a0c6e",
    storageBucket: "quizzer-a0c6e.appspot.com",
    messagingSenderId: "235551414761",
    appId: "1:235551414761:web:cb2e8ef047394bf666d378",
    measurementId: "G-GBG3VNHGE6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const autho = firebase.auth();

var firestore = firebase.firestore();

var firestorage = firebase.storage();
var storageRef = firestorage.ref();

autho.onAuthStateChanged(function (user) {
    if (user) {
        console.log("there is user");
        firestore.collection("User").doc(autho.currentUser.uid).get().then(function (doc) {
            console.log("in profile");
            if (doc.data().remember_me == true) {
                window.location.href = "profile.html";
            }
        });
    } else {
        console.log("no user here");
    }
});

function login() {

    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    const Remmber = document.getElementById("Remmber").checked;

    autho.signInWithEmailAndPassword(email, password).catch(function (error) {

        document.getElementById("errMes").innerHTML = error.message;

    }).then(function () {
        if (autho.currentUser) {
            if (Remmber) {
                firestore.collection("User").doc(autho.getUid()).update({
                    remember_me: true
                });
            } else {
                firestore.collection("User").doc(autho.getUid()).update({
                    remember_me: false
                });

            }
            window.location.href = "profile.html";
        }
    });
}
