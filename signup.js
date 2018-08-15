function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

let submit = document.getElementById("submit");
//console.log(submit);
if(submit)
    submit.addEventListener("click", updateDB)


function updateDB(event){
   event.preventDefault();
   let firstnameDOM = document.getElementById("firstname")
   let firstname  = firstnameDOM.value;
   let lastnameDOM = document.getElementById("lastname")
   let lastname = lastnameDOM.value;  
   let emailDOM = document.getElementById("email")
   let email = emailDOM.value;
   let phonenumberDOM = document.getElementById("phonenumber")
   let phonenumber = phonenumberDOM.value;   
   let addressDOM = document.getElementById("address")
   let address = addressDOM.value;
   let emergencycontactDOM= document.getElementById("emergencycontact")
   let emergencycontact = emergencycontactDOM.value;
   let usernameDOM = document.getElementById("username")
   let username= usernameDOM.value;
   let passwordDOM = document.getElementById("password")
   let password = passwordDOM.value;
   let repeatpasswordDOM = document.getElementById("repeatpassword")
   let repeatpassword = repeatpasswordDOM.value;
   
   console.log(username, password);

   
   firstnameDOM.value = "";
   lastnameDOM.value = "";
   emailDOM.value = "";
   phonenumberDOM.value = "";
   addressDOM.value = "";
   emergencycontactDOM.value = "";
   usernameDOM.value = "";
   passwordDOM.value = "";
   repeatpasswordDOM.value = "";

   firebase.auth().createUserWithEmailAndPassword(email, password).then(function(data){
       console.log("register")
    const user = firebase.auth().currentUser; // Gets current user
    const userDatabase = firebase.database().ref("users/" + user.uid).set({
        FIRSTNAME: firstname,
        LASTNAME: lastname,
        EMAIL: email,
        PHONENUMBER: phonenumber,
        ADDRESS: address,
        EMERGENCYCONTACT: emergencycontact,
        USERNAME: username,
        PASSWORD: password,
        REPEATPASSWORD: repeatpassword,
    })
    });
   console.log("hey");
}
const loginButton = document.getElementById("login-button");
const emailData = document.getElementById("email");
const passwordData = document.getElementById("password");

if(loginButton && emailData && passwordData) {
    console.log("cool")
    console.log(loginButton)
    loginButton.addEventListener("click", function(e) {
        console.log("hnnng")
        e.preventDefault();

    // Firebase sign in below
        firebase.auth().signInWithEmailAndPassword(emailData.value, passwordData.value).then(function(data) {
            console.log(data)
        });
    }, false);
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("Thank you Dad Moe")
      // User is signed in.
    } else {
        console.log("Fuck you Moe")
      // No user is signed in.
    }
  });