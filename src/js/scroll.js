let scrollpos = window.scrollY

const header = document.querySelector("#test")
const scrollChange = 1000

const add_class_on_scroll = () => header.classList.add("scrolll")
const remove_class_on_scroll = () => header.classList.remove("scrolll")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})