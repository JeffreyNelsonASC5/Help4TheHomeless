
    const name = data.USERNAME;
    const message = data.MESSAGE;
    let p = document.createElement("p");
    p.innerText = `${name}: ${message}`;
      allMessages.appendChild(p);

// Set database "childadded" event listener here

let submit = document.getElementById("submit");
//console.log(submit);
if(submit)
    submit.addEventListener("click", updateDB)


function updateDB(event){
   event.preventDefault();
   let boroughDOM = document.getElementById("borough")
   let borough  = boroughDOM.value;
   let dayDOM = document.getElementById("day")
   let day = dayDOM.value;  
   let howlongDOM = document.getElementById("howlong")
   let howlong = howlongDOM.value;
   let handoutDOM = document.getElementById("handout")
   let handout = handoutDOM.value;
   
   
   console.log(username, password);

   
   boroughDOM.value = "";
   dayDOM.value = "";
   howlongDOM.value = "";
   handoutDOM.value = "";
   

   firebase.auth().createUserWithEmailAndPassword(email, password).then(function(data){
       console.log("register")
    const user = firebase.auth().currentUser; // Gets current user
    const userDatabase = firebase.database().ref("users/" + user.uid).set({
        BOROUGH: borough,
        DAY: day,
        HOWLONG: howlong,
        HANDOUT: handout,
       
    })
    });
   console.log("hey");
}
const send = document.getElementById("send");
const emailData = document.getElementById("email");
const passwordData = document.getElementById("password");

if(send && emailData && passwordData) {
    console.log("cool")
    console.log(send)
    loginButton.addEventListener("click", function(e) {
        console.log("hnnng")
        e.preventDefault();
