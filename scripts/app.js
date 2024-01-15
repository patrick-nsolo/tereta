//NAVIGATION SCRIPT START
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const btn = document.querySelector(".btn");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    btn.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>
n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    btn.classList.toggle("active");
}))
//NAVIGATION SCRIPT END


//AUTOMATIC SLIDER SCRIPT START
var swiper = new Swiper(".mySwiper",{
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction",
    },
    autoplay:{
        delay:6000,
        disableOnInteraction:false,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: "creative", 
    creativeEffect:{
        prev:{
            shadow:true,
            translate:[0,0-400],
        },
        next:{
            translate:["100",0,0],

        },
    }
});
//AUTOMATIC SLIDER SCRIPT END

//COUNTER
const cardSection = document.querySelector('.card-counters');
const cards = document.querySelectorAll('.counter-card');
const counters = document.querySelectorAll('.count');

// Function to start counting
function startCounting(targetCount, element) {
    let currentCount = 0;
    const increment = Math.ceil(targetCount / 50); // Divide the target count to determine the increment

    const interval = setInterval(() => {
        if (currentCount + increment <= targetCount) {
            currentCount += increment;
            element.textContent = currentCount;
        } else {
            element.textContent = targetCount; // Ensure the final count is exact
            clearInterval(interval);
        }
    }, 20); // Adjust the interval for the desired speed
}

// Function to check if an element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    cards.forEach((card, index) => {
        if (isElementInViewport(card)) {
            if (!card.classList.contains('counting')) {
                card.classList.add('counting');
                startCounting(targetCounts[index], counters[index]);
            }
        } else {
            card.classList.remove('counting');
        }
    });
}

const targetCounts = [110, 675, 987];
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // Handle initial load

handleScroll(); // Call it initially in case the section is already in view