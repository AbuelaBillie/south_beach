window.addEventListener("load", function () {
    //TRAEMOS BOTONES SLIDER Y CONTENEDOR IMAGEN
    const left_btn_0 = document.querySelector("#left-btn-0");
    const right_btn_0 = document.querySelector("#right-btn-0");
    const left_btn_1 = document.querySelector("#left-btn-1");
    const right_btn_1 = document.querySelector("#right-btn-1");
    const left_btn_2 = document.querySelector("#left-btn-2");
    const right_btn_2 = document.querySelector("#right-btn-2");
    const left_btn_3 = document.querySelector("#left-btn-3");
    const right_btn_3 = document.querySelector("#right-btn-3");
    const left_btn_4 = document.querySelector("#left-btn-4");
    const right_btn_4 = document.querySelector("#right-btn-4");
    const left_btn_5 = document.querySelector("#left-btn-5");
    const right_btn_5 = document.querySelector("#right-btn-5");
    const left_btn_6 = document.querySelector("#left-btn-6");
    const right_btn_6 = document.querySelector("#right-btn-6");
    const left_btn_7 = document.querySelector("#left-btn-7");
    const right_btn_7 = document.querySelector("#right-btn-7");


    const imagen0 =  document.querySelector("#camas-0");
    const imagen1 =  document.querySelector("#camas-1");
    const imagen2 =  document.querySelector("#camas-2");
    const imagen3 =  document.querySelector("#camas-3");
    const imagen4 =  document.querySelector("#camas-4");
    const imagen5 =  document.querySelector("#camas-5");
    const imagen6 =  document.querySelector("#camas-6");
    const imagen7 =  document.querySelector("#camas-7");

    
    //ARRAYS IMAGENES
    const arrayImagenes0 = ["camas-2.jpg", "camas-1.jpg", "camas-5.jpg"];
    const arrayImagenes1 = ["camas-2.jpg", "camas-1.jpg", "camas-5.jpg"];
    const arrayImagenes2 = ["camas-2.jpg", "camas-1.jpg", "camas-5.jpg"];
    const arrayImagenes3 = ["camas-2.jpg", "camas-1.jpg", "camas-5.jpg"];
    const arrayImagenes4 = ["camas-2.jpg", "camas-1.jpg", "camas-5.jpg"];
    const arrayImagenes5 = ["camas-2.jpg", "camas-1.jpg", "camas-5.jpg"];
    const arrayImagenes6 = ["camas-2.jpg", "camas-1.jpg", "camas-5.jpg"];
    const arrayImagenes7 = ["camas-2.jpg", "camas-1.jpg", "camas-5.jpg"];
    
    let cont_imagen = [0,0,0,0,0,0,0,0]

    function sliderImagenDerecha(arrayImagenes,indice) {
        const max = (arrayImagenes.length) -1
        cont_imagen[indice] += 1;
        if (cont_imagen[indice] > max) {
            cont_imagen[indice] = 0;
        }
        return arrayImagenes[cont_imagen[indice]];
    }

    function sliderImagenIzquierda(arrayImagenes, indice) {
        const max = (arrayImagenes.length) -1
        cont_imagen[indice] -= 1;
        if (cont_imagen[indice] < 0) {
            cont_imagen[indice] = max;
        }
        return arrayImagenes[cont_imagen[indice]];
    }


    //LISTENERS BOTONES SLIDER
    left_btn_0.addEventListener("click", function () {
        imagen0.style.backgroundImage=`url("../resources/${sliderImagenIzquierda(arrayImagenes0,0)}")`
    })
    right_btn_0.addEventListener("click", function () {
        imagen0.style.backgroundImage=`url("../resources/${sliderImagenDerecha(arrayImagenes0,0)}")`
    })
    left_btn_1.addEventListener("click", function () {
        imagen1.style.backgroundImage=`url("../resources/${sliderImagenIzquierda(arrayImagenes1,1)}")`
    })
    right_btn_1.addEventListener("click", function () {
        imagen1.style.backgroundImage=`url("../resources/${sliderImagenDerecha(arrayImagenes1,1)}")`
    })
    left_btn_2.addEventListener("click", function () {
        imagen2.style.backgroundImage=`url("../resources/${sliderImagenIzquierda(arrayImagenes2,2)}")`
    })
    right_btn_2.addEventListener("click", function () {
        imagen2.style.backgroundImage=`url("../resources/${sliderImagenDerecha(arrayImagenes2,2)}")`
    })
    left_btn_3.addEventListener("click", function () {
        imagen3.style.backgroundImage=`url("../resources/${sliderImagenIzquierda(arrayImagenes3,3)}")`
    })
    right_btn_3.addEventListener("click", function () {
        imagen3.style.backgroundImage=`url("../resources/${sliderImagenDerecha(arrayImagenes3,3)}")`
    })
    left_btn_4.addEventListener("click", function () {
        imagen4.style.backgroundImage=`url("../resources/${sliderImagenIzquierda(arrayImagenes4,4)}")`
    })
    right_btn_4.addEventListener("click", function () {
        imagen4.style.backgroundImage=`url("../resources/${sliderImagenDerecha(arrayImagenes4,4)}")`
    })
    left_btn_5.addEventListener("click", function () {
        imagen5.style.backgroundImage=`url("../resources/${sliderImagenIzquierda(arrayImagenes5,5)}")`
    })
    right_btn_5.addEventListener("click", function () {
        imagen5.style.backgroundImage=`url("../resources/${sliderImagenDerecha(arrayImagenes5,5)}")`
    })
    left_btn_6.addEventListener("click", function () {
        imagen6.style.backgroundImage=`url("../resources/${sliderImagenIzquierda(arrayImagenes6,6)}")`
    })
    right_btn_6.addEventListener("click", function () {
        imagen6.style.backgroundImage=`url("../resources/${sliderImagenDerecha(arrayImagenes6,6)}")`
    })
    left_btn_7.addEventListener("click", function () {
        imagen7.style.backgroundImage=`url("../resources/${sliderImagenIzquierda(arrayImagenes7,7)}")`
    })
    right_btn_7.addEventListener("click", function () {
        imagen7.style.backgroundImage=`url("../resources/${sliderImagenDerecha(arrayImagenes7,7)}")`
    })
})