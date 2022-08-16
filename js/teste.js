const nav = document.querySelector('nav');

function teste(){
    if (window.scrollY >= 50) {
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
}

window.addEventListener('scroll', teste);
