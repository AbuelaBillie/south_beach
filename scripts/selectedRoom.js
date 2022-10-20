window.addEventListener("load", function () {
    if (localStorage.getItem("selectedRoom") != undefined) {
        let selectedRoom = localStorage.getItem("selectedRoom");
        const room = document.querySelector("#room");
        room.value = selectedRoom;
    }
})