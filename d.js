function showuserdata(){
    var getUserDataSaveInLocalStorage = JSON.parse(localStorage.getItem("userData"))
    var showuserdata = document.querySelector(".showuserdata")
    showuserdata.innerHTML = `
    <ul>
    <li>Name : ${getUserDataSaveInLocalStorage.name}</li>
    <li>Email : ${getUserDataSaveInLocalStorage.email}</li>
    <li>Number :${getUserDataSaveInLocalStorage.number}</li>
    
    
    
    </ul>
    `
    }
    showuserdata()



    
    function redirection(){
        localStorage.clear()
        window.location.href ="./index.html"
    }
    function logouts(){
        setTimeout(redirection,1000)
    }
    // var logout = document.getElementById("logout")
