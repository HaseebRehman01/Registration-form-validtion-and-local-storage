// function submitValue(){
//     // function ka name 'submit' rakhna sa bhnad araha
// event.preventDefault()
// // yeh refresh hona sa rokta or input ki value ko hold karka rakhta
//     var name = document.getElementById("name")
// var email = document.getElementById("email")
// var number = document.getElementById("number")
// var password = document.getElementById("password")
// var c_password = document.getElementById("c-password")
// var username = name.value
// // console.log(name)
// // form validation
// if (name.value === ""){
//     Swal.fire({
//         icon: 'error',
//         title: 'Name should not be empty',
//         text: 'Please try again.'
//     });
      
// }
// else if (email.value === ""){
//     Swal.fire({
//         icon: 'error',
//         title: 'email should not be empty',
//         text: 'Please try again.'
//     });
      
// }
// else if (number.value === ""){
//     Swal.fire({
//         icon: 'error',
//         title: 'number should not be empty',
//         text: 'Please try again.'
//     });
      
// }else if (password.value === ""){
//     Swal.fire({
//         icon: 'error',
//         title: 'password should not be empty',
//         text: 'Please try again.'
//     });
// }
//       else if (c_password.value !== password.value){
//         Swal.fire({
//             icon: 'error',
//             title: 'Confirm password should not not ne empty and  equal to password',
//             text: 'Please try again.'
//         });
//       }

// else{
//     Swal.fire({
//         icon: 'success',
//         title: `${username} Your are registered`,
//         showConfirmButton: false,
//         timer: 2000
//       })
      





// // This console.log won't work as the page is refreshing too quickly.
// // console.log(name.value,email.value,number.value,password.value,c_password.value)


// var gettobjValue = {
//     name : name.value,
//     email : email.value,
//     number : number.value,
//     password : password.value,
//     cPassword : c_password.value
// }
// // console.log(gettobjValue)
// // ab yeh sab object ka data local storage mai save karainga
// //  The relationship between JSON.stringify() and objects is that JSON.stringify() is used to convert JavaScript objects into a JSON string. JSON (JavaScript Object Notation)
// //  is a lightweight data interchange format that is often 
// //  used for sending data between a server and a web application, or for storing configuration data.

// localStorage.setItem("userData", JSON.stringify(gettobjValue));

// // Later, when you need to use the data again, you can use JSON.parse() to convert the JSON string 

// // back into a JavaScript object.
// // console.log(getUserDataSaveInLocalStorage)//.name,password,cPassword,etc

// // dashbord work
// //   Use setTimeout to delay the redirection to the dashboard
// setTimeout(function() {
//     window.location.href = "./dashboard.html";
//   }, 2000);
// }
// } 



// function login() {
//     event.preventDefault()
// var email = document.getElementById("email")
// console.log(email.value)
// var password = document.getElementById("password")
// console.log(password.value)
// var getUserDataSaveInLocalStorage = JSON.parse(localStorage.getItem("userData"));
// console.log(getUserDataSaveInLocalStorage)
// //yeh tab chalega jab koi bhi data nahi hoga
// if (!getUserDataSaveInLocalStorage){
//     Swal.fire({
//         icon: 'error',
//         title: 'User not found',
//         text: 'Sign up first'
//         }); 
// }
// if (getUserDataSaveInLocalStorage.email !== email.value ){
// Swal.fire({
// icon: 'error',
// title: 'invalid email',
// text: 'Please try again.'
// });
// }
// else if (getUserDataSaveInLocalStorage.password !== password.value ){
// Swal.fire({
// icon: 'error',
// title: 'invalid password',
// text: 'Please try again.'
// });
// }
// else{
// Swal.fire({
// icon: 'success',
// title: `${getUserDataSaveInLocalStorage.name} Your are Login`,
// showConfirmButton: false,
// timer: 2000
// })


// setTimeout(function() {
// window.location.href = "./dashboard.html";
// }, 2000);
// }
// }





function submitValue() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var password = document.getElementById("password").value;
    var c_password = document.getElementById("c-password").value;

    // Check if there are existing users in local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email is already registered
    var userExists = users.some(user => user.email === email);

    if (userExists) {
        alert('Email is already registered. Please try again with a different email.');
    } else if (password !== c_password) {
        alert('Passwords do not match. Please try again.');
    } else {
        // Add the new user to the users array
        users.push({ name, email, number, password });

        // Update local storage with the new users array
        localStorage.setItem("users", JSON.stringify(users));

        alert(`${name}, you are registered`);

        setTimeout(function () {
            window.location.href = "./login.html";
        }, 2000);
    }
}

    





function login() {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Get the users array from local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    var user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        alert('Invalid email or password. Please try again.');
    } else {
        alert(`${user.name}, you are logged in`);

        setTimeout(function () {
            window.location.href = "./dashboard.html";
        }, 2000);
    }
}