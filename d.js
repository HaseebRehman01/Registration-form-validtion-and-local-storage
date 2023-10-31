function getData() {
    var getUserDataSaveInLocalStorage = JSON.parse(localStorage.getItem("userData"));
 //  console.log(getUserDataSaveInLocalStorage)
     var getdata = document.getElementById("getdata");
     getdata.innerHTML = `
<h1>Data</h1>
     `;
 }
 getData()


// logout
function redirection(){
    // localStorage.clear()
    window.location.href ="./index.html"
}
function logout(){
    setTimeout(redirection,1000)
}
