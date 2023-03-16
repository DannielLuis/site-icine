//
const navbar = document.querySelector(".navbar");
const btn_hamburger = document.querySelector(".btn-hamburger");

function addActive(){
    //alert("Testando!!!");
    btn_hamburger.classList.toggle("active");
}

//btn_hamburger.addEventListener("click", addActive);

btn_hamburger.addEventListener("click", () => {
    btn_hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
});
