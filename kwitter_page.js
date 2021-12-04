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

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      }