//Elementos

const logou = document.getElementById('logout');
const menunavimg = document.getElementById('navmenuimg');
const navmaster = document.getElementById('navmaster');
const navafter = document.getElementById('navafter');
const navghost = document.getElementById('navghost');
const heroo = document.getElementById('heroo');
const footer = document.getElementById('footer');
const footertwo = document.getElementById('footertwo');
const campanabox = document.getElementById('campanabox');
const campanabutton = document.getElementById('campanabutton');
const videocampana = document.getElementById('videocampana');
const uneteequipo = document.getElementById('uneteequipo');
const facturacion = document.getElementById('facturacion');



let footerbot = 0;

        //Language
        const laselecti = document.getElementById('laselecti');
        document.getElementById('espbtn').addEventListener('click',laselectesp);
        document.getElementById('engbtn').addEventListener('click',laselecting);
        let language = 0;
        //0Null-1ESP-2ING
        let lenmeddd = 60;
       

let action = 0;

//Nav botones 

const campanasection = document.getElementById('campanasection');
const btnsection1 = document.getElementById('btnsection1');
const btnsection2 = document.getElementById('btnsection2');
const btnsection3 = document.getElementById('btnsection3');
const btnsection4 = document.getElementById('btnsection4');
const btnsection5 = document.getElementById('btnsection5');
const btnsection6 = document.getElementById('btnsection6');
const btnsection7 = document.getElementById('btnsection7');
const btnsection8 = document.getElementById('btnsection8');
const btnsection9 = document.getElementById('btnsection9');
const btnsection10 = document.getElementById('btnsection10');

campanasection.addEventListener('click',tncampana);
btnsection1.addEventListener('click',tnsection1);
btnsection2.addEventListener('click',tnsection2);
btnsection3.addEventListener('click',tnsection3);
btnsection4.addEventListener('click',tnsection4);
btnsection5.addEventListener('click',tnsection5);
btnsection6.addEventListener('click',tnsection6);
btnsection7.addEventListener('click',tnsection7);
btnsection8.addEventListener('click',tnsection8);
btnsection9.addEventListener('click',tnsection9);
btnsection10.addEventListener('click',tnsection10);


//traveler
const travelerbox = document.getElementById('travelerbox');
const travelerfeedback = document.getElementById('travelerfeedback');
const travelerimg = document.getElementById('travelerimg');
const linkfeed = document.getElementById('linkfeed');

let travelerstat = 0;
let travact = 0;

//temporizador
let tiempo = 0;
let tempactive = 0;


//menu secciones

const menupage = document.getElementById('menupage');
const buttonmenu = document.getElementById('buttonmenu');
const menuboxx = document.getElementById('menubox');
buttonmenu.addEventListener('click', tnsection3)


//intro
window.onload = function() {
    setTimeout(function(){
        logou.style.opacity = "0";
        setTimeout(function(){
            logou.style.display = "none";
            footer.style.display = "flex";
            heroo.style.display = "flex";
            travelerbox.style.display = "flex";
            footerbot = 0 - footertwo.clientHeight - 40;
            footer.style.bottom = footerbot + "px";
            if (language==0){
                leselect();
            } else {
                starter();
            }
        },1000)
    },100)
};

function leselect() {
    laselecti.style.display = "flex";
    setTimeout(function(){
        laselecti.style.opacity = "1";
    },50)
}
function laselectesp (){
    if (action== 0){
        action = 1;
        language = 1;
        laselectconfirm();
        setespanol();
    }
}
function laselecting (){
    if (action== 0){
        action = 1;
        language = 2;
        laselectconfirm();
        setenglish();
    }
}
function laselectconfirm() {
    laselecti.style.opacity = "0";
    setTimeout(function(){
        laselecti.style.display = "none";
        starter();
        action=0;
    },1000)
}



function starter() {
    setTimeout(function(){
        menunavimg.style.display = "flex";
        menunavimg.style.opacity = "1";
        navmaster.style.background = "#dda245";
        setTimeout(function(){
            navmaster.style.width = "100px";
            navmaster.style.height = "100px";
            navmaster.style.borderRadius = "50%";
            navmaster.style.position = "fixed";
            navmaster.style.right = "20px";
            navmaster.style.bottom = "230px";
            setTimeout(function(){
                buttonstart();
                travelerstart();
                videostart();
            },1000)
        },1500)
    },50);
};



