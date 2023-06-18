const imageCase = document.querySelectorAll(".project .img-case");
const topImages = document.querySelectorAll("nav .socials img");
const bottomImages = document.querySelectorAll("footer .socials img");
    


if (window.innerWidth >= 1200) {
    imageCase.forEach(image => {
        const overlay = image.querySelector(".overlay");
    
        image.addEventListener("mouseover", function() {
            overlay.classList.remove("hide");
        });
    
        image.addEventListener("mouseout", function() {
            overlay.classList.add("hide");
        });
    });

    // socials mouseover function

    const mouseFunction = (socials) => {

        socials.forEach(image => {
            image.addEventListener("mouseover", function() {
                if (image.classList.contains("github")) {
                    image.src = "../images/icon-github-green.svg";
                } else if (image.classList.contains("frontend")) {
                    image.src = "..//images/icon-frontend-mentor-green.svg";
                } else if (image.classList.contains("linkedin")) {
                    image.src = "..//images/icon-linkedin-green.svg";
                } else if (image.classList.contains("twitter")) {
                    image.src = "..//images/icon-twitter-green.svg";
                }
            });

            image.addEventListener("mouseout", function() {
                if (image.classList.contains("github")) {
                    image.src = "../images/icon-github.svg";
                } else if (image.classList.contains("frontend")) {
                    image.src = "../images/icon-frontend-mentor.svg";
                } else if (image.classList.contains("linkedin")) {
                    image.src = "../images/icon-linkedin.svg";
                } else if (image.classList.contains("twitter")) {
                    image.src = "..//images/icon-twitter.svg";
                }
            });
        });
    }

    // Top and bottom mouseover function call
    mouseFunction(topImages);
    mouseFunction(bottomImages);

} 

