/**
 * SCROLL TO TOP BUTTON
 * 1. add the class "visible" to the element with the id "return-to-top", when the user scrolled at least the window height
 * 2. when the user clicks the button, scroll the page all the way up to the start
 * 
 */

//scrollToTopBtn=document.getElementById('return-to-top');
var scrollToTopBtn= document.querySelector(".visible")
var rootElement = document.documentElement

function handleScroll() {
  // do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.80) {
    //show button
    scrollToTopBtn.style.display = "block"
  } else {
    //hide button
    scrollToTopBtn.style.display = "none"
  }
}

function scrollToTop() {
  //scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)