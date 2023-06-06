const imageCase = document.querySelectorAll(".project .img-case");

imageCase.forEach(image => {
    const overlay = image.querySelector(".overlay");
    image.addEventListener("mouseover", function() {
        overlay.classList.remove("hide");
    });

    image.addEventListener("mouseout", function() {
        overlay.classList.add("hide");
    });

});


