/**
 * CSS-ANIMATIONS
 * 1. Toggle the class "hidden" from the searchbar element, when the user clicks search button
 * 2. Clear the input by clicking the "x" button
 * 
 */

var searchbar = document.getElementsByClassName("px-6 w-full relative text-gray-600")[0];
//searchbar.className +=" hidden";
searchbar.classList.toggle("hidden");

var searchbtn = document.getElementsByClassName("search-btn pl-3 inline-block no-underline hover:text-black")[0];
searchbtn.addEventListener("click", myFunction);
function myFunction(event){
    event.preventDefault();
    searchbar.classList.toggle('hidden');
}

var closebutton = document.getElementsByTagName("button")[0];
var inputsearch = document.getElementsByTagName("input")[0];
closebutton.addEventListener("click", myCloseFunction);
function myCloseFunction(){    
    inputsearch.value="";
}
 


    
   
    

