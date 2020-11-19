/**
 * VALIDATE & SEND FORM
 * 1. Listen to the submit of the form element with the id "support-form"
 * 2. Validate on submit, that:
 *  2.1 the checkbox with the id "input-privacy" is checked
 *  2.2 all other inputs are not empty. If they're empty, add the class "border-red-500" to every empty input
 * 3. Send the form with the library axios as an POST REQUEST to https://hsh.blnq.dev/javascript-basics/form-fetch.php
 * 
 * https://github.com/axios/axios
 
 */
 let form=document.getElementById('support-form');
 let fullName=document.getElementById('input-fullname'); 
 let tel=document.getElementById('input-number');
 let email=document.getElementById('input-email');
 let mesaj=document.getElementById('input-message');
 let privacyCheckbox=document.getElementById('input-privacy');

 let xhr=new XMLHttpRequest();
 function removeClass(element){
    element.classList.remove("border-red-500");
 }
 
 function changeClass(element){
    element.classList.add("border-red-500");
 }

 form.addEventListener('submit',function(event){
    console.log(isNaN(tel.value));
     event.preventDefault();
     if(privacyCheckbox.checked==false)
     {
        alert('Privacy sollte angenommen werden.');
     }
     else if(fullName.value=="" || tel.value=="" || email.value=="" || mesaj.value=="" )
     {
        alert('Das form muss ausgefüllt werden.');
        if(fullName.value=="")
        {
            changeClass(fullName); 
        } 
        else
        {
            removeClass(fullName);
        }
        if(tel.value=="")
        {
            changeClass(tel); 
        }
        else
        {
            removeClass(tel);
        }
        if(email.value=="")
        {
            changeClass(email); 
        }
        else
        {
            removeClass(email);
        }
        if(mesaj.value=="")
        {
            changeClass(mesaj); 
        }
        else
        {
            removeClass(mesaj);
        }
     }
     else if(isNaN(tel.value))
     {
        
        document.getElementById('tel').innerHTML='Sie müssen Zahlen eingeben.';
     }
     else
     {
         
         let data=new FormData(this);
         xhr.onreadystatechange=function(){
             if(xhr.readyState==XMLHttpRequest.DONE)
             {
                 console.log(xhr.responseText);
                 alert("Das Form wurde erfolgreich geschikt.");
                 document.getElementById('tel').innerHTML='';
             }
         }
         xhr.open('post','https://hsh.blnq.dev/javascript-basics/form-fetch.php');
         xhr.send(data);

     }
  
 });
 
 