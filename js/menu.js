/**
 * CSS-ANIMATIONS
 * Toggle the class "hidden" from the element with the id "menu", when the user clicks on the element with the id "menu-btn"
 * 
 */
let menuElement=document.getElementById('menu');
let menuButton=document.getElementById('menu-btn');
menuButton.addEventListener('click',function(){
    console.log(menuElement.style.display);
    if(menuElement.style.display=='block')
    {
        menuElement.style.display='none';
    }
    else
    {
        menuElement.style.display='block';
        // 
    }
})