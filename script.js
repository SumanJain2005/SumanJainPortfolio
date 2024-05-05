/*================Navbar Toggle Button===================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}
/*================Scroll section link===================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top <= offset + height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        };
    });    

/*==================sticky navbar==========================*/ 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
/*===================Remove toggle icon and navbar============*/
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};
/*===============Scroll reveal JS==========================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content , heading',{origin: 'top'});
 ScrollReveal().reveal('.home-img , .services-container , .portfolio-box , .timeline',{origin: 'bottom'});
 ScrollReveal().reveal('.about-image , .left-container',{origin: 'left'});
 ScrollReveal().reveal('.about-content , .right-container',{origin: 'bottom'});
 
/*===============Typed JS==========================*/
const typed = new Typed('.multiple-text', {
    strings: ['FrontEnd Dev','Web Designer','Aspiring Dev'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
/* */
const timeline = document.querySelector('.timeline');

window.addEventListener('scroll', () => {
    const timelinePosition = timeline.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (timelinePosition < windowHeight * 0.75) {
        timeline.classList.add('animate');
    }
});
