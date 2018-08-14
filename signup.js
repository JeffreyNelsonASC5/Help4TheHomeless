function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

let submit = document.getElementById("submit");
//console.log(submit);
submit.addEventListener("click", updateDB)

const database = firebase.database().ref();

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

    const value = {
       FIRSTNAME: firstname,
       LASTNAME: lastname,
       EMAIL: email,
       PHONENUMBER: phonenumber,
       ADDRESS: address,
       EMERGENCYCONTACT: emergencycontact,
       USERNAME: username,
       PASSWORD: password,
       REPEATPASSWORD: repeatpassword,
   }
   database.push(value);
   console.log("hey");
}