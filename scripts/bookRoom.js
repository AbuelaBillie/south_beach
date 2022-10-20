window.addEventListener("load", function () {
    // TRAER BOTONES RESERVA
    const btn1 = document.querySelector("#book1");
    const btn2 = document.querySelector("#book2");
    const btn3 = document.querySelector("#book3");
    const btn4 = document.querySelector("#book4");
    const btn5 = document.querySelector("#book5");
    const btn6 = document.querySelector("#book6");
    const btn7 = document.querySelector("#book7");
    const btn8 = document.querySelector("#book8");

    // LISTENER BOTONES RESERVA
    btn1.addEventListener("click", function(){
        localStorage.setItem("selectedRoom", 1);
    })
    btn2.addEventListener("click", function(){
        localStorage.setItem("selectedRoom", 2);
    })
    btn3.addEventListener("click", function(){
        localStorage.setItem("selectedRoom", 3);
    })
    btn4.addEventListener("click", function(){
        localStorage.setItem("selectedRoom", 4);
    })
    btn5.addEventListener("click", function(){
        localStorage.setItem("selectedRoom", 5);
    })
    btn6.addEventListener("click", function(){
        localStorage.setItem("selectedRoom", 6);
    })
    btn7.addEventListener("click", function(){
        localStorage.setItem("selectedRoom", 7);
    })
    btn8.addEventListener("click", function(){
        localStorage.setItem("selectedRoom", 8);
    })
})