document.addEventListener("DOMContentLoaded", function() {
    let navElement = document.getElementById("show-nav");
    let menu = document.querySelector("ul");
    let triangle = document.querySelector(".triangle");
    let isShowed = false;

    if (navElement) {
        navElement.addEventListener("click", toggleNav);
    }



window.onload = function() {
    if (screen.width <= 600 ) {
        document.getElementById("egg").src = "image-transform.jpg";
        document.getElementById("standout").src = "image-stand-out.jpg";
        document.getElementById("design").src = "image-graphic-design.jpg";
        document.getElementById("orange").src = "image-gallery-orange.jpg";
        document.getElementById("photography").src = "image-photography.jpg";
        document.getElementById("cone").src = "image-gallery-cone.jpg";
        document.getElementById("sugarcube").src = "image-gallery-sugar-cubes.jpg";
        document.getElementById("milkbottles").src = "image-gallery-milkbottles.jpg";
    }
}; 

function toggleNav() {
    if (isShowed) {
        menu.style.display = "none";
        triangle.style.display = "none";
    } else {
        menu.style.display = "flex";
        triangle.style.display = "block";
    }
    isShowed = !isShowed; 
}
});
