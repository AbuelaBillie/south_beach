window.addEventListener("load", function () {
    // TRAEMOS ELEMENTOS HTML
    const btnMenu = document.querySelector("#btnMenu");
    const menu = document.querySelector(".navMenu");
    const main = document.querySelector(".main");
    const footer = document.querySelector(".footer");
  
    // LISTENER BOTON MENU 
    btnMenu.addEventListener("click", function () {
      menu.classList.toggle("mostrar");
    });
  
    main.addEventListener("click", function () {
      menu.classList.remove("mostrar");
    });

    footer.addEventListener("click", function () {
      menu.classList.remove("mostrar");
    });
  
  });
  