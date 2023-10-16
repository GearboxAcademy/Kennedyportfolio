document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");
    
    menuButton.addEventListener("click", function (){
        sidebar.classList.toggle("active");
        content.classList.toggle("active");
    })
})