//Iniciador del boton de traveler y asignador de eventos
function travelerstart() {
    setTimeout(function(){
        const travelmed = document.getElementById('travelerbox');
        const widthfeed = travelmed.clientWidth;
        retres = widthfeed - lenmeddd;
        travact = 1;
        travelerbox.style.left = "-" + retres + "px";
        travelerimg.style.transform = "rotate(360deg)";
        travelerstat = 2;
        travelerimg.addEventListener('click',travelerup);
        setTimeout(function(){travact=0;},1000);
    },1500)
};

function travelerup(){
    if(travact == 0) {
        if (travelerstat == 2){
            travact = 1;
            travelerbox.style.left = "-5px";
            travelerimg.style.transform = "rotate(0deg)";
            travelerstat = 1;
            travelerimg.style.background = '#fff';
            tempactive = 1;
            active();
            setTimeout(function(){travact=0;},1000);
            setTimeout(function(){
                travelerimg.src = 'img/traveler-af.png'
                travelerimg.style.background = 'none';
            },500);
        }
    }
    if(travact == 0) {
        if (travelerstat == 1){
            tempactive = 0;
            tiempo = 0;
            travact = 1;
            travelerbox.style.left = "-" + retres + "px";
            travelerimg.style.transform = "rotate(360deg)";
            travelerstat = 2;
            travelerimg.style.background = '#fff';
            setTimeout(function(){travact=0;},1000);
            setTimeout(function(){
                travelerimg.src = 'img/traveler.png'
                travelerimg.style.background = 'none';
            },500);
        }
    }
}
function videostart(){
    campanabox.style.display = "flex";
    setTimeout(function(){
        campanabox.style.opacity = "1";
        campanabox.style.top = "0px";
        //document.getElementById('videocampana').play();
        campanabutton.addEventListener('click',function(){
            campanabox.style.opacity = "0";
            campanabox.style.top = "500px";
            tncampana();
            setTimeout(function(){
                campanabox.style.display = "none";
            },1000);
        })
        document.getElementById('videoclose').addEventListener('click',function(){
            campanabox.style.opacity = "0";
            campanabox.style.top = "500px";
            setTimeout(function(){
                campanabox.style.display = "none";
            },1000);
        })
    })
}


//botones

function buttonstart() {
    navmaster.addEventListener('click',function(){
    if(action == 0) {
            action = 1;
        navmaster.style.width = "50vw";
        navmaster.style.height = "100vh";
        navmaster.style.borderRadius = "0px";
        navmaster.style.position = "fixed";
        navmaster.style.right = "0px";
        navmaster.style.bottom = "0px";
        menunavimg.style.opacity = "0";
        setTimeout(function(){
            navafter.style.display = "flex";
            navghost.style.display = "flex";
            setTimeout(function(){
                navafter.style.opacity = "1";
                navghost.style.opacity = "1";
                action = 0;
                navghost.addEventListener('click', buttonend);
            },100);
        },500);
    }
    });

}


function buttonend(){
    if(action == 0){
        action = 1;
    navafter.style.opacity = "0";
    navghost.style.opacity = "0";
    setTimeout(function(){
        navafter.style.display = "none";
        navghost.style.display = "none";
        menunavimg.style.opacity = "1";
        action = 0;
    },500);
    navmaster.style.width = "100px";
    navmaster.style.height = "100px";
    navmaster.style.borderRadius = "50%";
    navmaster.style.position = "fixed";
    navmaster.style.right = "20px";
    navmaster.style.bottom = "230px";
    }
}



//lanzadores menu
function tncampana(){
    reset();
    buttonend();
    if (language == 2){
        menupage.src = 'img/menu/campana/campana-ing.jpg';
    } else if (language == 1){
        menupage.src = 'img/menu/campana/campana-esp.jpg';
    }
}
function tnsection1(){
    reset();
    buttonend();
    if (language == 2){
        menupage.src = 'img/menu/ing/Breakfast.jpg';
    } else if (language == 1){
        menupage.src = 'img/menu/esp/Desayunos.jpg';
    }
}

function tnsection2(){
    reset();
    buttonend();
    buttonmenu.style.display = "flex";
    if (language == 2){
        menupage.src = 'img/menu/ing/SidesTacos.jpg';
    } else if (language == 1){
        menupage.src = 'img/menu/esp/EntradasTacos.jpg';
    }
}

function tnsection3(){
    reset();
    buttonend();
    if (language == 2){
        menupage.src = 'img/menu/ing/Beverages.jpg';
    } else if (language == 1){
        menupage.src = 'img/menu/esp/Bebidas.jpg';
    }
}

function tnsection4(){
    reset();
    buttonend();
    if (language == 2){
        menupage.src = 'img/menu/ing/Beers.jpg';
    } else if (language == 1){
        menupage.src = 'img/menu/esp/Cervezas.jpg';
    }
}

function tnsection5(){
    reset();
    buttonend();
    if (language == 2){
        menupage.src = 'img/menu/ing/Spirits.jpg';
    } else if (language == 1){
        menupage.src = 'img/menu/esp/Destilados.jpg';
    }
}

function tnsection6(){
    reset();
    buttonend();
    if (language == 2){
        menupage.src = 'img/menu/ing/Desserts.jpg';
    } else if (language == 1){
        menupage.src = 'img/menu/esp/Postres.jpg';
    }
}

function tnsection7(){
    reset();
    buttonend();
}

function tnsection8(){
    reset();
    buttonend();
}
function tnsection9(){
    reset();
    buttonend();
}
function tnsection10(){
    reset();
    buttonend();
}

//sublanzadores
function reset(){
    menuboxx.scroll(0,0);
    navafter.scroll(0,0);
    menumaster.style.display = "flex";
    heroo.style.display = "none";
    footer.style.display = "none";
    buttonmenu.style.display = "none"
}



//cambiadores de idiomas

function setenglish() {
    campanasection.src = 'img/nav/ing/campana-ing.png';
    menunavimg.src = 'img/menunaving.png';
    btnsection1.src = 'img/nav/ing/breakfast.png';
    btnsection2.src = 'img/nav/ing/tacos.png';
    btnsection3.src = 'img/nav/ing/beverages.png';
    btnsection4.src = 'img/nav/ing/beers.png';
    btnsection5.src = 'img/nav/ing/spirits.png';
    btnsection6.src = 'img/nav/ing/desserts.png';
    buttonmenu.src = 'img/bebidas/bebidas-ing.jpg'
    linkfeed.href = "https://es.research.net/r/TF_Cabos?lang=en";
    linkfeed.textContent = "Feedback";
    videocampana.src = "img/videocampana/campana-ing.mp4";
    lenmeddd = 60;
    uneteequipo.textContent = "Join our team";
    campanabutton.textContent = "View more";
}
function setespanol() {
    campanasection.src = 'img/nav/esp/campana-esp.png';
    menunavimg.src = 'img/menunavesp.png';
    btnsection1.src = 'img/nav/esp/desayunos.png';
    btnsection2.src = 'img/nav/esp/tacos.png';
    btnsection3.src = 'img/nav/esp/bebidas.png';
    btnsection4.src = 'img/nav/esp/cervezas.png';
    btnsection5.src = 'img/nav/esp/destilados.png';
    btnsection6.src = 'img/nav/esp/postres.png';
    buttonmenu.src = 'img/bebidas/bebidas-esp.jpg'
    linkfeed.href = "https://es.research.net/r/TF_Zihuatanejo";
    linkfeed.textContent = "Evalúanos";
    videocampana.src = "img/videocampana/campana-esp.mp4";
    lenmeddd = 50;
}


//temporizador traveler

function active(){
    if (tempactive == 1) {
        if(tiempo<5){
            tiempo ++;
            setTimeout(function(){active();},1000);
        } else {
            travelerup();
        }
    } else if (tempactive == 0) {
        tiempo = 0;
    }
}
