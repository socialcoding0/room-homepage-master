const sliderImg = document.querySelector("#slider-img");
const titleContent = document.querySelector("#title-content");
const infoContent = document.querySelector("#info-content");
const sliderContainer = document.querySelector(".slider-container");
const leftControl = document.querySelector(".left-control");
const rightControl = document.querySelector(".right-control");


const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const sliderArray = [
    {
        h1: "Discover innovative ways to decorate",
        p: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        src: "./images/desktop-image-hero-1.jpg"
    },
    {
        h1: "We are available all across the globe",
        p: "  With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        src: "./images/desktop-image-hero-2.jpg"
    },
    {
        h1: "Manufactured with the best materials",
        p: "  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        src: "./images/desktop-image-hero-3.jpg"
    }
]

let val = 0;
console.log(sliderArray);


showSlider();
controller();
function showSlider() {
    console.log(val);
    console.log(sliderArray[val]);

    sliderContainer.innerHTML = "";
    let sliderDiv = `
    <div class="slider-div">
    <div class="img-container">
    <img src="${sliderArray[val].src}" id="slider-img">
    </div>
    <div class="info-slider">
        <div class="content">
            <h1 id="title-content">${sliderArray[val].h1}</h1>
            <p id="info-content"> ${sliderArray[val].p}
            </p>
            <a href="#">shop now <img src="./images/icon-arrow.svg" alt="icon-arrow"></a>
        </div>
    </div>
</div>
    
    `;


    sliderContainer.insertAdjacentHTML("beforeend", sliderDiv);




}






function controller() {

    leftControl.addEventListener("click", function () {
        val--;

        if (val < 0) {
            val = sliderArray.length - 1;
        }
        showSlider();

    });

    rightControl.addEventListener("click", function () {


        val++;

        if (val == sliderArray.length) {
            val = 0;
        }
        showSlider();
    });
}




hamburgerIcon.addEventListener("click", function () {
    document.querySelector("ul").style.display = "flex";
});

closeIcon.addEventListener("click", function () {
    document.querySelector("ul").style.display = "none";
});