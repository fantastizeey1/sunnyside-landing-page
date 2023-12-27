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
        document.getElementById("egg").src = "images/mobile/image-transform.jpg";
        document.getElementById("standout").src = "images/mobile/image-stand-out.jpg";
        document.getElementById("design").src = "images/mobile/image-graphic-design.jpg";
        document.getElementById("orange").src = "images/mobile/image-gallery-orange.jpg";
        document.getElementById("photography").src = "images/mobile/image-photography.jpg";
        document.getElementById("cone").src = "images/mobile/image-gallery-cone.jpg";
        document.getElementById("sugarcube").src = "images/mobile/image-gallery-sugar-cubes.jpg";
        document.getElementById("milkbottles").src = "images/mobile/image-gallery-milkbottles.jpg";
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
