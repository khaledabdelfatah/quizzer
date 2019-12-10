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

autho.onAuthStateChanged(function (user) {

    if (user) {

        firestore.collection("User").doc(autho.getUid()).get().then(function (doc) {
            if (doc.exists) {

                if (doc.data().remmber == true) {
                    window.location.href = "profile.html";
                } else {
                    autho.signOut();
                }

            }
        })
    }
});


function login() {

    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    const Remmber = document.getElementById("Remmber").checked;

    autho.signInWithEmailAndPassword(email, password).catch(function (error) {

        document.getElementById("errMes").innerHTML = error.message;

        if (Remmber) {
            firestore.collection("User").doc(autho.getUid()).add({
                remmber: true
            });
        } else {
            firestore.collection("User").doc(autho.getUid()).add({
                remmber: false
            });

        }
    });

    autho.onAuthStateChanged(function (user) {
        if (user) {

            window.location.href = "profile.html";

        } else {

        }
    });
}
//
//firestore.collection("User").get().then(function(querySnapshot) {
//    querySnapshot.forEach(function(doc) {
//       console.log(doc.data());
//    });
//});
