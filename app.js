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
  var firestore=firebase.firestore();
  var fireauth=firebase.auth();
//  Start  Creating Account 
function creat_account(){

var new_user_email=document.getElementById("Email").value;
var new_user_password=document.getElementById("Password").value;
fireauth.createUserWithEmailAndPassword(new_user_email, new_user_password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
// ...
  })
 
  let UID= firebase.auth().currentUser.getIdToken;
  console.log(UID);
 const docRef=firestore.collection("User").doc(UID);
 docRef.set({
     name:"Test NAme num55555ber with singout",
     });
  
  }

  