const nav = document.querySelector("nav");

function teste(){
    if (window.scrollY >= 50) {
        nav.classList.add('scroll-nav');
    }else{
        nav.classList.remove('scroll-nav');
    }
}

window.addEventListener("scroll", teste);

/*############################################################################################*/
class MobileNavbar{
    constructor(mobileMenu, navList, navLinks, navColor){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.navColor = document.querySelector(navColor);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    
    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 7 + 0.3
                  }s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.navColor.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
    "nav"
);

mobileNavbar.init();

/*############################################################################################*/
let time=5000; 
let index=0;
const images = document.querySelectorAll("#galeria figure img");
const max = images.length;

function nextImg(){
    images[index].classList.add("inativo");
    index++;
    
    if(index >= max){
        index=0;
    }
    
    images[index].classList.remove("inativo");
}

function start (){
    setInterval(()=> {
    //troca de imagem
        nextImg()
    }, time)
}

window.addEventListener("load", start);

/*############################################################################################*/


/*############################################################################################*/


