function submitValue(){
    // function ka name 'submit' rakhna sa bhnad araha
event.preventDefault()
// yeh refresh hona sa rokta or input ki value ko hold karka rakhta
    var name = document.getElementById("name")
var email = document.getElementById("email")
var number = document.getElementById("number")
var password = document.getElementById("password")
var c_password = document.getElementById("c-password")
// form validation
if (name.value === ""){
    Swal.fire({
        icon: 'error',
        title: 'Name should not be empty',
        text: 'Please try again.'
    });
      
}
else if (email.value === ""){
    Swal.fire({
        icon: 'error',
        title: 'email should not be empty',
        text: 'Please try again.'
    });
      
}
else if (number.value === ""){
    Swal.fire({
        icon: 'error',
        title: 'email should not be empty',
        text: 'Please try again.'
    });
      
}else if (email.value === ""){
    Swal.fire({
        icon: 'error',
        title: 'email should not be empty',
        text: 'Please try again.'
    });
      
}else if (email.value === ""){
    Swal.fire({
        icon: 'error',
        title: 'email should not be empty',
        text: 'Please try again.'
    });
      
}










// ye esa console nahi hoga qka yeh resfresh horaha bhot tezzi sa
// console.log(name.value,email.value,number.value,password.value,c_password.value)


var gettobjValue = {
    name : name.value,
    email : email.value,
    number : number.value,
    password : password.value,
    cPassword : c_password.value
}
// console.log(gettobjValue)
// ab yeh sab object ka data local storage mai save karainga
//  The relationship between JSON.stringify() and objects is that JSON.stringify() is used to convert JavaScript objects into a JSON string. JSON (JavaScript Object Notation)
//  is a lightweight data interchange format that is often 
//  used for sending data between a server and a web application, or for storing configuration data.
localStorage.setItem("userData", JSON.stringify(gettobjValue));
// Later, when you need to use the data again, you can use JSON.parse() to convert the JSON string 
var getUserDataSaveInLocalStorage = JSON.parse(localStorage.getItem("userData"))
// back into a JavaScript object.
console.log(getUserDataSaveInLocalStorage)//.name,password,cPassword,etc







// or
// return false
}




