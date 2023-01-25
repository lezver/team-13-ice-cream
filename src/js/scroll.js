let scrollpos = window.scrollY;

const header = document.querySelector('#scroll-btn');
const scrollChange = 1000;

const add_class_on_scroll = () => header.classList.add('scroll-to-hero');
const remove_class_on_scroll = () => header.classList.remove('scroll-to-hero');

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});
