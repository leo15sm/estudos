function scrollnav(){
    const nav = document.querySelector("nav");

    if (window.scrollY >= 50) {
        nav.classList.add('scroll-nav');
    }else{
        nav.classList.remove('scroll-nav');
    }
}

window.addEventListener("scroll", scrollnav);

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
    
    //faz a animação de entrada e abertura de mobile-nav
    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 7 + 0.3
                  }s`);
        });
    }
    
    //Evento de ativo ao clicar
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.navColor.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    //cria o evento de click
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    //verifica se houve click
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
let time=3000; //milisegundos 
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


