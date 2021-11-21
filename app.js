
let hamberger = document.querySelector('.hamberger');
let close = document.querySelector('.close');
let mobileNav = document.querySelector('.mobile-nav');
let menu = document.querySelector('.menu');
 
hamberger.addEventListener('click', function(){
    mobileNav.classList.add('open');
});

close.addEventListener('click', function(){
    mobileNav.classList.remove('open');
});

menu.addEventListener('click', function(){
    mobileNav.classList.remove('open');
})

