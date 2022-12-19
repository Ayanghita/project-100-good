var firebaseConfig = {
    apiKey: "AIzaSyAkciIVsOeaMR9DeXBxaKnZg1G1RYhtE6o",
    authDomain: "game-c87c5.firebaseapp.com",
    databaseURL: "https://game-c87c5-default-rtdb.firebaseio.com",
    projectId: "game-c87c5",
    storageBucket: "game-c87c5.appspot.com",
    messagingSenderId: "509472898898",
    appId: "1:509472898898:web:c2c019ea5b21762358448b"
  };
  
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }