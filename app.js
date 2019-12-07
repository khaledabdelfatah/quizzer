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
  const docRef=firestore.collection("Hello").doc("namei");
//   const testbutton=document.getElementById("getbu");
//   testbutton.addEventListener("click",function(){
//  console.log("Im here Finally***************************************");
//  docRef.set({
// name:"yarab"
//  });


//   })

//   
var loadbu=document.getElementById("getbutoon");
loadbu.addEventListener("click",function(){
docRef.get().then(function(doc){
 if(doc&&doc.exists){
     const mydata=doc.data();
     console.log(mydata.name);
     
 }   
}
    )

})
