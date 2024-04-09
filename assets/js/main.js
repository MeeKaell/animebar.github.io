const navbar = document.getElementById('navbarBreakpoint');
const checkbox = document.getElementById('checkbox');
const navContainer = document.querySelector('.navbar-container');


// nav menu
checkbox.addEventListener('click', function () {
    if (checkbox.checked) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
})

// animation navbar
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        navContainer.style.backgroundColor = 'rgb(8, 8, 8)';
    } else {
        navContainer.style.backgroundColor = 'transparent';
    }
})

// navbar show dan hide
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    var {scrollY} = window;
    if (scrollY > lastScrollTop) {
        navContainer.classList.remove("visible");
    } else if (scrollY < lastScrollTop) {
        navContainer.classList.add("visible");
    }

    lastScrollTop = scrollY <= 0 ? 0 :  scrollY;
}, {
    passive: true
})