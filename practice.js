
var firebaseConfig = {
    apiKey: "AIzaSyA2W5XAWlYe0DNoZMNFrdUSPygH0I6VJT4",
    authDomain: "kwitter-class-test.firebaseapp.com",
    databaseURL: "https://kwitter-class-test-default-rtdb.firebaseio.com",
    projectId: "kwitter-class-test",
    storageBucket: "kwitter-class-test.appspot.com",
    messagingSenderId: "558932204382",
    appId: "1:558932204382:web:998c6a599457a326120dcf",
    measurementId: "G-QY2HKPX661"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}