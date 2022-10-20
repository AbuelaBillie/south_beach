window.addEventListener("load", function () {
    // TRAEMOS ELEMENTOS HTML
    const btnMenu = document.querySelector("#btnMenu");
    const menu = document.querySelector(".navMenu");
  
    // LISTENER BOTON MENU 
    btnMenu.addEventListener("click", function () {
      menu.classList.toggle("mostrar");
    });
  
  });
  