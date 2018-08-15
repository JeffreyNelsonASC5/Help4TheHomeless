

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("Thank you Dad Moe")
        firebase.database().ref('users/'+user.uid).once("value", function(snapshot){
            const data = snapshot.val()
            console.log(data)
        })
      // User is signed in.
    } else {
       
      // No user is signed in.
    }
  });
