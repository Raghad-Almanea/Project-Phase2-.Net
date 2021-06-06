const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "AdminPhase2" && password === "1234") {
        alert("You have successfully logged in.");
        localStorage.setItem("UserName","AdminPhase2");        
        localStorage.setItem("Password","1234");        
        
        location.href="./Admin.html";
    } else {
        alert("Wrong userName or password");

    }
})

function go(){
   
    var ele = document.getElementsByName('type');
              
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked && ele[i].value=="0")
        location.href="./customerPage.html";
        else
        document.getElementById("logForm").style.display="block";
    }

}

