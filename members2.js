function createPersonDiv(i){
    //getting current Person as an object(line 3)
    let currPerson = data.results[i];
    //creating an empty div node to add to later
    let MainContent = document.createElement("div");
    let fullname = currPerson.name.first + " " + currPerson.name.last;
    let email = currPerson.email;
    console.log(email);
    let phone = currPerson.phone;
    console.log(phone);
    let info = currPerson.location.street + " " + currPerson.location.city + " " + currPerson.location.state;
    let image = currPerson.picture.medium
    let NameNode = document.createElement("p");
    let imgNode = document.createElement("img");
    imgNode.src = image;
    MainContent.appendChild(imgNode);
    NameNode.innerHTML = fullname;
    MainContent.appendChild(NameNode);
    let emailNode = document.createElement("p");
    emailNode.innerHTML = email;
    MainContent.appendChild(emailNode)
    let phoneNode = document.createElement("p");
    phoneNode.innerHTML = phone;
    MainContent.appendChild(phoneNode);
    let addressNode = document.createElement("p");
    addressNode.innerHTML = info;
    MainContent.appendChild(addressNode);
    let body = document.querySelector("body");
    body.appendChild(MainContent);
    let hrNode = document.createElement("hr");
    MainContent.appendChild(hrNode);
    MainContent.style.color= "white";
}
for (let i= 0; i<data.results.length; i++){
    createPersonDiv(i);
}

function openNav() {
   document.getElementById("mySide mnbvnav").style.width = "250px";
}

let Submit= document.getElementById("Submit")

Submit.addEventListener("Click", sendJSON )

function sendJSON(){

}
const database = Help4TheHomeless.database().ref();

function updateDB(event){
   event.preventDefault();
   const firstname  = firstnameElement.value;
   const lastname   = lastnameElement.value;
   const email      = emailElement.value;
   const phonenumber= phonenumberElement.value;
   const address    = addressElement.value;
   
   
   firstnameElement.value = "";
   lastnameElement.value = "";
   EmailElement.value = "";
   phonenumberElement.value = "";
   addressElement.value = "";

   

 

   const value = {
       FIRSTNAME: firstname,
       LASTNAME: lastname,
       
       EMAIL: email,
       PHONENUMBER: phonenumber,
       ADDRESS: address,
       
   }
   database.push(value);




}
