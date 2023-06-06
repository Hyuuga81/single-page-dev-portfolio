const imageCase = document.querySelectorAll(".img-case");

for (let image of imageCase) {
    const overlay = document.querySelector(".overlay");
    image.addEventListener("mouseover", function() {
        overlay.classList.remove("hide");
    });

    image.addEventListener("mouseout", function() {
        overlay.classList.add("hide");
    });
}
