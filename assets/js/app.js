// preloader
const preloader = document.getElementById("preloader")
setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
    document.body.classList.remove("overflow_hidden")
}, 3000)

let openNav = document.querySelector(".openNav");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");

function navbar() {
    openNav.classList.toggle("end-0");
    span1.classList.toggle("crossLine1");
    span2.classList.toggle("crossLine2");
    span3.classList.toggle("d-none");
    document.querySelector("body").classList.toggle("overflow-hidden");
}

function navbar2() {
    openNav.classList.toggle("end-0");
    span1.classList.toggle("crossLine1");
    span2.classList.toggle("crossLine2");
    span3.classList.toggle("d-none");
    document.querySelector("body").classList.remove("overflow-hidden");
}

// back to top //
let backToTop = document.getElementById('backToTop')
 backToTop.addEventListener("click", function () {
 window.scrollTo(0, 0,{behavior: 'smooth'})
});
window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        backToTop.classList.remove('d_none');
        backToTop.classList.add('d_block');
    } else {
        backToTop.classList.remove('d_block');
        backToTop.classList.add('d_none');
    }
});