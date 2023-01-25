let scrollpos = window.scrollY;

const header = document.querySelector('.scroll-header');
const scrollChange = 1;

const add_class_on_scroll = () => header.classList.add('scroll-to-header');
const remove_class_on_scroll = () =>
  header.classList.remove('scroll-to-header');

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});
