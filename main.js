function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
let submit= document.getElementById("submit");
console.log(submit);
submit.addEventListener("click", updateDB)

const database = firebase.database().ref();

function updateDB(event){
   event.preventDefault();
   let firstnameDOM = document.getElementById("firstname")
   let firstname  = firstnameDOM.value;
   let lastnameDOM = document.getElementById("lastname")
   let lastname = lastnameDOM.value;  
   let email = document.getElementById("email")
   let email = emailDOM.value;
   let phonenumber = document.getElementById("phonenumber")
   let phonenumber = phonenumberDOM.value;
   let address = document.getElementById("address")
   let address = addressDOM.value;
   let emergencycontact= document.getElementById("emergencycontact")
   let emergencycontact = emergencycontactDOM.value;

   


   firstname = "";
   lastname = "";
   Email = "";
   phonenumber = "";
   address = "";
   emergencycontact = "";
   

 

   const value = {
       FIRSTNAME: firstname,
       LASTNAME: lastname,
       EMAIL: email,
       PHONENUMBER: phonenumber,
       ADDRESS: address,
       EMERGENCYCONTACT: emergencycontact,


   }
   database.push(value);
   console.log("hey")
}