!function(){var e;new Swiper(".swiper-reviews",{slidesPerView:1,spaceBetween:10,loop:!0,simulateTouch:!0,touchRatio:2,grabCursor:!0,breakpoints:{480:{spaceBetween:-95},610:{spaceBetween:-160},768:{spaceBetween:0},1200:{spaceBetween:-100},1440:{spaceBetween:-200,touchRatio:3}},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},scrollbar:{el:".swiper-scrollbar"},autoplay:{delay:4e3,stopOnLastSlide:!1,disableOnInteraction:!0}}),new Swiper(".swiper-gallery",{speed:750,slidesPerView:1,spaceBetween:10,loop:!0,effect:"fade",simulateTouch:!0,touchRatio:3,grabCursor:!0,scrollbar:{el:".swiper-scrollbar"},autoplay:{delay:4e3,stopOnLastSlide:!1,disableOnInteraction:!1}});"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),c=0;o[c]&&o[c]!==t;)++c;return Boolean(o[c])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))}));var t=document.querySelector("#hamb"),o=document.querySelector("#popup"),c=(document.body,document.querySelector("#menu").cloneNode(1));function a(){o.classList.remove("open"),t.classList.remove("active")}t.addEventListener("click",(function(e){e.preventDefault(),o.classList.toggle("open"),t.classList.toggle("active"),o.appendChild(c)})),Array.from(c.children).forEach((function(e){e.addEventListener("click",a)}))}();
//# sourceMappingURL=index.da02c9b0.js.map