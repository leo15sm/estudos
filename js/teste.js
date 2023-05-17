const nav = document.querySelector('nav');

function teste(){
    if (window.scrollY >= 50) {
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
}

window.addEventListener('scroll', teste);

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

window.addEventListener('load', start);



