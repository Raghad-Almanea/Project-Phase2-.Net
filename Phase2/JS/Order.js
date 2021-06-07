
function search(){
   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById("myInput");
   filter = input.value.toUpperCase();
   table = document.getElementById("data_table2");
   tr = table.getElementsByTagName("tr");
   for (i = 0; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td")[0];
     if (td) {
       txtValue = td.textContent || td.innerText;
       if (txtValue.toUpperCase().indexOf(filter) > -1) {
         tr[i].style.display = "";
       } else {
         tr[i].style.display = "none";
       }
     }       
   }
 
}


function buy_row(no)
{
var name_val=document.getElementById("name_row"+no);
var price_val=document.getElementById("price_row"+no);
   localStorage.setItem("name",name_val.innerHTML);
   localStorage.setItem("price",price_val.innerHTML);
   location.href="./OrderDetails.html"

}
 
 
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