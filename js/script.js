const imageCase = document.querySelectorAll(".project .img-case");
const topImages = document.querySelectorAll("nav .socials img");
const bottomImages = document.querySelectorAll("footer .socials img");
const email = document.querySelector('#email');
const errorMsg = document.querySelector('.error-msg')
const myForm = document.querySelector('form');
const exclamation = document.querySelector('.fa-circle-exclamation');
const cName = document.querySelector('#name')
const cMessage = document.querySelector('#message');
const regex = /^([a-z\._-\d]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i;

const emailContent = email.value;

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!emailContent.match(regex) || cName.value === "" || cMessage.value === "") {
        // submit the form
        errorMsg.classList.remove('hide');
        exclamation.classList.remove('hide');
    } else {
        // add red line, message and exclamation
        errorMsg.classList.add('hide');
        exclamation.classList.add('hide');
        cName.value = "";
        cMessage.value = "";
        email.value = "";
    }
});

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
