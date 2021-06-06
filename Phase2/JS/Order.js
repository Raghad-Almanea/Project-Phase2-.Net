

 function data(){

    document.getElementById("name-order").innerHTML=localStorage.getItem("name");
    document.getElementById("price-order").innerHTML=localStorage.getItem("price");
     
 }

 function dataPayment(){
    document.getElementById("name-order").innerHTML=localStorage.getItem("name");
    document.getElementById("price-order").innerHTML=localStorage.getItem("price");

 }

 function payment(){
    localStorage.setItem("name",document.getElementById("name-order").innerHTML);
    localStorage.setItem("price",document.getElementById("price-order").innerHTML);
    location.href="./Payment.html"
 }

 function confirm(){
    localStorage.setItem("name",document.getElementById("name-order").innerHTML);
    localStorage.setItem("price",document.getElementById("price-order").innerHTML);
    location.href="./Confirm.html"

 }