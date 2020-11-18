/**
 * SAVE LIKED PRODUCTS
 * Select all of the like buttons, listen to the click element on every "like-btn" 
 * and the save the key of the "like-btn" to the localStorage.
 * Add the class "liked" if the button was clicked.
 * Check on reload if data is stored and add the liked class again
 * 
 * https://www.w3schools.com/jsref/prop_win_localstorage.asp
 * https://developer.mozilla.org/de/docs/Web/API/Window/localStorage
 * 
 */

document.getElementsByClassName("container mx-auto flex items-center flex-wrap pt-4 pb-12")[0].addEventListener('click', function submit(event) 
{
    event.preventDefault();
});
var all = document.getElementsByClassName("like-btn");

for (let i = 0; i < all.length; i++) 
{if (localStorage.getItem('liked['+i+']')==i)
    { 
        all[i].classList.add('liked');
    }    
all[i].addEventListener('click', function submit(event)
    {  if (all[i].classList.contains('liked')) 
        {   localStorage.removeItem('liked['+i+']')
            all[i].classList.remove('liked');
            console.log(localStorage.getItem('liked['+i+']'));
        } else 
            {   localStorage.setItem('liked['+i+']',i);
                all[i].classList.add('liked');
                console.log(localStorage.getItem('liked['+i+']'));
            }           
    })
}   

